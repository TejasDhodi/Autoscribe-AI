import { localBlogData } from "@/components/dashboard-ui/scheduler";
import { useDashboard } from "@/provider/dashboard-provider";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import useUserDetails from "./use-user-details";

export type ScheduleMode = "pool" | "specific";
export type ScheduleFrequency = "daily" | "weekly";

export interface SchedularLayoutData {
  scheduleName: string;
  frequency?: ScheduleFrequency;
  time?: string;
  emailListId?: string;
  selectedWeekday: string;
  topic: string;
  blogId: string;
}

export const useSchedularLayout = () => {
  const [schedulerData, setSchedulerData] = useState<SchedularLayoutData>({
    scheduleName: "",
    frequency: "daily",
    time: "",
    emailListId: "",
    selectedWeekday: "",
    topic: "",
    blogId: "",
  });
  const {emailListsData} = useDashboard();

  const onSchedule = useCallback(async () => {
    console.log({emailListsData, schedulerData});
    
    try {
      const {scheduleName, frequency, time, emailListId, topic, selectedWeekday} = schedulerData;

      const emailList = emailListsData.filter(list => list._id === emailListId);
      const stored = localStorage.getItem("blog");
      let blogBody = ""; 

      if(stored) {
        const blogData: localBlogData = JSON.parse(stored);
        blogBody = blogData.blogContent;
      }
      const res = await axios.post("https://autoscribe-ai.onrender.com/api/v1/cron/create", {
        scheduleName,
        frequency,
        time,
        selectedWeekday,
        emailList: emailList[0]?.emailList,
        status: "scheduled",
        author: "Tejas",
        blogContent: {
          title: topic,
          body: blogBody
        }
      })

      if(res.status === 201) {
        localStorage.removeItem("blog");
        console.log("Clean Scheduler Data =>", schedulerData);
        setSchedulerData({
          scheduleName: "",
          frequency: "daily",
          time: "",
          emailListId: "",
          selectedWeekday: "",
          topic: "",
          blogId: ""
        })
        toast.success(`Task Scheduled successfully`)
      }
    } catch (error) {
      console.log("error from onSchedule", error);
      toast.warning("Error while scheduling task")
    }
  }, [schedulerData]);

  return {
    schedulerData,
    setSchedulerData,
    onSchedule,
  };
};
