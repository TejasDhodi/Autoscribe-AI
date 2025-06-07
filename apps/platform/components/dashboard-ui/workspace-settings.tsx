"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Circle, HelpCircle, BookOpen, Video } from "lucide-react";

export function WorkspaceSettings() {
  const onboardingSteps = [
    { id: 1, title: "Profile Setup", completed: true },
    { id: 2, title: "Upload Email Lists", completed: true },
    { id: 3, title: "Create Email Template", completed: true },
    { id: 4, title: "Set Up First Schedule", completed: false },
    { id: 5, title: "Generate First Blog", completed: false },
  ];

  const completedSteps = onboardingSteps.filter(
    (step) => step.completed
  ).length;
  const progressPercentage = (completedSteps / onboardingSteps.length) * 100;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Workspace Settings</h1>
        <Button variant="outline">
          <HelpCircle className="h-4 w-4 mr-2" />
          Get Help
        </Button>
      </div>

      {/* Onboarding Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Setup Progress</span>
              <span className="text-sm text-gray-500">
                {completedSteps} of {onboardingSteps.length} completed
              </span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>

          <div className="space-y-3">
            {onboardingSteps.map((step) => (
              <div key={step.id} className="flex items-center space-x-3">
                {step.completed ? (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                ) : (
                  <Circle className="h-5 w-5 text-gray-400" />
                )}
                <span
                  className={`text-sm ${step.completed ? "text-gray-900" : "text-gray-500"}`}
                >
                  {step.title}
                </span>
                {!step.completed && (
                  <Button variant="outline" size="sm">
                    Complete
                  </Button>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <Card>
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="company-name">Company Name</Label>
              <Input id="company-name" defaultValue="AutoscribeAI" />
            </div>

            <div>
              <Label htmlFor="timezone">Time Zone</Label>
              <Select defaultValue="utc">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="utc">UTC</SelectItem>
                  <SelectItem value="est">Eastern Time</SelectItem>
                  <SelectItem value="pst">Pacific Time</SelectItem>
                  <SelectItem value="cet">Central European Time</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="language">Language</Label>
              <Select defaultValue="en">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button>Save Changes</Button>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="email-notifications">Email Notifications</Label>
                <p className="text-sm text-gray-500">
                  Receive updates via email
                </p>
              </div>
              <Switch id="email-notifications" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="blog-generation-alerts">
                  Blog Generation Alerts
                </Label>
                <p className="text-sm text-gray-500">
                  Notify when blogs are generated
                </p>
              </div>
              <Switch id="blog-generation-alerts" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="error-alerts">Error Alerts</Label>
                <p className="text-sm text-gray-500">
                  Notify when errors occur
                </p>
              </div>
              <Switch id="error-alerts" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="weekly-reports">Weekly Reports</Label>
                <p className="text-sm text-gray-500">
                  Receive weekly analytics
                </p>
              </div>
              <Switch id="weekly-reports" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Help & Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Help & Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-medium mb-1">Documentation</h3>
              <p className="text-sm text-gray-500 mb-3">
                Complete guides and tutorials
              </p>
              <Button variant="outline" size="sm">
                View Docs
              </Button>
            </div>

            <div className="text-center p-4 border rounded-lg">
              <Video className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-medium mb-1">Video Tutorials</h3>
              <p className="text-sm text-gray-500 mb-3">
                Step-by-step video guides
              </p>
              <Button variant="outline" size="sm">
                Watch Videos
              </Button>
            </div>

            <div className="text-center p-4 border rounded-lg">
              <HelpCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-medium mb-1">Support</h3>
              <p className="text-sm text-gray-500 mb-3">
                Get help from our team
              </p>
              <Button variant="outline" size="sm">
                Contact Support
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
