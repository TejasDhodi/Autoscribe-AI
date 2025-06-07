// components/editor/ai-rewrite-dialog.tsx

"use client";

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose,} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { contentPreference } from "./editor-sidebar";

export function AiRewriteDialog({ trigger, contentPreference, setContentPreference, handleGenerateContent, loading, setLoading}: {
  trigger: React.ReactNode;
  contentPreference: contentPreference;
  setContentPreference: (prefs: contentPreference) => void;
  handleGenerateContent: () => void;
  loading?: boolean;
  setLoading?: (loading: boolean) => void;
}) {

  const handleChannge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setContentPreference({
      ...contentPreference,
      [name]: name === "characterLimit" ? parseInt(value) || 0 : value,
    });
  }

  const handleToneChange = (value: string) => {
    setContentPreference({
      ...contentPreference,
      tone: value,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>AI Rewrite Options</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <div>
            <label className="block text-sm font-medium">Topic</label>
            <Input
              placeholder="e.g., AI in education"
              value={contentPreference.topic}
              onChange={handleChannge}
              name="topic"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Character Limit</label>
            <Input
              type="number"
              placeholder="100"
              value={contentPreference.characterLimit}
              onChange={handleChannge}
              name="characterLimit"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Tone</label>
            <Select value={contentPreference.tone} onValueChange={handleToneChange} name="tone">
                <SelectTrigger className="w-full">
                <SelectValue placeholder="Select tone" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="formal">Formal</SelectItem>
                <SelectItem value="casual">Casual</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="friendly">Friendly</SelectItem>
                <SelectItem value="persuasive">Persuasive</SelectItem>
                </SelectContent>
            </Select>
            </div>
        </div>

        <DialogFooter className="gap-2">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={handleGenerateContent}>{loading? "..." : "Submit"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
