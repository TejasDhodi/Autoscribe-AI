"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Upload,
  Trash2,
  Download,
  AlertCircle,
  CheckCircle,
  X,
  FileText,
  Users,
  Loader2Icon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useUserUploadsLayout } from "@/hooks/use-user-uploads-layout";
import { validateEmail } from "@/lib/emails";
import { useRef } from "react";
import { useDashboard } from "@/provider/dashboard-provider";

export function UserUploads() {
  const inputRef = useRef<HTMLInputElement>(null);

  const { emailListsData, getLastestEmailListsData } = useDashboard();

  const {
    closePreview,
    csvData,
    dragActive,
    fileName,
    isLoading,
    loadingProgress,
    onUploadHanlder,
    onFileSelectHandler,
    selectedFile,
    showPreview,
    setFileName,
    openPreview,
    isUploading,
    setDragActive,
    onDeleteEmailListHandler,
  } = useUserUploadsLayout({ getLastestEmailListsData });

  return (
    <div className="space-y-6">
      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold">User Uploads</h1>
      </motion.div>

      {/* Upload Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Upload Email List</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive
                  ? "border-primary bg-primary/5"
                  : "border-muted-foreground/25"
              }`}
              onDragEnter={() => setDragActive(true)}
              onDragLeave={() => setDragActive(false)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                setDragActive(false);
                const files = Array.from(e.dataTransfer.files);
                if (files[0] && files[0].type === "text/csv") {
                  onFileSelectHandler(files[0]);
                }
              }}
            >
              <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg font-medium mb-2">
                Drop your CSV file here, or click to browse
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Supports CSV files only. Maximum file size: 10MB
              </p>
              <input
                type="file"
                accept=".csv"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) onFileSelectHandler(file);
                }}
                className="hidden"
                id="file-upload"
                disabled={isLoading}
              />
              <label htmlFor="file-upload">
                <Button variant="outline" asChild disabled={isLoading}>
                  <span>Choose File</span>
                </Button>
              </label>
              {selectedFile && !isLoading && (
                <p className="text-sm text-green-600 mt-2">
                  Selected: {selectedFile.name}
                </p>
              )}
            </div>

            {/* Loading State */}
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                    <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                      Processing CSV file...
                    </span>
                  </div>
                  <Progress value={loadingProgress} className="h-2" />
                  <p className="text-xs text-blue-800 dark:text-blue-200 mt-2">
                    {loadingProgress < 30 && "Reading file..."}
                    {loadingProgress >= 30 &&
                      loadingProgress < 60 &&
                      "Parsing data..."}
                    {loadingProgress >= 60 &&
                      loadingProgress < 90 &&
                      "Validating emails..."}
                    {loadingProgress >= 90 && "Almost done..."}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* CSV Preview Button */}
            {csvData && !isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="text-sm font-medium text-green-900 dark:text-green-100">
                        CSV processed successfully!
                      </p>
                      <p className="text-xs text-green-800 dark:text-green-200">
                        {csvData.totalRows} rows • {csvData.validEmails} valid
                        emails • {csvData.invalidEmails} invalid
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openPreview()}
                  >
                    Preview Data
                  </Button>
                </div>
              </motion.div>
            )}

            <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-primary/50">
              <div className="flex items-start space-x-2">
                <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium mb-1">CSV Format Requirements:</p>
                  <ul className=" space-y-1">
                    <li>
                      • <strong>First column:</strong> Email addresses
                      (required)
                    </li>
                    <li>
                      • <strong>Second column:</strong> Name (optional, will be
                      used as display name)
                    </li>
                    <li>
                      • <strong>Additional columns:</strong> Metadata for
                      segmentation (optional)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="list-name">List Name *</Label>
                <Input
                  ref={inputRef}
                  placeholder="Enter a name for this email list"
                  value={fileName}
                  onChange={(e) => setFileName(e.target.value)}
                />
              </div>
              <Button
                onClick={onUploadHanlder}
                disabled={
                  !fileName.trim() ||
                  !selectedFile ||
                  !csvData ||
                  isLoading ||
                  isUploading
                }
              >
                {isUploading ? (
                  <Loader2Icon className="animate-spin" />
                ) : (
                  <Upload className="h-4 w-4 mr-2" />
                )}
                Upload Email List
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* CSV Preview Dialog */}
      <Dialog
        open={showPreview}
        onOpenChange={(open) => !open && closePreview()}
      >
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5" />
              <span>CSV Preview - {selectedFile?.name}</span>
            </DialogTitle>
          </DialogHeader>

          {csvData && (
            <div className="space-y-4">
              {/* Summary Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg text-center">
                  <div className="flex items-center justify-center space-x-2 mb-1">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                      Total Rows
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-blue-600">
                    {csvData.totalRows}
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg text-center">
                  <div className="flex items-center justify-center space-x-2 mb-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-green-900 dark:text-green-100">
                      Valid Emails
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-green-600">
                    {csvData.validEmails}
                  </p>
                </div>
                <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded-lg text-center">
                  <div className="flex items-center justify-center space-x-2 mb-1">
                    <X className="h-4 w-4 text-red-600" />
                    <span className="text-sm font-medium text-red-900 dark:text-red-100">
                      Invalid Emails
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-red-600">
                    {csvData.invalidEmails}
                  </p>
                </div>
              </div>

              {/* Data Preview Table */}
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-muted p-3 border-b">
                  <h4 className="font-medium">Data Preview (First 10 rows)</h4>
                </div>
                <div className="overflow-auto max-h-64">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        {csvData.headers.map((header, index) => (
                          <TableHead key={index} className="font-medium">
                            {header}
                            {index === 0 && (
                              <Badge variant="secondary" className="ml-2">
                                Email
                              </Badge>
                            )}
                            {index === 1 && (
                              <Badge variant="outline" className="ml-2">
                                Name
                              </Badge>
                            )}
                            {index > 1 && (
                              <Badge variant="outline" className="ml-2">
                                Meta
                              </Badge>
                            )}
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {csvData.rows.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                          {row.map((cell, cellIndex) => (
                            <TableCell
                              key={cellIndex}
                              className="font-mono text-sm"
                            >
                              {cellIndex === 0 ? (
                                <div className="flex items-center space-x-2">
                                  <span>{cell}</span>
                                  {validateEmail(cell) ? (
                                    <CheckCircle className="h-3 w-3 text-green-600" />
                                  ) : (
                                    <X className="h-3 w-3 text-red-600" />
                                  )}
                                </div>
                              ) : (
                                cell || (
                                  <span className="text-muted-foreground">
                                    -
                                  </span>
                                )
                              )}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>

              {csvData.totalRows > 10 && (
                <p className="text-sm text-muted-foreground text-center">
                  Showing first 10 rows of {csvData.totalRows} total rows
                </p>
              )}
            </div>
          )}

          <DialogFooter>
            <Button
              onClick={() => {
                closePreview();
                setTimeout(() => {
                  inputRef.current?.focus();
                }, 100);
              }}
            >
              Looks Good, Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Email Lists Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Uploaded Email Lists</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>List Name</TableHead>
                  <TableHead>Email Count</TableHead>
                  {/* <TableHead>Upload Date</TableHead>
                  <TableHead>Status</TableHead> */}
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {emailListsData.map((list, index) => (
                  <motion.tr
                    key={list._id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="hover:bg-muted/50"
                  >
                    <TableCell className="font-medium">{list.fileName}</TableCell>
                    <TableCell>{list.emailList.length}</TableCell>
                    {/* <TableCell>{list.uploaded}</TableCell> */}
                    {/* <TableCell>
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded-full ${
                          list.status === "Active"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                        }`}
                      >
                        {list.status}
                      </span>
                    </TableCell> */}
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button disabled variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button
                          onClick={() => {
                            console.log(list._id);
                            onDeleteEmailListHandler(list._id);
                          }}
                          variant="ghost"
                          size="sm"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
