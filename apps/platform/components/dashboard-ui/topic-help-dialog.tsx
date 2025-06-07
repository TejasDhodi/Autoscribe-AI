"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { HelpCircle, Loader2 } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import axios from "axios";
import { toast } from "sonner";
import { useSchedularLayout } from "@/hooks/use-schedular-layout";

type topicHelpDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  schedulerName: string;
};

export function TopicHelpDialog({
  open,
  setOpen,
  loading,
  setLoading,
  schedulerName,
}: topicHelpDialogProps) {
  const { schedulerData, setSchedulerData } = useSchedularLayout();

  const [generatedTopics, setGeneratedTopics] = useState<string[]>([]);

  const handleOpen = async () => {
    setLoading(true);
    try {
      if (!schedulerName) {
        toast.warning("Please enter a scheduler name first.");
      } else {
        const { status, data } = await axios.post("/api/generate-topics", {
          keyword: schedulerName,
        });

        if (status === 200) {
          toast.success("Topics generated successfully!");

          const formatResponse = data.topics.replace(
            /```(?:python)?\n([\s\S]*?)\n```/,
            "$1"
          );

          setGeneratedTopics(JSON.parse(formatResponse));

          setLoading(false);
          setOpen(true);
        }
      }
    } catch (error) {
      console.error("Error generating topics:", error);
      toast.error("Failed to generate topics. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSetTopic = (topic: string) => {

    navigator.clipboard.writeText(topic)
    .then(() => {
      toast.success(`Topic "${topic}" copied to clipboard.`);
    })
    .catch((err) => {
      console.error("Clipboard copy failed:", err);
      toast.error("Failed to copy topic to clipboard.");
    });

    setOpen(false);
    console.log("from scheduler", schedulerData.topic);
  };

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="ml-2 cursor-pointer"
            onClick={handleOpen}
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
            ) : (
              <HelpCircle className="w-4 h-4 text-muted-foreground" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          Not sure which topics to choose? Click here to generate suggestions.
        </TooltipContent>
      </Tooltip>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>What is Topic Assignment Mode?</DialogTitle>
          </DialogHeader>
          <div className="text-sm text-muted-foreground space-y-2">
            {generatedTopics.length !== 0 ? (
              <div className="flex flex-col gap-2">
                {generatedTopics.map((topic, index) => (
                  <button
                    key={index}
                    onClick={() => handleSetTopic(topic)}
                    className="text-left text-sm p-2 rounded-md border border-border bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            ) : (
              <p>
                Topic Assignment Mode allows you to automatically assign topics
                to your content based on the scheduler name. This helps in
                generating relevant and engaging content without manual input.
              </p>
            )}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
