"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { useDashboard } from "@/provider/dashboard-provider";
import { weekdays } from "@/constant/schedular";
import {
  ScheduleFrequency,
  useSchedularLayout,
} from "@/hooks/use-schedular-layout";
import { TopicHelpDialog } from "./topic-help-dialog";
import { useEffect, useState } from "react";
import axios from "axios";
import BlogPreview from "../blog-preview";
import { toast } from "sonner";
import useUserDetails from "@/hooks/use-user-details";

export type localBlogData = {
  blogContent: string,
  schedulerName: string,
  topic: string,
  userName: string
}

export function Scheduler() {
  const { emailListsData } = useDashboard();
  const { onSchedule, schedulerData, setSchedulerData } = useSchedularLayout();
  const { frequency, selectedWeekday, time, emailListId } = schedulerData;

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isBlogGenerated, setIsBlogGenerated] = useState(false); 
  const [previewOpen, setPreviewOpen] = useState(false); 
  const [generatedData, setGeneratedData] = useState<any>(null);
  const [userName, setUserName] = useState<string | null>(null)

  const {author, loading: authLoading} = useUserDetails();
  const scheduledTasks = [
    {
      id: "1",
      name: "Daily News",
      frequency: "daily",
      time: "09:30",
      status: "Scheduled",
      nextRun: "2025-06-05 09:30 AM",
    },
    {
      id: "2",
      name: "Weekly Report",
      frequency: "weekly",
      time: "10:00",
      status: "Paused",
      nextRun: "2025-06-09 10:00 AM",
    },
  ];

  const handleGenerateBlog = async () => {
    setLoading(true);
    try {
      if (!schedulerData.topic) {
        toast.warning("Topic Is Required");
      } else {
        const { status, data } = await axios.post("/api/generate-conetent", {
          topic: schedulerData.topic,
        });

        if (status === 200) {
          const storeBlog = await axios.post("https://autoscribe-ai.onrender.com/api/v1/blog/store", {
            userName: userName,
            blogContent: data.content,
            schedulerName: schedulerData.scheduleName,
            topic: schedulerData.topic
          })

          if(storeBlog.status === 200) {
            setSchedulerData(prev => ({
              ...prev,
              blogId: storeBlog.data.storedBlog._id
            }))
            setLoading(false);
            setGeneratedData(data.content);
            setIsBlogGenerated(true);
            setPreviewOpen(true);
            toast.success(`Content Generated for :- ${schedulerData.topic}`);

            const blogData = {
              userName: userName,
              blogContent: data.content,
              schedulerName: schedulerData.scheduleName,
              topic: schedulerData.topic
            }
            localStorage.setItem("blog", JSON.stringify(blogData));
          }
        }
      }
    } catch (error) {
      console.error("Error generating content:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem("blog");

    if (stored) {
      try {
        const blogData: localBlogData = JSON.parse(stored);
        
        setSchedulerData(prev => ({
          ...prev,
          scheduleName: blogData.schedulerName,
          topic: blogData.topic
        }))
        setIsBlogGenerated(true)

      } catch (error) {
        console.error("Failed to parse blog data from localStorage", error);
      }
    }
    
  }, [])
  
  useEffect(() => {
    if (!authLoading) {
      setUserName(author)
    }
  }, []);

  return (
    <div className="space-y-6">

      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold">Scheduler</h1>
        <Button disabled={isBlogGenerated || !schedulerData.topic} onClick={handleGenerateBlog}>
          <Plus className="h-4 w-4 mr-2" />
          Generate Blog
        </Button>
      </motion.div>


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Create New Schedule</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">

            <div className="space-y-2">
              <Label htmlFor="schedule-name">Schedule Name</Label>
              <Input
                id="schedule-name"
                value={schedulerData.scheduleName}
                placeholder="e.g., Daily Tech News"
                onChange={(e) =>
                  setSchedulerData((prev) => ({
                    ...prev,
                    scheduleName: e.target.value,
                  }))
                }
              />
            </div>


            <div className="space-y-3">
              <div className="flex items-center">
                <Label>Topic Assignment Mode</Label>
                <TopicHelpDialog
                  open={open}
                  setOpen={setOpen}
                  loading={loading}
                  setLoading={setLoading}
                  schedulerName={schedulerData.scheduleName}
                />
              </div>
              <Input
                type="text"
                placeholder="Enter topic"
                value={schedulerData.topic}
                onChange={(e) =>
                  setSchedulerData((prev) => ({
                    ...prev,
                    topic: e.target.value,
                  }))
                }
              />
            </div>
            <div className="space-y-3">
              <Label>Frequency</Label>
              <Select
                value={frequency}
                onValueChange={(value) =>
                  setSchedulerData((prev) => ({
                    ...prev,
                    frequency: value as ScheduleFrequency,
                  }))
                }
                disabled={!isBlogGenerated}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {frequency === "weekly" && (
              <div className="space-y-2">
                <Label>Day of the Week</Label>
                <Select
                  value={selectedWeekday}
                  onValueChange={(value) =>
                    setSchedulerData((prev) => ({
                      ...prev,
                      selectedWeekday: value,
                    }))
                  }
                  disabled={!isBlogGenerated}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select weekday" />
                  </SelectTrigger>
                  <SelectContent>
                    {weekdays.map((day) => (
                      <SelectItem key={day.value} value={day.value}>
                        {day.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="schedule-time">Time</Label>
              <Input
                id="schedule-time"
                type="time"
                value={time}
                onChange={(e) =>
                  setSchedulerData((prev) => ({
                    ...prev,
                    time: e.target.value,
                  }))
                }
                disabled={!isBlogGenerated}
              />
            </div>

            <div className="space-y-2">
              <Label>Email List</Label>
              <Select
                value={emailListId}
                onValueChange={(value) =>
                  setSchedulerData((prev) => ({
                    ...prev,
                    emailListId: value,
                  }))
                }
                disabled={!isBlogGenerated}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select email list" />
                </SelectTrigger>
                <SelectContent>
                  {emailListsData.map((list) => (
                    <SelectItem key={list._id} value={list._id}>
                      {list.fileName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              className="w-full"
              onClick={onSchedule}
              disabled={!isBlogGenerated}
            >
              Create Schedule
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Scheduled Tasks</h2>
          <div className="overflow-auto rounded-xl border">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-muted text-muted-foreground">
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Frequency</th>
                  <th className="px-4 py-2">Time</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Next Run</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {scheduledTasks.map((task) => (
                  <tr key={task.id} className="border-t">
                    <td className="px-4 py-2">{task.name}</td>
                    <td className="px-4 py-2 capitalize">{task.frequency}</td>
                    <td className="px-4 py-2">{task.time}</td>
                    <td className="px-4 py-2">
                      <Badge
                        variant={
                          task.status === "Paused" ? "destructive" : "default"
                        }
                      >
                        {task.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-2">{task.nextRun}</td>
                    <td className="px-4 py-2">
                      <Button size="sm" variant="outline">
                        Pause
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      {previewOpen && <BlogPreview blogId={schedulerData.blogId} setPreviewOpen={setPreviewOpen} />}
    </div>
  );
}
