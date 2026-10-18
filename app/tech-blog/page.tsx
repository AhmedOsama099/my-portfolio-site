"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import MotionPageWrapper from "@/Components/motionPageWrapper";
import { useLocalizedHref } from "@/hooks/useLocalizedHref";

export interface TechArticle {
  id: string;
  category: "git" | "ts" | "performance" | "accessibility";
  categoryName: string;
  categoryColor: {
    badge: string;
    glow: string;
    border: string;
    text: string;
  };
  title: string;
  href: string;
  readTime: string;
  description: string;
  tags: string[];
}

export interface TechTrack {
  id: "git" | "ts" | "performance" | "accessibility";
  title: string;
  tagline: string;
  description: string;
  icon: string;
  defaultHref: string;
  gradient: string;
  borderHover: string;
  articlesCount: number;
  highlightArticles: { title: string; href: string }[];
}

const TECH_TRACKS: TechTrack[] = [
  {
    id: "git",
    title: "Git & Version Control",
    tagline: "VCS Architecture & DAG Internals",
    description:
      "Explore Git's directed acyclic graph (DAG), snapshot hashing, staging index, offline-first commits, and distributed synchronization.",
    icon: "/images/techLogos/git.svg",
    defaultHref: "/tech-blog/git/what-is-git",
    gradient: "from-rose-500/20 via-orange-500/10 to-transparent",
    borderHover: "hover:border-[#EE3E54]/60 hover:shadow-[#EE3E54]/20",
    articlesCount: 2,
    highlightArticles: [
      { title: "What is GIT & How it Works", href: "/tech-blog/git/what-is-git" },
      { title: "Does GIT Need the Internet?", href: "/tech-blog/git/online-offline-git" },
    ],
  },
  {
    id: "ts",
    title: "TypeScript & Static Types",
    tagline: "Compiler Mechanics & Sound Design",
    description:
      "Deep dive into TypeScript's structural (duck) typing, shape compatibility, index signatures, dynamic property keys, and sound type safety.",
    icon: "/images/techLogos/ts.svg",
    defaultHref: "/tech-blog/ts/structural-type-system",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    borderHover: "hover:border-[#3178C6]/60 hover:shadow-[#3178C6]/20",
    articlesCount: 2,
    highlightArticles: [
      { title: "Structural Type System vs Nominal", href: "/tech-blog/ts/structural-type-system" },
      { title: "Index Signatures & Record Types", href: "/tech-blog/ts/index-signature" },
    ],
  },
  {
    id: "performance",
    title: "Web Performance & Core Web Vitals",
    tagline: "Speed, Latency & Rendering Optimization",
    description:
      "Production-ready strategies for measuring, profiling, and optimizing TTFB, FCP, LCP, CLS, and INP across modern web applications.",
    icon: "/images/techLogos/performance.svg",
    defaultHref: "/tech-blog/performance/ttfb",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    borderHover: "hover:border-emerald-500/60 hover:shadow-emerald-500/20",
    articlesCount: 5,
    highlightArticles: [
      { title: "Time to First Byte (TTFB)", href: "/tech-blog/performance/ttfb" },
      { title: "Largest Contentful Paint (LCP)", href: "/tech-blog/performance/lcp" },
      { title: "Interaction to Next Paint (INP)", href: "/tech-blog/performance/inp" },
    ],
  },
  {
    id: "accessibility",
    title: "Web Accessibility (A11y)",
    tagline: "WCAG 2.1 & Inclusive UX Design",
    description:
      "Practical engineering guidance for keyboard navigation, focus trap management, semantic landmark roles, and screen reader friendliness.",
    icon: "/images/techLogos/accessibility.png",
    defaultHref: "/tech-blog/accessibility/general-tips",
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    borderHover: "hover:border-purple-500/60 hover:shadow-purple-500/20",
    articlesCount: 1,
    highlightArticles: [
      { title: "General Accessibility Tips & WCAG Guidelines", href: "/tech-blog/accessibility/general-tips" },
    ],
  },
];

const ALL_ARTICLES: TechArticle[] = [
  {
    id: "what-is-git",
    category: "git",
    categoryName: "Git & VCS",
    categoryColor: {
      badge: "bg-rose-500/15 text-rose-300 border-rose-500/30",
      glow: "from-rose-500/20 to-transparent",
      border: "border-rose-500/30 hover:border-rose-500/60",
      text: "text-rose-400",
    },
    title: "What is GIT & Distributed Architecture",
    href: "/tech-blog/git/what-is-git",
    readTime: "6 min read",
    description:
      "An architectural breakdown of distributed vs centralized version control, snapshot hashing, local staging indexes, and commit history graphs.",
    tags: ["VersionControl", "Architecture", "DAG", "Staging"],
  },
  {
    id: "online-offline-git",
    category: "git",
    categoryName: "Git & VCS",
    categoryColor: {
      badge: "bg-rose-500/15 text-rose-300 border-rose-500/30",
      glow: "from-rose-500/20 to-transparent",
      border: "border-rose-500/30 hover:border-rose-500/60",
      text: "text-rose-400",
    },
    title: "Does GIT Need the Internet?",
    href: "/tech-blog/git/online-offline-git",
    readTime: "4 min read",
    description:
      "Explore Git's offline-first local database design, branch operations without network connectivity, and remote synchronization mechanics.",
    tags: ["OfflineFirst", "LocalDB", "Remotes", "Sync"],
  },
  {
    id: "structural-type-system",
    category: "ts",
    categoryName: "TypeScript",
    categoryColor: {
      badge: "bg-blue-500/15 text-blue-300 border-blue-500/30",
      glow: "from-blue-500/20 to-transparent",
      border: "border-blue-500/30 hover:border-blue-500/60",
      text: "text-blue-400",
    },
    title: "Structural Type System vs Nominal Typing",
    href: "/tech-blog/ts/structural-type-system",
    readTime: "7 min read",
    description:
      "Deep dive comparing nominal typing in C#/Java with TypeScript's structural (duck) typing, shape compatibility rules, and subtyping safety.",
    tags: ["TypeScript", "DuckTyping", "Compiler", "Types"],
  },
  {
    id: "index-signature",
    category: "ts",
    categoryName: "TypeScript",
    categoryColor: {
      badge: "bg-blue-500/15 text-blue-300 border-blue-500/30",
      glow: "from-blue-500/20 to-transparent",
      border: "border-blue-500/30 hover:border-blue-500/60",
      text: "text-blue-400",
    },
    title: "Index Signatures & Dynamic Property Access",
    href: "/tech-blog/ts/index-signature",
    readTime: "5 min read",
    description:
      "Mastering dynamic keys in TypeScript, dictionary records, Record<K, V> utility types, key constraints, and safe property lookups.",
    tags: ["Generics", "IndexSignature", "Records", "TypeInference"],
  },
  {
    id: "ttfb",
    category: "performance",
    categoryName: "Performance",
    categoryColor: {
      badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
      glow: "from-emerald-500/20 to-transparent",
      border: "border-emerald-500/30 hover:border-emerald-500/60",
      text: "text-emerald-400",
    },
    title: "Time to First Byte (TTFB): Optimization Strategies",
    href: "/tech-blog/performance/ttfb",
    readTime: "5 min read",
    description:
      "Techniques for reducing server processing delays, DNS lookup overhead, TLS connection setup, and CDN caching edge routing.",
    tags: ["TTFB", "Latency", "CDN", "Edge", "HTTP/2"],
  },
  {
    id: "fcp",
    category: "performance",
    categoryName: "Performance",
    categoryColor: {
      badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
      glow: "from-emerald-500/20 to-transparent",
      border: "border-emerald-500/30 hover:border-emerald-500/60",
      text: "text-emerald-400",
    },
    title: "First Contentful Paint (FCP): Critical Rendering Path",
    href: "/tech-blog/performance/fcp",
    readTime: "5 min read",
    description:
      "Eliminating render-blocking CSS and JS, optimizing critical inline styles, and minimizing the delay before the user sees the first DOM content.",
    tags: ["FCP", "CriticalCSS", "DOM", "Rendering"],
  },
  {
    id: "lcp",
    category: "performance",
    categoryName: "Performance",
    categoryColor: {
      badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
      glow: "from-emerald-500/20 to-transparent",
      border: "border-emerald-500/30 hover:border-emerald-500/60",
      text: "text-emerald-400",
    },
    title: "Largest Contentful Paint (LCP): Maximizing Core Web Vitals",
    href: "/tech-blog/performance/lcp",
    readTime: "7 min read",
    description:
      "Speeding up the largest content element: responsive image sizing, fetchpriority='high', modern formats (AVIF/WebP), and server-side rendering.",
    tags: ["LCP", "CoreWebVitals", "Images", "Preload"],
  },
  {
    id: "cls",
    category: "performance",
    categoryName: "Performance",
    categoryColor: {
      badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
      glow: "from-emerald-500/20 to-transparent",
      border: "border-emerald-500/30 hover:border-emerald-500/60",
      text: "text-emerald-400",
    },
    title: "Cumulative Layout Shift (CLS): Eliminating Visual Jank",
    href: "/tech-blog/performance/cls",
    readTime: "5 min read",
    description:
      "Reserving explicit aspect-ratio containers, handling dynamic embed slots, and configuring font-display swap to prevent layout shifts.",
    tags: ["CLS", "VisualStability", "AspectRatio", "WebFonts"],
  },
  {
    id: "inp",
    category: "performance",
    categoryName: "Performance",
    categoryColor: {
      badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
      glow: "from-emerald-500/20 to-transparent",
      border: "border-emerald-500/30 hover:border-emerald-500/60",
      text: "text-emerald-400",
    },
    title: "Interaction to Next Paint (INP): Main-Thread Responsiveness",
    href: "/tech-blog/performance/inp",
    readTime: "6 min read",
    description:
      "How INP replaces FID, diagnosing long tasks, breaking down heavy JavaScript execution, and ensuring snappy user interface interactions.",
    tags: ["INP", "MainThread", "LongTasks", "EventLoop"],
  },
  {
    id: "general-tips",
    category: "accessibility",
    categoryName: "Accessibility",
    categoryColor: {
      badge: "bg-purple-500/15 text-purple-300 border-purple-500/30",
      glow: "from-purple-500/20 to-transparent",
      border: "border-purple-500/30 hover:border-purple-500/60",
      text: "text-purple-400",
    },
    title: "General Accessibility Tips & WCAG 2.1 Guidelines",
    href: "/tech-blog/accessibility/general-tips",
    readTime: "6 min read",
    description:
      "Essential practices for universal design: keyboard accessibility, ARIA landmark roles, semantic elements, focus indicators, and screen reader UX.",
    tags: ["WCAG", "A11y", "KeyboardUX", "ScreenReaders", "ARIA"],
  },
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
      const matchesSearch =
        article.title.toLowerCase().includes(q) ||
        article.description.toLowerCase().includes(q) ||
        article.tags.some((t) => t.toLowerCase().includes(q)) ||
        article.categoryName.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <MotionPageWrapper className="min-h-full py-8 sm:py-12 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto overflow-y-auto custom-scrollbar">
      {/* Hero Header Section */}
      <div className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-[#565FA1]/25 border border-slate-800 shadow-2xl backdrop-blur-xl mb-12 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#EE3E54]/20 via-[#565FA1]/20 to-transparent rounded-full blur-3xl pointer-events-none -mr-28 -mt-28"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-emerald-500/10 via-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none -ml-24 -mb-24"></div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-bold text-slate-300 shadow-md mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#EE3E54] animate-pulse"></span>
            <span className="tracking-wide">ENGINEERING KNOWLEDGE BASE</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            Architecture Notes, Deep-Dives &amp; Frontend Craft
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-slate-300/80 mt-4 leading-relaxed"
          >
            Curated technical guides exploring modern TypeScript structural type systems, Core Web Vitals optimization, distributed version control architecture, and accessible engineering.
          </motion.p>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full max-w-xl mt-8 relative"
          >
            <div className="relative flex items-center">
              <svg
                className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search articles by title, topic, or keyword (e.g. LCP, Git, Type)..."
                className="w-full pl-12 pr-24 py-3.5 rounded-2xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#EE3E54] focus:ring-2 focus:ring-[#EE3E54]/20 transition-all shadow-inner"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
                >
                  Clear
                </button>
              )}
            </div>
          </motion.div>

          {/* Quick Stats Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-8 pt-6 border-t border-slate-800/80 text-xs font-semibold text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span className="text-white font-bold">4</span> Tech Domains
            </div>
            <span className="hidden sm:inline opacity-30">&bull;</span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EE3E54]"></span>
              <span className="text-white font-bold">10</span> In-Depth Articles
            </div>
            <span className="hidden sm:inline opacity-30">&bull;</span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3178C6]"></span>
              <span>100% Practical &amp; Benchmarked</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: "all", label: "All Stacks", count: ALL_ARTICLES.length },
            { id: "git", label: "Git & VCS", count: 2 },
            { id: "ts", label: "TypeScript", count: 2 },
            { id: "performance", label: "Core Web Vitals", count: 5 },
            { id: "accessibility", label: "Accessibility", count: 1 },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-[#565FA1] to-[#EE3E54] text-white shadow-lg shadow-[#565FA1]/30 scale-105"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedCategory === cat.id
                    ? "bg-white/20 text-white"
                    : "bg-slate-800 text-slate-400"
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        <div className="text-xs text-slate-400 font-medium">
          Showing <span className="text-white font-bold">{filteredArticles.length}</span> articles
        </div>
      </div>

      {/* Tech Tracks Overview (Shown when viewing All and no search query) */}
      {selectedCategory === "all" && !searchTerm && (
        <div className="mb-14">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Curated Technology Tracks
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Choose a specialized domain to begin reading through sequenced documentation guides.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TECH_TRACKS.map((track) => (
              <div
                key={track.id}
                className={`group relative p-6 sm:p-7 rounded-3xl bg-slate-900/80 border border-slate-800/80 transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl overflow-hidden ${track.borderHover}`}
              >
                <div
                  className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${track.gradient} rounded-full blur-3xl pointer-events-none -mr-16 -mt-16 group-hover:scale-125 transition-transform duration-500`}
                ></div>

                <div className="relative z-10 flex flex-col h-full justify-between gap-5">
                  <div className="space-y-3.5">
                    {/* Top Row: Icon + Count */}
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-slate-800/90 border border-slate-700/80 p-2.5 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        <Image
                          src={track.icon}
                          alt={track.title}
                          width={40}
                          height={40}
                          className="object-contain"
                          unoptimized
                        />
                      </div>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700/80">
                        {track.articlesCount} {track.articlesCount === 1 ? "Article" : "Articles"}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-slate-100 transition">
                        {track.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#EE3E54] mt-0.5">
                        {track.tagline}
                      </p>
                      <p className="text-xs text-slate-300/80 mt-2 leading-relaxed">
                        {track.description}
                      </p>
                    </div>

                    {/* Featured bullet list */}
                    <div className="space-y-1.5 pt-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Key Topics Covered:
                      </div>
                      <ul className="space-y-1">
                        {track.highlightArticles.map((art, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-slate-300 hover:text-white transition">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#565FA1]"></span>
                            <Link href={localize(art.href)} className="hover:underline">
                              {art.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <Link
                      href={localize(track.defaultHref)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#EE3E54] transition group/btn"
                    >
                      <span>Explore Track Documentation</span>
                      <svg
                        className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Articles Feed Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {searchTerm
                ? `Search Results for "${searchTerm}"`
                : selectedCategory === "all"
                ? "All Technical Guides & References"
                : `${TECH_TRACKS.find((t) => t.id === selectedCategory)?.title} Articles`}
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Select an article to read the full guide, benchmarks, code samples, and community discussions.
            </p>
          </div>
        </div>

        {filteredArticles.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-slate-900/60 border border-slate-800 shadow-xl space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-slate-800 text-slate-400 mx-auto flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-white">No articles matched your criteria</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              We couldn&apos;t find any articles matching your search or filter. Try a different search keyword or clear filters.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#565FA1] text-white hover:bg-[#48508a] transition"
              >
                Reset All Filters
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <AnimatePresence>
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={localize(article.href)}
                    className={`group block p-6 rounded-3xl bg-slate-900/80 border transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl h-full flex flex-col justify-between ${article.categoryColor.border}`}
                  >
                    <div className="space-y-3">
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`text-[10px] uppercase font-extrabold tracking-wider px-2.5 py-0.5 rounded-full border ${article.categoryColor.badge}`}
                        >
                          {article.categoryName}
                        </span>
                        <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{article.readTime}</span>
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-white group-hover:text-[#EE3E54] transition leading-snug">
                        {article.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-slate-300/80 leading-relaxed line-clamp-3">
                        {article.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        {article.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-400 font-mono"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-white transition">
                      <span className="group-hover:text-[#EE3E54] transition">Read Documentation Guide</span>
                      <svg
                        className="w-4 h-4 text-slate-400 group-hover:text-[#EE3E54] transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Community & Discussion CTA Footer */}
      <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#565FA1]/25 via-slate-900/90 to-[#EE3E54]/25 border border-slate-800/80 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <h3 className="text-lg font-bold text-white">
            Have Questions, Benchmarks, or Insights?
          </h3>
          <p className="text-xs text-slate-300/80 mt-1 max-w-xl leading-relaxed">
            Every technical article features an interactive comment section. Join the discussion, share production benchmarks, or connect directly.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#565FA1] to-[#EE3E54] text-white text-xs font-bold shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            Get In Touch
          </Link>
          <Link
            href="/notifications"
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold border border-slate-700 transition"
          >
            Community Notifications
          </Link>
        </div>
      </div>
    </MotionPageWrapper>
  );
}
