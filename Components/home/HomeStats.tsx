"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface StatItem {
  id: string;
  value: number;
  suffix: string;
  title: string;
  subtitle: string;
  badge: string;
  href: string;
  gradient: string;
  badgeBg: string;
  badgeText: string;
  borderHover: string;
  icon: React.ReactNode;
}

export default function HomeStats() {
  const stats: StatItem[] = [
    {
      id: "projects",
      value: 11,
      suffix: "+",
      title: "Projects",
      subtitle: "Full-Stack SaaS, Angular & Next.js platforms",
      badge: "Software Engineering",
      href: "/portfolio",
      gradient: "from-blue-600 via-indigo-600 to-indigo-800",
      badgeBg: "bg-blue-500/10 border-blue-500/20",
      badgeText: "text-blue-700",
      borderHover: "hover:border-blue-400/50 hover:shadow-blue-500/15",
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: "tech-blog",
      value: 10,
      suffix: " Guides",
      title: "Tech Articles",
      subtitle: "Web performance, Git internals & TypeScript",
      badge: "Bilingual (EN / AR)",
      href: "/tech-blog",
      gradient: "from-cyan-600 via-teal-600 to-emerald-700",
      badgeBg: "bg-teal-500/10 border-teal-500/20",
      badgeText: "text-teal-700",
      borderHover: "hover:border-teal-400/50 hover:shadow-teal-500/15",
      icon: (
        <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      id: "literature",
      value: 87,
      suffix: "+",
      title: "خواطر",
      subtitle: "Reflective Arabic prose & contemplative musings",
      badge: "نصوص وكتابات أدبية",
      href: "/blog",
      gradient: "from-rose-600 via-red-600 to-amber-700",
      badgeBg: "bg-rose-500/10 border-rose-500/20",
      badgeText: "text-rose-700",
      borderHover: "hover:border-rose-400/50 hover:shadow-rose-500/15",
      icon: (
        <svg className="w-5 h-5 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
    },
    {
      id: "stats",
      value: 400,
      suffix: "+",
      title: "Visitor Insights",
      subtitle: "Live client-side telemetry & geographic metrics",
      badge: "Real-Time Telemetry",
      href: "/stats",
      gradient: "from-purple-600 via-indigo-600 to-pink-600",
      badgeBg: "bg-purple-500/10 border-purple-500/20",
      badgeText: "text-purple-700",
      borderHover: "hover:border-purple-400/50 hover:shadow-purple-500/15",
      icon: (
        <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full mt-4 mb-8"
      aria-label="Portfolio and Writing Statistics"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/60 text-xs font-semibold text-indigo-700 mb-1.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
            <span>Live Portfolio Scope & Metrics</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            Work by the Numbers
          </h2>
        </div>

        <Link
          href="/stats"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-700 hover:text-indigo-900 bg-white/80 hover:bg-white px-3.5 py-1.5 rounded-xl border border-indigo-100 shadow-sm transition-all hover:shadow"
        >
          <span>View Telemetry Dashboard</span>
          <span aria-hidden>→</span>
        </Link>
      </div>

      {/* Grid of Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * idx }}
            className="group relative"
          >
            <Link
              href={stat.href}
              className={`block h-full p-5 sm:p-6 rounded-2xl bg-white/85 backdrop-blur-md border border-white/80 shadow-md ${stat.borderHover} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >
              {/* Top Row: Icon + Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${stat.badgeBg} ${stat.badgeText}`}>
                  {stat.badge}
                </span>
              </div>

              {/* Number Value */}
              <div className="flex items-baseline gap-1 mb-1">
                <span className={`text-4xl font-extrabold tracking-tight bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.value}
                </span>
                <span className="text-xl font-bold text-gray-600">
                  {stat.suffix}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-base font-bold text-gray-900 group-hover:text-indigo-900 transition-colors">
                {stat.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                {stat.subtitle}
              </p>

              {/* Bottom explore link */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-gray-600 group-hover:text-indigo-600 transition-colors">
                <span>Explore</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
