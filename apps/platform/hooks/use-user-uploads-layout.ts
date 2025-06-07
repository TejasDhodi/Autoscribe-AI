"use client";
import { validateEmail } from "@/lib/emails";
import { useDashboard } from "@/provider/dashboard-provider";
import { IEmailList } from "@/types/email-list";
import axios from "axios";
import { useCallback, useState } from "react";
import { toast } from "sonner";

interface CSVData {
  headers: string[];
  rows: string[][];
  totalRows: number;
  validEmails: number;
  invalidEmails: number;
}

interface UseUserUploadsProps {
  getLastestEmailListsData: () => Promise<void>;
}

export const useUserUploadsLayout = ({
  getLastestEmailListsData,
}: UseUserUploadsProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [csvData, setCsvData] = useState<CSVData | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const parseCSV = useCallback((text: string): CSVData => {
    const lines = text.split("\n").filter((line) => line.trim());
    const headers = lines[0]
      ? lines[0].split(",").map((h) => h.trim().replace(/"/g, ""))
      : [];
    const rows = lines
      .slice(1)
      .map((line) =>
        line.split(",").map((cell) => cell.trim().replace(/"/g, ""))
      );

    let validEmails = 0;
    let invalidEmails = 0;

    rows.forEach((row) => {
      if (row[0] && validateEmail(row[0])) {
        validEmails++;
      } else if (row[0]) {
        invalidEmails++;
      }
    });

    return {
      headers,
      rows: rows.slice(0, 10),
      totalRows: rows.length,
      validEmails,
      invalidEmails,
    };
  }, []);

  const onFileSelectHandler = useCallback(
    async (file: File) => {
      setSelectedFile(file);
      setFileName(file.name.replace(".csv", ""));
      setIsLoading(true);
      setLoadingProgress(0);

      // Simulate loading progress
      const progressInterval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 200);

      try {
        const text = await file.text();

        // Simulate processing time
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const parsedData = parseCSV(text);
        setCsvData(parsedData);
        setLoadingProgress(100);

        setTimeout(() => {
          setIsLoading(false);
          setShowPreview(true);
        }, 500);
      } catch (error) {
        console.error("Error parsing CSV:", error);
        setIsLoading(false);
        toast.error("Failed to parse CSV file. Please check the format.");
      }
    },
    [parseCSV]
  );

  // const onUploadHanlder = useCallback(async () => {
  //   console.log({csvData});
    
  //   if (!fileName.trim()) {
  //     toast.error("Please enter a file name");
  //     return;
  //   }
  //   if (!selectedFile || !csvData) {
  //     toast.error("Please select and validate a CSV file");
  //     return;
  //   }

  //   try {
  //     setIsUploading(true);
  //     const body: IEmailList = {
  //       listName: fileName,
  //       emailsData: csvData.rows
  //         .map((row) => {
  //           if (row[0]) {
  //             return {
  //               email: row[0],
  //               name: row[1] || "",
  //               meta: {},
  //             };
  //           }
  //         })
  //         .filter(Boolean) as IEmailList["emailsData"],
  //     };
  //     const response = await fetch("/api/email-list", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(body),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Failed to upload email list");
  //     }

  //     const data = await response.json();
  //     if (data?.success) {
  //       await getLastestEmailListsData();
  //       toast.success("Email list uploaded successfully!");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     toast.error("Failed to upload email list. Please try again.");
  //   } finally {
  //     setSelectedFile(null);
  //     setCsvData(null);
  //     setFileName("");
  //     setShowPreview(false);
  //     setIsUploading(false);
  //   }
  // }, [csvData, fileName, getLastestEmailListsData, selectedFile]);

  const onUploadHanlder = useCallback(async () => {

      const emailList = csvData?.rows.flat();
      
      try {
        setIsUploading(true);
        const response = await axios.post("http://localhost:8000/api/v1/storeCsv", {
          fileName,
          emailList
        })
  
        if(response.status === 200) {
          toast.success(`${fileName} Email list uploaded successfully!`);
          setIsUploading(false);
          getLastestEmailListsData();
        }
      } catch (error) {
        console.log(error);
      } finally {
        setSelectedFile(null);
        setCsvData(null);
        setFileName("");
        setShowPreview(false);
        setIsUploading(false);
      }
  }, [csvData, fileName, selectedFile]);

  const onDeleteEmailListHandler = useCallback(async (id: string) => {
      try {
        const {status} = await axios.delete(`http://localhost:8000/api/v1/emails/delete/${id}`);

        if(status === 200) {
          getLastestEmailListsData();
          toast.success("Email list deleted successfully!");
        }
      } catch (error) {
        console.log(error);
      }
    },[getLastestEmailListsData]);

  const closePreview = useCallback(() => {
    setShowPreview(false);
  }, []);

  const openPreview = useCallback(() => {
    if (csvData) {
      setShowPreview(true);
    }
  }, [csvData]);

  return {
    dragActive,
    fileName,
    selectedFile,
    isLoading,
    loadingProgress,
    csvData,
    showPreview,
    closePreview,
    setDragActive,
    onUploadHanlder,
    onFileSelectHandler,
    openPreview,
    setFileName,
    isUploading,
    onDeleteEmailListHandler,
  };
};
