"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { LiteratureItemProps } from "@/types/blog";
import { getPostId } from "@/utils/postId";
import ShareCardModal from "./ShareCardModal";

const LiteratureItem: React.FC<LiteratureItemProps> = ({ piece }) => {
  const [expanded, setExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const postId = getPostId(piece);

  // Check if content exceeds 5 lines
  useEffect(() => {
    if (contentRef.current) {
      const lineHeight = parseInt(
        window.getComputedStyle(contentRef.current).lineHeight,
      );
      const height = contentRef.current.scrollHeight;
      const lines = Math.floor(height / lineHeight);
      setShowButton(lines > 5);
    }
  }, [piece.content]);

  const replacedContent = piece?.content?.replace(/\./g, ". <br/>");

  return (
    <motion.div
      id={postId}
      style={{ scrollMarginTop: "120px" }}
      className="relative prose prose-lg max-w-none bg-white rounded-lg shadow-md p-8 border-r-4 border-[#565FA1]"
    >
      {/* Share button (top-start corner — left in RTL) */}
      <button
        onClick={() => setShareOpen(true)}
        aria-label="مشاركة هذا النص"
        title="مشاركة"
        className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#565FA1]/10 text-[#565FA1] hover:bg-[#565FA1] hover:text-white transition-colors flex items-center justify-center"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
        </svg>
      </button>

      <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-2 mb-6">
        <h2 className={`text-2xl md:text-3xl font-bold text-gray-900 m-0 `}>
          {piece.title}
        </h2>
      </div>

      <div className="text-gray-700 leading-relaxed">
        <div
          ref={contentRef}
          className={`${
            !expanded ? "line-clamp-5" : ""
          } overflow-hidden text-lg leading-10`}
        >
          <p
            dangerouslySetInnerHTML={{
              __html: replacedContent || "",
            }}
          ></p>
        </div>

        {showButton && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-[#565FA1] hover:text-[#3A3F6B] font-medium"
            aria-expanded={expanded}
          >
            {expanded ? "عرض أقل" : "عرض المزيد"}
          </button>
        )}
      </div>

      <ShareCardModal
        piece={piece}
        postId={postId}
        open={shareOpen}
        onClose={() => setShareOpen(false)}
      />
    </motion.div>
  );
};

export default LiteratureItem;
