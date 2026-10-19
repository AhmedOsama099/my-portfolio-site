"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { stripLocale } from "@/lib/i18n/config";
import { useAppTranslation } from "@/hooks/useAppTranslation";

export default function CommentScrollButton() {
  const pathname = usePathname();
  const { currentLanguage, isLTR } = useAppTranslation();
  const [commentCount, setCommentCount] = useState<number | null>(null);

  const cleanPath = stripLocale(pathname).replace(/\/+$/, "");
  const segments = cleanPath.split("/").filter(Boolean);
  const slug = segments[segments.length - 1];

  // Fetch comment count for this article
  useEffect(() => {
    if (!slug) return;
    let isMounted = true;
    fetch(`/api/comments?articleId=${encodeURIComponent(slug)}`)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted && data.success && typeof data.count === "number") {
          setCommentCount(data.count);
        }
      })
      .catch(() => {});
    return () => {
      isMounted = false;
    };
  }, [slug]);

  const isArabic = currentLanguage === "ar" || !isLTR;

  // Only render on specific article pages, not on hub pages
  if (segments.length < 3) return null;

  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const commentsEl = document.getElementById("comments");
    if (commentsEl) {
      commentsEl.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        const input = commentsEl.querySelector<HTMLInputElement | HTMLTextAreaElement>(
          "input[type='text'], textarea"
        );
        if (input) {
          input.focus({ preventScroll: true });
        }
      }, 500);
      try {
        window.history.pushState(null, "", "#comments");
      } catch {
        // ignore
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleScroll}
      className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs sm:text-sm font-bold bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 hover:text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 dark:hover:from-indigo-500 dark:hover:to-purple-500 border border-indigo-200 dark:border-indigo-800 shadow-sm hover:shadow-md hover:shadow-indigo-500/20 active:scale-95 transition-all duration-300 cursor-pointer"
      aria-label={isArabic ? "الانتقال إلى قسم التعليقات وإضافة تعليق" : "Scroll to comments section and add a comment"}
    >
      {/* Chat Icon with subtle pulse */}
      <span className="relative flex items-center justify-center">
        <svg
          className="w-4 h-4 transition-transform group-hover:scale-110"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </span>

      {/* Text */}
      <span>{isArabic ? "أضف تعليقًا" : "Add Comment"}</span>

      {/* Dynamic Count Badge if comments exist */}
      {commentCount !== null && commentCount > 0 && (
        <span className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-indigo-50 dark:bg-indigo-950/60 group-hover:bg-white/20 text-indigo-600 dark:text-indigo-300 group-hover:text-white transition-colors">
          {commentCount}
        </span>
      )}

      {/* Down Arrow Icon */}
      <svg
        className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </button>
  );
}
