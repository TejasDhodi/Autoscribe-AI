"use client";

import { DashboardOverview } from "@/components/dashboard-ui/dashboardd-overview";
import { EmailTemplates } from "@/components/dashboard-ui/email-templates";
import { GeneratedBlogs } from "@/components/dashboard-ui/generated-blogs";
import { Header } from "@/components/dashboard-ui/header";
import { ProfileAccount } from "@/components/dashboard-ui/profile-account";
import { Scheduler } from "@/components/dashboard-ui/scheduler";
import { Sidebar } from "@/components/dashboard-ui/sidebar";
import { UserUploads } from "@/components/dashboard-ui/user-uploads";
import { WorkspaceSettings } from "@/components/dashboard-ui/workspace-settings";
import { DashboardProvider } from "@/provider/dashboard-provider";
import { useState } from "react";

export default function Dashboard() {
  const [activeModule, setActiveModule] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderActiveModule = () => {
    switch (activeModule) {
      case "dashboard":
        return <DashboardOverview />;
      case "uploads":
        return <UserUploads />;
      case "templates":
        return <EmailTemplates />;
      case "blogs":
        return <GeneratedBlogs />;
      case "scheduler":
        return <Scheduler />;
      case "settings":
        return <WorkspaceSettings />;
      case "profile":
        return <ProfileAccount />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <DashboardProvider>
      <div className="flex h-screen bg-background">
        <Sidebar
          activeModule={activeModule}
          setActiveModule={setActiveModule}
          collapsed={sidebarCollapsed}
          setCollapsed={setSidebarCollapsed}
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header
            sidebarCollapsed={sidebarCollapsed}
            setSidebarCollapsed={setSidebarCollapsed}
          />
          <main className="flex-1 overflow-y-auto p-6">
            {renderActiveModule()}
          </main>
        </div>
      </div>
    </DashboardProvider>
  );
}
