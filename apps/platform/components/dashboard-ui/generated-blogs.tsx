"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, Eye, Edit, Trash2, Send, MoreHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";
import BlogPreview from "../blog-preview";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";

interface Blog {
  _id: string;
  userName: string;
  topic: string;
  schedulerName: string;
  blogContent: string;
}

export function GeneratedBlogs() {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedBlogs, setSelectedBlogs] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [topicFilter, setTopicFilter] = useState<string>("all");
  const [blogData, setBlogData] = useState<Blog[]>([]);

  const [previewOpen, setPreviewOpen] = useState<boolean>(false);
  const [blogId, setBlogId] = useState<string>("") 

  const navigate = useRouter();

  const uniqueTopics = Array.from(new Set(blogData.map((b) => b.topic)));

  const getAllBlogs = async () => {
    try {
      const { status, data } = await axios.get(
        "https://autoscribe-ai.onrender.com/api/v1/blogs"
      );
      if (status === 200) {
        setBlogData(data.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const filteredBlogs = blogData.filter((blog) => {
    const scheduler = blog.schedulerName?.toLowerCase();
    const topic = blog.topic?.toLowerCase();
    const search = searchTerm?.toLowerCase();
    const selectedTopic = topicFilter?.toLowerCase();

    const matchesSearch = scheduler?.includes(search) || topic?.includes(search);

    const matchesTopic = topicFilter === "all" || topic === selectedTopic;

    return matchesSearch && matchesTopic;
  });

  const toggleBlogSelection = (blogId: string) => {
    setSelectedBlogs((prev) =>
      prev.includes(blogId)
        ? prev.filter((id) => id !== blogId)
        : [...prev, blogId]
    );
  };

  const selectAllBlogs = () => {
    setSelectedBlogs(filteredBlogs.map((blog) => blog._id));
  };

  const clearSelection = () => {
    setSelectedBlogs([]);
  };

  const handleViewBlog = (blogId: string) => {
    setBlogId(blogId);
    setPreviewOpen(true);
  }

  const handleDeleteBlog = async (blogId: string) => {
    try {
      const response = await axios.delete(`https://autoscribe-ai.onrender.com/api/v1/blog/delete/${blogId}`);

      if(response.status === 200) {
        toast.success("Blog Deletd Successfully")
        getAllBlogs();
      }
    } catch (error) {
      console.log("Error from handleDeleteBlog");
      toast.warning("Failed to delete blog");
    }
  }

  useEffect(() => {
    getAllBlogs();
    navigate.prefetch('/editor')
  }, []);

  return (
    <div className="space-y-6">
      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold">Generated Blogs</h1>
        <div className="flex items-center space-x-2">
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("list")}
          >
            List View
          </Button>
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("grid")}
          >
            Grid View
          </Button>
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search blogs..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={topicFilter} onValueChange={setTopicFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by topic" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Topics</SelectItem>
                  {uniqueTopics.map((topic, idx) => (
                    <SelectItem key={idx} value={topic?.toLowerCase()}>
                      {topic}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Blog Grid/List */}
      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "space-y-4"
        }
      >
        {filteredBlogs.map((blog, index) => {
          const { _id, userName, topic, schedulerName, blogContent } = blog;

          const parser = new DOMParser();
          const doc = parser.parseFromString(blogContent, "text/html");
          const paragraphs = Array.from(doc.querySelectorAll("p")).map(
            (p) => p.textContent
          );

          return (
            <motion.div
              key={_id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card
                className={`hover:shadow-md transition-all cursor-pointer ${
                  selectedBlogs.includes(_id)
                    ? "ring-2 ring-primary bg-primary/5"
                    : ""
                }`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      <Checkbox
                        checked={selectedBlogs.includes(_id)}
                        onCheckedChange={() => toggleBlogSelection(_id)}
                        className="mt-1"
                      />
                      <CardTitle className="text-lg line-clamp-2 flex-1">
                        {schedulerName}
                      </CardTitle>
                    </div>
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
                        <DropdownMenuItem onClick={() => handleViewBlog(_id)}>
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          <Link href={`/editor/${_id}`}> Edit</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600" onClick={() => handleDeleteBlog(_id)}>
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col h-[calc(100%-80px)]">
                  <div className="flex-1 space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {paragraphs[0]}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Topic: {topic}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Bulk Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {filteredBlogs.length} of {blogData.length} blogs
                {selectedBlogs.length > 0 &&
                  ` • ${selectedBlogs.length} selected`}
              </p>
              <div className="flex space-x-2">
                {selectedBlogs.length === 0 ? (
                  <Button variant="outline" size="sm" onClick={selectAllBlogs}>
                    Select All
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" onClick={clearSelection}>
                    Clear Selection
                  </Button>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  disabled={selectedBlogs.length === 0}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Selected
                </Button>
                <Button size="sm" disabled={selectedBlogs.length === 0}>
                  <Send className="h-4 w-4 mr-2" />
                  Publish Selected
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {
        previewOpen && <BlogPreview setPreviewOpen={setPreviewOpen} blogId={blogId}/>
      }
    </div>
  );
}
