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
    "المحتوى هو نتيجة اطلاعي البرمجي والرغبة في تسجيل ملاحظات، والتركيز على المحتوى العربي، ومن ثم مشاركته، أيضًا تم الاستعانة بخدمات الذكاء الصناعي في الإعداد، لذا يرجى التماس العذر في حالات عدم الوضوح الكامل في الشرح ولحذر من احتمالية وجود أخطاء"
  );
  const badgeText = t("tech-blog.aiBadge", "مُعد بالذكاء الاصطناعي");
  const collapseText = t("tech-blog.collapse", "تصغير");
  const expandText = t("tech-blog.expand", "تنويه الذكاء الاصطناعي");

  return (
    <div className={cn("w-full my-3 select-none", className)}>
      <AnimatePresence mode="wait" initial={false}>
        {isCollapsed ? (
          /* ─── Collapsed Pill ─── */
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
              className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md hover:bg-white text-[#3D4082] border border-[#565FA1]/20 hover:border-[#565FA1]/40 shadow-sm hover:shadow-md hover:shadow-[#565FA1]/10 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#565FA1]/30"
              aria-label={disclaimerText}
            >
              {/* Sparkle Icon */}
              <svg
                className="w-3.5 h-3.5 text-[#565FA1] group-hover:text-[#EE3E54] group-hover:rotate-12 transition-all duration-300"
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
              <span className="text-[11px] opacity-60 font-normal">
                ({expandText})
              </span>

              <svg
                className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-all duration-200"
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
          /* ─── Expanded Card ─── */
          <motion.div
            key="expanded"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            role="note"
            aria-label={disclaimerText}
            className="relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-xl border border-[#565FA1]/15 shadow-sm hover:shadow-md hover:shadow-[#565FA1]/8 transition-shadow duration-300"
          >
            {/* Decorative top edge accent */}
            <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-[#3A4184] via-[#565FA1] to-[#EE3E54]" />

            <div className="p-3.5 sm:p-4 pt-4 sm:pt-[18px]">
              {/* Header row: badge + collapse toggle */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2.5">
                  {/* Sparkle Avatar */}
                  <div className="relative flex items-center justify-center w-7 h-7 rounded-xl bg-gradient-to-tr from-[#3A4184] to-[#565FA1] text-white shadow-md shadow-[#565FA1]/25 shrink-0">
                    <svg
                      className="w-3.5 h-3.5"
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

                  <span className="text-xs font-bold uppercase tracking-wider text-[#3D4082]">
                    {badgeText}
                  </span>
                </div>

                {/* Collapse button */}
                <button
                  type="button"
                  onClick={() => setIsCollapsed(true)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium text-slate-500 hover:text-[#3D4082] bg-slate-100/80 hover:bg-indigo-50 border border-transparent hover:border-[#565FA1]/20 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#565FA1]/30"
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
              <p className="m-0 text-[13px] sm:text-[13.5px] text-slate-600 leading-relaxed font-medium text-start">
                {disclaimerText}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
