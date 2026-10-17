"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { LiteratureItemProps } from "@/types/blog";
import { getPostId } from "@/utils/postId";
import ShareCardModal from "./ShareCardModal";
import LocaleLink from "@/Components/LocaleLink";

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
      className="relative prose prose-lg max-w-none bg-white/95 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 sm:p-6 md:p-8 border-r-4 border-[#3A4184] hover:border-[#EE3E54] border-t border-l border-b border-slate-100 text-right mb-6"
      dir="rtl"
    >
      {/* Share button (top-start corner — left in RTL) */}
      <button
        onClick={() => setShareOpen(true)}
        aria-label="مشاركة هذا النص"
        title="مشاركة"
        className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#EE3E54]/10 text-[#EE3E54] hover:bg-[#EE3E54] hover:text-white transition-colors flex items-center justify-center shadow-sm active:scale-95"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 fill-current">
          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
        </svg>
      </button>

      {/* Date & Title (reserved left padding to ensure zero collision with share button) */}
      <div className="flex flex-col items-start gap-1.5 sm:gap-2 mb-3 sm:mb-4 pl-12 sm:pl-14">
        {piece.date && (
          <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-indigo-50/80 border border-indigo-100 text-[#3A4184] text-[11px] sm:text-xs font-mono font-medium">
            <span>📅</span>
            <span>{piece.date}</span>
          </span>
        )}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 m-0 leading-tight">
          {piece.title || "نص أدبي"}
        </h2>
      </div>

      <div className="text-gray-700 leading-relaxed">
        <div
          ref={contentRef}
          className={`${
            !expanded ? "line-clamp-5" : ""
          } overflow-hidden text-lg leading-10 font-arabic`}
        >
          <p
            dangerouslySetInnerHTML={{
              __html: replacedContent || "",
            }}
          ></p>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-2.5 mt-3 pt-3 border-t border-slate-100/80">
          {showButton ? (
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1 text-[#3A4184] hover:text-[#EE3E54] font-bold text-sm transition-colors cursor-pointer"
              aria-expanded={expanded}
            >
              <span>{expanded ? "عرض أقل ↑" : "قراءة النص كاملًا ↓"}</span>
            </button>
          ) : <div />}

          <LocaleLink
            href={`/blog/${postId}#comments`}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100/80 hover:bg-[#EE3E54]/10 text-slate-600 hover:text-[#EE3E54] text-xs font-bold transition-all border border-slate-200/60"
            title="إضافة تعليق ومناقشة هذا النص"
          >
            <span>💬</span>
            <span>التعليقات والمناقشة</span>
          </LocaleLink>
        </div>
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
