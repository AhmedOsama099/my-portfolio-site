"use client";

import { useAppTranslation } from "@/hooks/useAppTranslation";
import { cn } from "@/lib/tailwind";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

interface AiDisclaimerProps {
  className?: string;
  defaultCollapsed?: boolean;
}

export default function AiDisclaimer({
  className,
  defaultCollapsed = false,
}: AiDisclaimerProps) {
  const { t, isLTR } = useAppTranslation();
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  const disclaimerText = t(
    "tech-blog.aiDisclaimer",
    "تم الاستعانة بخدمات الذكاء الصناعي في إعداد هذا المقال، لذا يرجى الحذر من احتمالية وجود أخطاء"
  );
  const badgeText = t("tech-blog.aiBadge", "مُعد بالذكاء الاصطناعي");
  const collapseText = t("tech-blog.collapse", "تصغير");
  const expandText = t("tech-blog.expand", "تنويه الذكاء الاصطناعي");

  return (
    <div className={cn("w-full my-3 select-none", className)}>
      <AnimatePresence mode="wait" initial={false}>
        {isCollapsed ? (
          <motion.div
            key="collapsed"
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <button
              type="button"
              onClick={() => setIsCollapsed(false)}
              className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-amber-500/10 hover:from-indigo-500/20 hover:via-purple-500/20 hover:to-amber-500/20 text-indigo-900 dark:text-indigo-200 border border-indigo-500/25 dark:border-indigo-400/25 shadow-sm transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
              aria-label={disclaimerText}
            >
              {/* Pulsing Sparkles Icon */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>

              <svg
                className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-300 group-hover:rotate-12 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
                />
              </svg>

              <span>{badgeText}</span>
              <span className="text-[11px] opacity-75 font-normal">
                ({expandText})
              </span>

              <svg
                className={cn(
                  "w-3 h-3 opacity-60 group-hover:opacity-100 transition-transform duration-200",
                  isLTR ? "rotate-0" : "rotate-0"
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, y: -8, height: "auto" }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: "auto" }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            role="note"
            aria-label={disclaimerText}
            className="relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-r from-indigo-500/35 via-purple-500/30 to-amber-500/35 dark:from-indigo-400/25 dark:via-purple-400/20 dark:to-amber-400/25 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Inner Glassmorphic Container */}
            <div className="relative rounded-[15px] bg-gradient-to-br from-white/95 via-indigo-50/40 to-purple-50/40 dark:from-slate-900/95 dark:via-slate-900/90 dark:to-indigo-950/40 backdrop-blur-md p-3.5 sm:p-4">
              {/* Header row: badge + collapse toggle */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  {/* Glowing Sparkle Avatar */}
                  <div className="relative flex items-center justify-center w-6 h-6 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-sm shadow-indigo-500/30">
                    <svg
                      className="w-3.5 h-3.5 animate-pulse"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
                      />
                    </svg>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-indigo-700 to-purple-700 dark:from-indigo-300 dark:to-purple-300 bg-clip-text text-transparent">
                    {badgeText}
                  </span>
                </div>

                {/* Collapse button */}
                <button
                  type="button"
                  onClick={() => setIsCollapsed(true)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 bg-slate-100/80 hover:bg-slate-200/80 dark:bg-slate-800/60 dark:hover:bg-slate-700/60 transition-colors cursor-pointer"
                  title={collapseText}
                >
                  <span>{collapseText}</span>
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Message Content */}
              <p className="m-0 text-[13.5px] sm:text-[14.5px] text-slate-700 dark:text-slate-300 leading-relaxed font-medium text-start">
                {disclaimerText}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
