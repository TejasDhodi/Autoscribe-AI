"use client";

import { useEffect, useState } from "react";
import { LexicalEditor, $getRoot, $insertNodes, $createParagraphNode, $createTextNode, ElementNode, } from "lexical";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";

import { EditorToolbar } from "./editor-toolbar";
import { SlashCommandPlugin } from "./plugins/slash-command-plugin";
import { ImagePlugin } from "./plugins/image-plugin";
import { motion } from "framer-motion";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { $generateHtmlFromNodes, $generateNodesFromDOM } from "@lexical/html";
import { toast } from "sonner";
import Link from "next/link";
interface EditorContainerProps {
  editor: LexicalEditor;
  onRewrite: () => void;
  onImageGeneration: () => void;
}

export function EditorContainer({
  editor,
  onRewrite,
  onImageGeneration,
}: EditorContainerProps) {

  const [floatingAnchorElem, setFloatingAnchorElem] = useState<HTMLDivElement | null>(null);
  const [blogContent, setBlogContent] = useState<string>("");
  const [saving, setSaving] = useState<boolean>(false);

  const params = useParams();
  const router = useRouter();

  const blogId = params.blogId as string;

  function insertHTML(editor: LexicalEditor, htmlString: string) {
    const parser = new DOMParser();
    const dom = parser.parseFromString(htmlString, "text/html");

    editor.update(() => {
      const nodes = $generateNodesFromDOM(editor, dom);
      const root = $getRoot();
      root.clear();
  
      const validNodes = nodes.filter((node) => {
        return node instanceof ElementNode; 
      });
  
      if (validNodes.length > 0) {
        root.append(...validNodes);
      }
    });
  }

  const onChange = (editorState: any) => {
    const json = editorState.toJSON();
    localStorage.setItem("autoscribe-blog-content", JSON.stringify(json));
  };

  const fetchBlogContent = async () => {
    try {      
      const { status, data } = await axios.get(
        `https://autoscribe-ai.onrender.com/api/v1/blog/${blogId}`
      );

      if (status === 200) {
        const content = data.blog.blogContent;
        setBlogContent(content);
      }
    } catch (error) {
      console.log("error from fetchBlogContent", error);
    }
  };

  const updateBlogs = async () => {
    setSaving(true);
    const htmlContent = editor.getEditorState().read(() => {
      return $generateHtmlFromNodes(editor, null) as string;
    });

    console.log({htmlContent});
    
    try {
      const res = await axios.put(
        `https://autoscribe-ai.onrender.com/api/v1/blog/update/${blogId}`,
        {
          blogContent : htmlContent,
        }
      );

      if (res.status === 200) {
        toast.success("Data Saved Successfully");
      }
    } catch (error) {
      console.log("errro from updateBlogs", error);
      toast.warning("Failed To Save Data");
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    fetchBlogContent();
    router.prefetch('/');
  }, [router]);

  useEffect(() => {
    if (blogContent && editor) {
      insertHTML(editor, blogContent);
    }
  }, [blogContent, editor]);

  return (
    <div className="relative min-h-[500px] rounded-lg border border-border bg-background p-4">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-4"
      >
        <EditorToolbar editor={editor} />
      </motion.div>

      <div className="relative" ref={setFloatingAnchorElem}>
        <RichTextPlugin
          contentEditable={
            <ContentEditable className="min-h-[400px] outline-none focus:outline-none" />
          }
          placeholder={
            <div className="pointer-events-none absolute left-0 top-0 text-muted-foreground">
              Start writing your blog post...
            </div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
      </div>

      {/* Core plugins */}
      <HistoryPlugin />
      <AutoFocusPlugin />
      <ListPlugin />
      <LinkPlugin />
      <ImagePlugin />
      <OnChangePlugin onChange={onChange} />
      <MarkdownShortcutPlugin transformers={TRANSFORMERS} />

      {/* Custom plugins */}
      <SlashCommandPlugin
        anchorElem={floatingAnchorElem}
        onRewrite={onRewrite}
        onImageGeneration={onImageGeneration}
      />

      <div className="mt-4">
        <button
          className="px-4 py-2 mr-5 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={updateBlogs}
        >
          {saving ? "Saving..." : "Save"}
        </button>

        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          <Link href={'/'}>Schedule</Link>
        </button>
      </div>
    </div>
  );
}
