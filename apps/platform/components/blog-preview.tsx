import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

type BlogPreviewProps = {
  setPreviewOpen: (open: boolean) => void;
  // generatedData: string; 
  blogId: string;
};

const BlogPreview = ({ setPreviewOpen, blogId }: BlogPreviewProps) => {
  const navigate = useRouter();

  const [blogContent, setBlogContent] = useState<string>("");

  // const navigateToEditor = (blogId: string) => {
  //   setPreviewOpen(false);
  //   navigate.push(`/editor/${blogId}`);
  // };

  const fetchBlogContent = async () => {
    try {
      const { status, data } = await axios.get(
        `http://localhost:8000/api/v1/blog/${blogId}`
      );

      if (status === 200) {
        const content = data.blog.blogContent;
        setBlogContent(content);
      }
    } catch (error) {
      console.log("error from fetchBlogContent", error);
    }
  };

  useEffect(() => {
    fetchBlogContent();
    navigate.prefetch('/editor')
  }, [blogId, navigate])
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-white p-6 rounded-lg w-[95%] h-[90vh] max-w-[95%] overflow-auto">
        <h2 className="text-2xl font-semibold mb-4 text-black">Blog Preview</h2>
        <div className="space-y-4">

          <div className="border p-4 rounded-md overflow-y-auto h-full">
            <h3 className="font-semibold mb-2 text-black">Preview Content</h3>

            <div
              className="text-black"
              dangerouslySetInnerHTML={{ __html: blogContent }}
            />
          </div>


          <div className="flex justify-end space-x-4 mt-4">
            <Button><Link href={`/editor/${blogId}`}>Edit</Link></Button>
            <Button
              onClick={() => {
                setPreviewOpen(false);
              }}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPreview;
