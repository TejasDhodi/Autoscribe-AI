"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Sparkles, ImageIcon, Wand2 } from "lucide-react";
import { AiRewriteDialog } from "./AiRewriteDialog";
import { useEffect, useState } from "react";
import axios from "axios";

interface EditorSidebarProps {
  onRewrite: () => void;
  onImageGeneration: () => void;
}

export type contentPreference = {
  topic: string;
  characterLimit: number;
  tone: string;
}

export function EditorSidebar({
  onRewrite,
  onImageGeneration,
}: EditorSidebarProps) {

  const [contentPreference, setContentPreference] = useState<contentPreference>({
    topic: "",
    characterLimit: 100,
    tone: "Professional",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [generatedData, setGeneratedData] = useState<any>(null);

  function parseHTMLString(raw: string): string {
    return raw.replace(/```html\n?/, "").replace(/```$/, "");
  }

  const handleGenerateContent = async () => {
    setLoading(true);
    try {
      const {status, data} = await axios.post("/api/generate-conetent", contentPreference);

      if(status === 200) {
        setLoading(false);
        setGeneratedData(data)
        console.log("Generated content:", data);
        setContentPreference({
          topic: "",
          characterLimit: 100,
          tone: "Professional",
        })
      }
    } catch (error) {
      console.error("Error generating content:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    console.log({generatedData: generatedData?.content});
    if(generatedData) {
      console.log({parsed: parseHTMLString(generatedData.content) });
    }
    
  }, [loading])
  const sidebarItems = [
    {
      title: "Write with AI",
      description: "Rewrite your content with AI assistance",
      icon: <Wand2 className="h-5 w-5" />,
      onClick: () => {}, // No-op since the dialog handles it
      customRender: ({ onClick }: { onClick: () => void }) => (
      <AiRewriteDialog
        contentPreference={contentPreference}
        setContentPreference={setContentPreference}
        handleGenerateContent={handleGenerateContent}
        loading={loading}
        setLoading={setLoading}
        trigger={
          <Button
            variant="outline"
            className="flex h-auto w-full flex-col items-start gap-1 p-3 text-left"
          >
            <div className="flex w-full items-center gap-2">
              <div className="cursor-pointer rounded-md bg-purple-100 p-1.5 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400">
                <Wand2 className="h-5 w-5" />
              </div>
              <span className="font-medium">Write with AI</span>
            </div>
            <p className="cursor-pointer text-xs text-muted-foreground">
              Rewrite your content with AI assistance
            </p>
          </Button>
        }/>
      ),
    },
    {
      title: "Generate Image",
      description: "Create AI-generated images for your blog",
      icon: <ImageIcon className="h-5 w-5" />,
      onClick: onImageGeneration,
    },
  ];

  return (
    <div className="flex h-full flex-col p-4">
      <div className="flex items-center gap-2 pb-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-purple-600">
          <span className="text-sm font-bold text-white">A</span>
        </div>
        <h1 className="text-lg font-bold">AutoScribe AI</h1>
      </div>

      <Separator className="mb-4" />

      <h2 className="mb-4 flex items-center gap-2 font-medium">
        <Sparkles className="h-4 w-4 text-purple-500" /> AI Tools
      </h2>

      <div className="space-y-3">
        {sidebarItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {item.customRender ? (
              item.customRender({ onClick: item.onClick })
            ) : (
              <Button
                variant="outline"
                className="flex h-auto w-full flex-col items-start gap-1 p-3 text-left"
                onClick={item.onClick}
              >
                <div className="flex w-full items-center gap-2">
                  <div className="rounded-md bg-purple-100 p-1.5 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400">
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.title}</span>
                </div>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </Button>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-auto">
        <div className="rounded-md bg-muted p-3 text-sm">
          <p className="font-medium">Pro Tip</p>
          <p className="text-xs text-muted-foreground">
            Use slash commands (/) in the editor to quickly access AI tools and
            formatting options.
          </p>
        </div>
      </div>
    </div>
  );
}
