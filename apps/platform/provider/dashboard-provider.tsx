"use client";

import { IEmailListDataResponse } from "@/types/email-list";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

interface IDashboardContext {
  emailListsData: IEmailListData[];
  getLastestEmailListsData: () => Promise<void>;
}

export const DashboardContext = React.createContext<IDashboardContext>({
  emailListsData: [],
  getLastestEmailListsData: async () => {},
});

// interface IEmailListData {
//   id: string;
//   name: string;
//   emails: number;
//   uploaded: string;
//   status: "Active" | "Draft";
// }
type IEmailListData = {
  _id: string;
  fileName: string;
  emailList: string [];
}

interface IDashboardProvider {
  children: React.ReactNode;
}

export function DashboardProvider({ children }: IDashboardProvider) {
  const [emailListsData, setEmailListsData] = useState<IEmailListData[]>([]);

  const getLastestEmailListsData = useCallback(async () => {
      try {
        const {status, data} = await axios.get("https://autoscribe-ai.onrender.com/api/v1/emailLists");
        if(status === 200) {
          setEmailListsData(data.data)
        }
      } catch (error) {
        console.error("Error fetching email lists:", error);
      }
  }, []);

  useEffect(() => {
    getLastestEmailListsData();
  }, [getLastestEmailListsData]);

  return (
    <DashboardContext.Provider
      value={{ emailListsData, getLastestEmailListsData }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = React.useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
}
