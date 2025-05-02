"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { LiteratureItemProps } from "@/types/blog";

const LiteratureItem: React.FC<LiteratureItemProps> = ({ piece }) => {
  const [expanded, setExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Check if content exceeds 5 lines
  useEffect(() => {
    if (contentRef.current) {
      const lineHeight = parseInt(
        window.getComputedStyle(contentRef.current).lineHeight
      );
      const height = contentRef.current.scrollHeight;
      const lines = Math.floor(height / lineHeight);
      setShowButton(lines > 5);
    }
  }, [piece.content]);

  const replacedContent = piece.content.replace(/\./g, ". <br/>");

  return (
    <motion.div className="prose prose-lg max-w-none bg-white rounded-lg shadow-md p-8 border-r-4 border-[#565FA1]">
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
              __html: replacedContent,
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
    </motion.div>
  );
};

export default LiteratureItem;
