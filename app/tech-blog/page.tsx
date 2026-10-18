"use client";

import React from "react";
import { motion } from "framer-motion";
import MotionPageWrapper from "@/Components/motionPageWrapper";
import LocaleLink from "@/Components/LocaleLink";
import { useLocalizedHref } from "@/hooks/useLocalizedHref";
import { useTechAuth } from "@/Components/techBlog/TechAuthContext";

export interface TechCategory {
  id: string;
  title: string;
  description: string;
  articlesCount: string;
  defaultHref: string;
  isUpcoming?: boolean;
  isHighlighted?: boolean;
  requiresAuth?: boolean;
  icon: (props: { className?: string }) => React.JSX.Element;
}

const CATEGORIES_DATA: TechCategory[] = [
  {
    id: "git",
    title: "Git & Version Control",
    description:
      "Internal object models, distributed architecture, DAG commit graphs, snapshot hashing, and offline-first workflows.",
    articlesCount: "3 Articles",
    defaultHref: "/tech-blog/git/what-is-git",
    isHighlighted: true,
    icon: ({ className }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="9" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9v6m0-6a9 9 0 019-3" />
      </svg>
    ),
  },
  {
    id: "ts",
    title: "TypeScript Systems",
    description:
      "Structural typing versus nominal systems, advanced generics, index signatures, and type-safe schema transformations.",
    articlesCount: "3 Articles",
    defaultHref: "/tech-blog/ts/structural-type-system",
    icon: ({ className }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <rect x="3" y="4" width="18" height="16" rx="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10l-2 2 2 2m8-4l2 2-2 2m-5 4l2-8" />
      </svg>
    ),
  },
  {
    id: "performance",
    title: "Web Performance",
    description:
      "Core Web Vitals deep dives: TTFB, LCP, INP, and critical rendering path optimization for high-speed web apps.",
    articlesCount: "1 Free · 4 Upcoming",
    defaultHref: "/tech-blog/performance/ttfb",
    icon: ({ className }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: "accessibility",
    title: "Web Accessibility",
    description:
      "WCAG 2.2 guidelines, ARIA landmark patterns, semantic HTML structures, and keyboard-first universal navigation UX.",
    articlesCount: "Upcoming Series",
    defaultHref: "/tech-blog/accessibility/general-tips",
    requiresAuth: true,
    isUpcoming: true,
    icon: ({ className }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="4.5" r="2.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8.5h16M12 8.5v6.5m-4 5l4-5 4 5" />
      </svg>
    ),
  },
];

export default function TechBlogPage() {
  const localize = useLocalizedHref();
  const { isAuthenticated, openAuthModal } = useTechAuth();

  return (
    <MotionPageWrapper className="h-full overflow-y-auto custom-scrollbar py-6 sm:py-10 md:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex flex-col gap-6 sm:gap-8">
        {/* Header Section */}
        <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200/80 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/60 text-xs font-bold text-[#3A4184] mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EE3E54] animate-pulse" />
              Technical Knowledge Base
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3D4082] tracking-tight">
              Tech Blog
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              Explore in-depth engineering notes, structural typing patterns, web performance benchmarks, and distributed architecture guides.
            </p>
          </div>
          <div className="text-xs font-semibold text-slate-400 self-start sm:self-auto shrink-0">
            4 Core Domains
          </div>
        </header>

        {/* 2x2 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {CATEGORIES_DATA.map((category, idx) => {
            const isCategoryLocked = category.requiresAuth && !isAuthenticated;
            const isHighlighted = category.isHighlighted;
            const targetUrl = localize(category.defaultHref);

            const cardContent = (
              <div
                className={`h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white/90 backdrop-blur-xl border transition-all duration-300 ${
                  isHighlighted
                    ? "border-2 border-[#565FA1] shadow-lg shadow-[#565FA1]/10 hover:shadow-xl hover:shadow-[#565FA1]/20 hover:border-[#3D4082]"
                    : "border-slate-200/90 hover:border-[#565FA1]/60 shadow-sm hover:shadow-xl hover:shadow-indigo-950/10"
                } hover:-translate-y-1.5 cursor-pointer`}
              >
                <div>
                  {/* Category Icon */}
                  <div className="mb-4 inline-flex items-center justify-center">
                    <category.icon
                      className={`w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110 ${
                        isHighlighted
                          ? "text-[#3D4082]"
                          : isCategoryLocked
                          ? "text-slate-500 group-hover:text-[#EE3E54]"
                          : "text-[#565FA1] group-hover:text-[#EE3E54]"
                      }`}
                    />
                  </div>

                  {/* Category Title */}
                  <div className="flex items-center justify-between gap-2">
                    <h2
                      className={`text-lg sm:text-xl font-bold tracking-tight transition-colors duration-200 ${
                        isHighlighted
                          ? "text-[#3D4082]"
                          : "text-gray-900 group-hover:text-[#3D4082]"
                      }`}
                    >
                      {category.title}
                    </h2>
                    {isCategoryLocked && (
                      <span className="text-xs px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200/80 font-medium shrink-0 flex items-center gap-1">
                        🔒 Sign In
                      </span>
                    )}
                  </div>

                  {/* Category Description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Bottom Row (Article Count & Action) */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-semibold text-slate-500">
                    {isCategoryLocked ? "Upcoming Series" : category.articlesCount}
                  </span>

                  {isCategoryLocked ? (
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200/80 group-hover:border-[#EE3E54]/40 group-hover:text-[#EE3E54] transition-colors flex items-center gap-1">
                      <span>Preview</span>
                      <span>→</span>
                    </span>
                  ) : (
                    <span className="text-xs sm:text-sm font-bold text-[#565FA1] group-hover:text-[#EE3E54] flex items-center gap-1 transition-colors">
                      Explore
                      <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  )}
                </div>
              </div>
            );

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="group h-full"
              >
                {isCategoryLocked ? (
                  <button
                    type="button"
                    onClick={() => openAuthModal(targetUrl)}
                    className="block w-full h-full text-start focus:outline-none focus-visible:ring-2 focus-visible:ring-[#565FA1] rounded-2xl"
                    aria-label={`Unlock ${category.title} preview`}
                  >
                    {cardContent}
                  </button>
                ) : (
                  <LocaleLink
                    href={targetUrl}
                    className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#565FA1] rounded-2xl"
                  >
                    {cardContent}
                  </LocaleLink>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </MotionPageWrapper>
  );
}
