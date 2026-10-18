"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import MotionPageWrapper from "@/Components/motionPageWrapper";
import { useLocalizedHref } from "@/hooks/useLocalizedHref";

export interface TechArticle {
  id: string;
  category: "git" | "ts" | "performance" | "accessibility";
  categoryName: string;
  title: string;
  href: string;
  readTime: string;
  description: string;
}

const ALL_ARTICLES: TechArticle[] = [
  {
    id: "what-is-git",
    category: "git",
    categoryName: "Git",
    title: "What is GIT & Distributed Architecture",
    href: "/tech-blog/git/what-is-git",
    readTime: "6 min read",
    description:
      "An architectural breakdown of distributed vs centralized version control, snapshot hashing, local staging indexes, and commit history graphs.",
  },
  {
    id: "online-offline-git",
    category: "git",
    categoryName: "Git",
    title: "Does GIT Need the Internet?",
    href: "/tech-blog/git/online-offline-git",
    readTime: "4 min read",
    description:
      "Explore Git's offline-first local database design, branch operations without network connectivity, and remote synchronization mechanics.",
  },
  {
    id: "how-git-works",
    category: "git",
    categoryName: "Git",
    title: "How GIT Works Under the Hood",
    href: "/tech-blog/git/how-git-works",
    readTime: "8 min read",
    description:
      "Deep dive into Git's internal object model: blobs, trees, commit objects, and content-addressable storage with SHA-1 hashing.",
  },
  {
    id: "structural-type-system",
    category: "ts",
    categoryName: "TypeScript",
    title: "Structural Type System vs Nominal Typing",
    href: "/tech-blog/ts/structural-type-system",
    readTime: "7 min read",
    description:
      "Comparing nominal typing in C#/Java with TypeScript's structural shape compatibility, duck typing rules, and subtyping safety.",
  },
  {
    id: "index-signature",
    category: "ts",
    categoryName: "TypeScript",
    title: "Index Signatures vs Record<Keys, Type>",
    href: "/tech-blog/ts/index-signature",
    readTime: "5 min read",
    description:
      "Comprehensive analysis of when to use explicit index signatures versus TypeScript's utility Record type for dynamic property mapping.",
  },
  {
    id: "mapped-types",
    category: "ts",
    categoryName: "TypeScript",
    title: "Index Signatures vs Mapped Types",
    href: "/tech-blog/ts/mapped-types",
    readTime: "6 min read",
    description:
      "Key iteration syntax, modifier flags (+/-readonly, +/-?), homomorphic mapped types, and type-safe schema transformations in TypeScript.",
  },
  {
    id: "ttfb",
    category: "performance",
    categoryName: "Performance",
    title: "Time to First Byte (TTFB): Server Responsiveness",
    href: "/tech-blog/performance/ttfb",
    readTime: "5 min read",
    description:
      "Demystifying TTFB: DNS lookup, TLS negotiation, server response time, database optimization, and Edge CDN caching strategies.",
  },
  {
    id: "lcp",
    category: "performance",
    categoryName: "Performance",
    title: "Largest Contentful Paint (LCP): Perceived Load Speed",
    href: "/tech-blog/performance/lcp",
    readTime: "7 min read",
    description:
      "Practical techniques to optimize LCP: critical image preloading, fetchpriority hints, server-side rendering, and eliminating render-blocking resources.",
  },
  {
    id: "inp",
    category: "performance",
    categoryName: "Performance",
    title: "Interaction to Next Paint (INP): Main-Thread Responsiveness",
    href: "/tech-blog/performance/inp",
    readTime: "6 min read",
    description:
      "How INP measures user interaction latency, diagnosing long tasks, breaking down heavy JavaScript execution, and event loop scheduling.",
  },
  {
    id: "general-tips",
    category: "accessibility",
    categoryName: "Accessibility",
    title: "Web Accessibility Tips & WCAG Guidelines",
    href: "/tech-blog/accessibility/general-tips",
    readTime: "6 min read",
    description:
      "Essential practices for universal design: keyboard accessibility, ARIA landmark roles, semantic elements, focus indicators, and screen reader UX.",
  },
];

const CATEGORIES: { id: string; label: string }[] = [
  { id: "all", label: "All" },
  { id: "git", label: "Git" },
  { id: "ts", label: "TypeScript" },
  { id: "performance", label: "Performance" },
  { id: "accessibility", label: "Accessibility" },
];

export default function TechBlogPage() {
  const localize = useLocalizedHref();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredArticles = useMemo(() => {
    return ALL_ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === "all" || article.category === selectedCategory;

      if (!searchTerm.trim()) return matchesCategory;

      const q = searchTerm.toLowerCase().trim();
      return (
        matchesCategory &&
        (article.title.toLowerCase().includes(q) ||
          article.description.toLowerCase().includes(q) ||
          article.categoryName.toLowerCase().includes(q))
      );
    });
  }, [selectedCategory, searchTerm]);

  return (
    <MotionPageWrapper className="min-h-full py-8 sm:py-12 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto overflow-y-auto custom-scrollbar">
      {/* Minimal Header */}
      <header className="mb-8 sm:mb-10 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200/80 pb-5">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#3D4082] tracking-tight">
              Tech Blog
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-500 max-w-xl">
              Architectural notes and deep-dives on TypeScript, web performance, Git internals, and accessibility.
            </p>
          </div>
          <span className="text-xs font-semibold text-slate-400 self-center sm:self-auto shrink-0">
            {filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"}
          </span>
        </div>

        {/* Filter Tabs & Search */}
        <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const count =
                cat.id === "all"
                  ? ALL_ARTICLES.length
                  : ALL_ARTICLES.filter((a) => a.category === cat.id).length;
              const isActive = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? "bg-[#3D4082] text-white shadow-sm"
                      : "bg-white/80 hover:bg-white text-slate-600 border border-slate-200/80 hover:border-slate-300"
                  }`}
                >
                  {cat.label} <span className="opacity-70 text-[10px]">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Minimal Search Input */}
          <div className="relative min-w-[200px] sm:w-60">
            <svg
              className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-9 pr-7 py-1.5 text-xs rounded-full bg-white/90 border border-slate-200/80 focus:border-[#565FA1] focus:ring-1 focus:ring-[#565FA1] focus:outline-none transition-all placeholder:text-slate-400 text-slate-700"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Minimal Article List */}
      <div className="space-y-3.5">
        <AnimatePresence mode="popLayout">
          {filteredArticles.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16 bg-white/60 rounded-2xl border border-dashed border-slate-200 p-8"
            >
              <p className="text-sm text-slate-500">No articles found matching &quot;{searchTerm}&quot;</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="mt-3 text-xs font-semibold text-[#EE3E54] hover:underline"
              >
                Reset filters
              </button>
            </motion.div>
          ) : (
            filteredArticles.map((article, idx) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2, delay: idx * 0.03 }}
              >
                <Link
                  href={localize(article.href)}
                  className="group block p-4 sm:p-5 rounded-2xl bg-white/80 hover:bg-white backdrop-blur-md border border-white/80 hover:border-indigo-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-indigo-50 text-[#565FA1]">
                        {article.categoryName}
                      </span>
                      <h2 className="text-base sm:text-lg font-bold text-[#3D4082] group-hover:text-[#EE3E54] transition-colors">
                        {article.title}
                      </h2>
                    </div>
                    <span className="text-xs text-slate-400 whitespace-nowrap self-start sm:self-auto">
                      {article.readTime}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {article.description}
                  </p>

                  <div className="mt-3 flex items-center justify-between text-xs font-semibold text-[#565FA1] group-hover:text-[#EE3E54] transition-colors">
                    <span>Read article</span>
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))
          )}
        </AnimatePresence>
      </div>
    </MotionPageWrapper>
  );
}
