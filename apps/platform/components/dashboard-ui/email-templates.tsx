"use client";

import { useCallback, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Edit, Eye, Send, Copy, Plus } from "lucide-react";
import { motion } from "framer-motion";

const templates = [
  {
    id: 1,
    name: "Weekly Newsletter",
    subject: "Your Weekly AI Insights",
    created: "2024-01-15",
    lastModified: "2024-01-20",
    status: "Active",
  },
  {
    id: 2,
    name: "Product Updates",
    subject: "New Features & Improvements",
    created: "2024-01-10",
    lastModified: "2024-01-18",
    status: "Draft",
  },
  {
    id: 3,
    name: "Holiday Special",
    subject: "Season's Greetings from AutoscribeAI",
    created: "2024-01-08",
    lastModified: "2024-01-15",
    status: "Active",
  },
];

export function EmailTemplates() {
  const [activeTab, setActiveTab] = useState("templates");

  const handleCreateNewTemplate = useCallback(() => {
    setActiveTab("editor");
  }, []);

  return (
    <div className="space-y-6">
      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold">Email Templates</h1>
      </motion.div>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-6"
      >
        <TabsList>
          <TabsTrigger value="templates">My Templates</TabsTrigger>
          <TabsTrigger value="editor">Template Editor</TabsTrigger>
        </TabsList>

        <TabsContent value="templates" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Create New Template Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              onClick={handleCreateNewTemplate}
            >
              <Card className="border-dashed border-2 hover:border-primary/50 transition-colors cursor-pointer h-[280px]">
                <CardContent className="flex flex-col items-center justify-center h-full text-center p-6">
                  <Plus className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="font-medium mb-2">Create New Template</h3>
                  <p className="text-sm text-muted-foreground">
                    Start with a blank template
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {templates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="cursor-pointer hover:shadow-md transition-shadow h-[280px]">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg line-clamp-1">
                        {template.name}
                      </CardTitle>
                      <div className="flex items-center space-x-2">
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            template.status === "Active"
                              ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                          }`}
                        >
                          {template.status}
                        </span>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Eye className="h-4 w-4 mr-2" />
                              Preview
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Send className="h-4 w-4 mr-2" />
                              Publish
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Copy className="h-4 w-4 mr-2" />
                              Duplicate
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col justify-between h-[calc(100%-80px)]">
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {template.subject}
                    </p>
                    <div className="text-xs text-muted-foreground mt-auto">
                      <p>Created: {template.created}</p>
                      <p>Modified: {template.lastModified}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="editor" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Editor Panel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Template Editor</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="template-name">Template Name</Label>
                    <Input
                      id="template-name"
                      placeholder="Enter template name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject-line">Subject Line</Label>
                    <Input
                      id="subject-line"
                      placeholder="Enter email subject"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email-content">Email Content</Label>
                    <Textarea
                      id="email-content"
                      placeholder="Write your email content here..."
                      className="min-h-64"
                    />
                  </div>

                  <div className="flex space-x-2">
                    <Button>Save Template</Button>
                    <Button variant="outline">
                      <Send className="h-4 w-4 mr-2" />
                      Send Test Email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Preview Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Live Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-lg p-4 bg-background min-h-64">
                    <div className="border-b pb-2 mb-4">
                      <p className="text-sm text-muted-foreground">
                        Subject: Your Weekly AI Insights
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-xl font-bold">Hello [First Name],</h2>
                      <p>
                        Welcome to your weekly dose of AI insights and updates
                        from AutoscribeAI.
                      </p>
                      <div className="bg-muted p-4 rounded">
                        <p className="font-medium">
                          [Blog Content Will Appear Here]
                        </p>
                      </div>
                      <p>
                        Best regards,
                        <br />
                        The AutoscribeAI Team
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex space-x-2">
                    <Button variant="outline" size="sm">
                      Desktop View
                    </Button>
                    <Button variant="outline" size="sm">
                      Mobile View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
