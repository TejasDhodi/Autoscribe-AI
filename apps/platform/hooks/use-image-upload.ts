"use client";
import { useState, useCallback } from "react";

export function useImageUpload() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [uploadedUrl, setUploadedUrl] = useState<null | string>(null);

  const uploadImage = useCallback(async (file: File, folder = "default") => {
    setLoading(true);
    setError(null);
    setUploadedUrl(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("folder", folder);
    formData.append("fileName", file.name);

    try {
      const res = await fetch("/api/upload-image", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Upload failed");
      }

      const data = await res.json();
      setUploadedUrl(data.url);
      return data.url;
    } catch (err: any) {
      setError(err.message || "Unknown error");
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    uploadImage,
    loading,
    error,
    uploadedUrl,
  };
}
