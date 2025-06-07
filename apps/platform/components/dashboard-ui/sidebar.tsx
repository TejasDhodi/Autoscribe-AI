"use client";

import { cn } from "@/lib/utils";
import {
  BarChart3,
  Upload,
  Mail,
  FileText,
  Calendar,
  Settings,
  User,
  Bot,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface SidebarProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const navigationItems = [
  // { id: "dashboard", label: "Dashboard Overview", icon: BarChart3 },
  { id: "uploads", label: "User Uploads", icon: Upload },
  // { id: "templates", label: "Email Templates", icon: Mail },
  { id: "blogs", label: "Generated Blogs", icon: FileText },
  { id: "scheduler", label: "Scheduler", icon: Calendar },
  // { id: "settings", label: "Workspace Settings", icon: Settings },
  // { id: "profile", label: "Profile & Account", icon: User },
];

export function Sidebar({
  activeModule,
  setActiveModule,
  collapsed,
  setCollapsed,
}: SidebarProps) {
  return (
    <motion.div
      className="bg-background border-r border-border flex flex-col"
      animate={{ width: collapsed ? 80 : 256 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="p-6 border-b border-border flex items-center justify-between h-[73px]">
        {!collapsed ? (
          <>
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">AutoscribeAI</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCollapsed(!collapsed)}
              className="h-8 w-8 p-0"
            >
              <motion.div
                animate={{ rotate: collapsed ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronLeft className="h-4 w-4" />
              </motion.div>
            </Button>
          </>
        ) : (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            className="h-10 w-10 p-0 mx-auto"
            title="Expand Sidebar"
          >
            <motion.div
              animate={{ rotate: collapsed ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.div>
          </Button>
        )}
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <motion.button
              key={item.id}
              onClick={() => setActiveModule(item.id)}
              className={cn(
                "w-full flex items-center rounded-lg text-left transition-colors relative",
                collapsed ? "justify-center p-3" : "space-x-3 px-3 py-2",
                activeModule === item.id
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              title={collapsed ? item.label : undefined}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              <motion.span
                className="text-sm font-medium"
                animate={{
                  opacity: collapsed ? 0 : 1,
                  width: collapsed ? 0 : "auto",
                }}
                transition={{ duration: 0.2 }}
              >
                {!collapsed && item.label}
              </motion.span>
            </motion.button>
          );
        })}
      </nav>
    </motion.div>
  );
}
