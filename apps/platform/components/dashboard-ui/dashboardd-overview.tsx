"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart3,
  FileText,
  Mail,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { motion } from "framer-motion";

export function DashboardOverview() {
  const recentActivities = [
    {
      id: 1,
      action: "Blog generated",
      topic: "AI in Healthcare",
      time: "2 hours ago",
      status: "Published",
      icon: FileText,
      color: "text-green-600",
    },
    {
      id: 2,
      action: "Email sent",
      campaign: "Weekly Newsletter",
      time: "4 hours ago",
      status: "Delivered",
      icon: Mail,
      color: "text-blue-600",
    },
    {
      id: 3,
      action: "Template created",
      name: "Holiday Template",
      time: "1 day ago",
      status: "Draft",
      icon: FileText,
      color: "text-yellow-600",
    },
    {
      id: 4,
      action: "Schedule updated",
      name: "Daily Tech News",
      time: "2 days ago",
      status: "Active",
      icon: Clock,
      color: "text-green-600",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <motion.h1
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Dashboard Overview
        </motion.h1>
        <Select defaultValue="7days">
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7days">Last 7 days</SelectItem>
            <SelectItem value="30days">Last 30 days</SelectItem>
            <SelectItem value="90days">Last 90 days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Blogs Generated",
            value: "247",
            change: "+12%",
            icon: FileText,
          },
          {
            title: "Images Generated",
            value: "89",
            change: "+8%",
            icon: BarChart3,
          },
          { title: "Emails Sent", value: "12,543", change: "+23%", icon: Mail },
          {
            title: "Open Rate",
            value: "24.8%",
            change: "+2.1%",
            icon: TrendingUp,
          },
        ].map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {metric.title}
                </CardTitle>
                <metric.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">{metric.change}</span> from
                  last week
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Blog Generation Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-muted/50 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">
                  Chart visualization would go here
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Email Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-muted/50 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">
                  Email analytics chart would go here
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Recent Activity Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className={`p-2 rounded-full bg-muted ${item.color}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{item.action}</p>
                        <span className="text-xs text-muted-foreground">
                          {item.time}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item.topic || item.campaign || item.name}
                      </p>
                    </div>
                    <div className="flex items-center">
                      {item.status === "Published" ||
                      item.status === "Delivered" ||
                      item.status === "Active" ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <AlertCircle className="h-4 w-4 text-yellow-600" />
                      )}
                      <span className="ml-2 text-xs font-medium">
                        {item.status}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
