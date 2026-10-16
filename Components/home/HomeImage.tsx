"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeImage() {
  const [activeSide, setActiveSide] = useState<"none" | "programmer" | "writer">("none");

  return (
    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center relative py-4">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none overflow-hidden">
        {/* Cyan glow for left programmer half */}
        <div
          className={`absolute -left-10 w-72 h-72 rounded-full bg-cyan-400/25 blur-3xl transition-opacity duration-500 ${
            activeSide === "programmer" ? "opacity-100 scale-110" : "opacity-60"
          }`}
        />
        {/* Rose glow for right writer half */}
        <div
          className={`absolute -right-10 w-72 h-72 rounded-full bg-rose-500/25 blur-3xl transition-opacity duration-500 ${
            activeSide === "writer" ? "opacity-100 scale-110" : "opacity-60"
          }`}
        />
      </div>

      {/* Main Image Framing Card */}
      <div className="relative group max-w-[340px] sm:max-w-[400px] md:max-w-[440px] w-full">
        {/* Portrait Container */}
        <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-white/60 bg-gradient-to-b from-slate-900 to-slate-950">
          <Image
            src="/images/hero-portrait.jpg"
            alt="Ahmed Osama — Split Portrait: Software Engineer (Left) & Arabic Writer (Right)"
            fill
            priority
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 440px"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />

          {/* Interactive Invisible Overlay Columns for Hovering */}
          <div className="absolute inset-0 grid grid-cols-2 z-10">
            {/* Left Column (Programmer) */}
            <div
              onMouseEnter={() => setActiveSide("programmer")}
              onMouseLeave={() => setActiveSide("none")}
              className="cursor-pointer"
              title="Programmer Side (Software Engineer)"
            />
            {/* Right Column (Writer) */}
            <div
              onMouseEnter={() => setActiveSide("writer")}
              onMouseLeave={() => setActiveSide("none")}
              className="cursor-pointer"
              title="Writer Side (Arabic Literature)"
            />
          </div>

          {/* Center Split Line (Subtle Gradient Divider) */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-white/40 to-transparent pointer-events-none z-10" />

          {/* On-Image Left Label: Programmer Mode */}
          <div
            className={`absolute bottom-4 left-3 sm:left-4 z-20 max-w-[46%] transition-all duration-300 pointer-events-none ${
              activeSide === "programmer" ? "scale-105" : ""
            }`}
          >
            <div className="p-2 sm:p-2.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-cyan-500/40 shadow-lg shadow-cyan-950/50">
              <div className="flex items-center gap-1.5 text-cyan-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                <span>Programmer</span>
              </div>
              <div className="text-white text-xs sm:text-sm font-bold truncate mt-0.5">
                Software Engineer
              </div>
              <p className="text-[10px] text-cyan-200/80 font-mono hidden sm:block truncate">
                &lt;code /&gt; · Architecture
              </p>
            </div>
          </div>

          {/* On-Image Right Label: Writer Mode */}
          <div
            className={`absolute bottom-4 right-3 sm:right-4 z-20 max-w-[46%] transition-all duration-300 pointer-events-none text-right ${
              activeSide === "writer" ? "scale-105" : ""
            }`}
          >
            <div className="p-2 sm:p-2.5 rounded-xl bg-white/90 backdrop-blur-md border border-rose-400/50 shadow-lg shadow-rose-950/20" dir="rtl">
              <div className="flex items-center justify-end gap-1.5 text-rose-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                <span>كاتب وأديب</span>
                <span className="w-2 h-2 rounded-full bg-rose-600"></span>
              </div>
              <div className="text-gray-900 text-xs sm:text-sm font-bold truncate mt-0.5">
                حُبّي للكتابة جليّ
              </div>
              <p className="text-[10px] text-rose-700/80 hidden sm:block truncate">
                نصوص وخواطر أدبية
              </p>
            </div>
          </div>
        </div>

        {/* Side Callout Pills for Desktop / Floating Badges */}
        {/* Floating Left Pill: Programmer Side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden xl:block absolute -left-24 top-1/4 -translate-y-1/2 z-30 w-52"
        >
          <Link
            href="/portfolio"
            onMouseEnter={() => setActiveSide("programmer")}
            onMouseLeave={() => setActiveSide("none")}
            className="block p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-cyan-400/50 shadow-xl shadow-cyan-500/10 hover:border-cyan-500 hover:shadow-cyan-500/20 hover:-translate-x-1 transition-all"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="p-1 rounded-lg bg-cyan-500/10 text-cyan-600">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-cyan-700">
                Programmer Side
              </span>
            </div>
            <div className="text-xs font-bold text-gray-900">
              Senior Software Engineer
            </div>
            <p className="text-[11px] text-gray-500 mt-0.5">
              React, Next.js, Angular, Performance & Clean Architecture
            </p>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-700 mt-2">
              <span>View Portfolio & Code</span>
              <span>→</span>
            </span>
          </Link>
        </motion.div>

        {/* Floating Right Pill: Writer Side */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hidden xl:block absolute -right-24 bottom-1/4 translate-y-1/2 z-30 w-52"
        >
          <Link
            href="/blog"
            onMouseEnter={() => setActiveSide("writer")}
            onMouseLeave={() => setActiveSide("none")}
            className="block p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-rose-400/50 shadow-xl shadow-rose-500/10 hover:border-rose-500 hover:shadow-rose-500/20 hover:translate-x-1 transition-all text-right"
            dir="rtl"
          >
            <div className="flex items-center justify-start gap-2 mb-1">
              <span className="p-1 rounded-lg bg-rose-500/10 text-rose-600">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-rose-700">
                جانب الكاتب والأديب
              </span>
            </div>
            <div className="text-xs font-bold text-gray-900">
              أدب ونصوص عربية
            </div>
            <p className="text-[11px] text-gray-500 mt-0.5">
              &quot;حُبي للكتابة جليّ واضح فهي وسيلتي وطريقتي للبوح&quot;
            </p>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-700 mt-2">
              <span>اقرأ النصوص والكتابات</span>
              <span>←</span>
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Dual Persona Tag under the image (Visible on all screens) */}
      <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold">
        <Link
          href="/portfolio"
          onMouseEnter={() => setActiveSide("programmer")}
          onMouseLeave={() => setActiveSide("none")}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-50 hover:bg-cyan-100 text-cyan-800 border border-cyan-200 shadow-sm transition-all"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
          <span>Programmer: Code & Systems</span>
        </Link>

        <span className="text-gray-400 font-bold">✕</span>

        <Link
          href="/blog"
          onMouseEnter={() => setActiveSide("writer")}
          onMouseLeave={() => setActiveSide("none")}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 shadow-sm transition-all"
        >
          <span className="w-2 h-2 rounded-full bg-rose-500"></span>
          <span>Writer: Literature & Thought</span>
        </Link>
      </div>
    </div>
  );
}
