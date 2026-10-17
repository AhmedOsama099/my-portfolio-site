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

      {/* Main Image Framing Card with Floating Cards */}
      <div className="relative group max-w-[360px] sm:max-w-[420px] md:max-w-[460px] w-full">
        {/* Portrait Container - Solid, No Fading or Transparency */}
        <div className="relative aspect-[764/1024] w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-white/80 bg-slate-900">
          <Image
            src="/images/hero-portrait.jpg"
            alt="Ahmed Osama — Split Portrait: Software Engineer (Left) & Arabic Writer (Right)"
            fill
            priority
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 480px"
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
        </div>

        {/* Up Left Card: Programmer Mode (No flashing circles) */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className={`absolute top-3 sm:top-5 -left-3 sm:-left-8 md:-left-12 z-20 max-w-[55%] transition-all duration-300 ${
            activeSide === "programmer" ? "scale-105" : ""
          }`}
        >
          <Link
            href="/portfolio"
            onMouseEnter={() => setActiveSide("programmer")}
            onMouseLeave={() => setActiveSide("none")}
            className="block p-2 sm:p-2.5 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-cyan-500/50 shadow-lg shadow-cyan-950/50 hover:border-cyan-400 transition-all text-left"
          >
            <div className="flex items-center gap-1.5 text-cyan-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              <span className="font-mono text-xs">&lt;/&gt;</span>
              <span>Programmer</span>
            </div>
            <div className="text-white text-xs sm:text-sm font-bold truncate mt-0.5">
              Software Engineer
            </div>
            <p className="text-[10px] text-cyan-200/80 font-mono hidden sm:block truncate">
              &lt;code /&gt; · Architecture
            </p>
          </Link>
        </motion.div>

        {/* Down Right Card: Writer Mode (No flashing circles) */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className={`absolute bottom-3 sm:bottom-5 -right-3 sm:-right-8 md:-right-12 z-20 max-w-[55%] transition-all duration-300 text-right ${
            activeSide === "writer" ? "scale-105" : ""
          }`}
        >
          <Link
            href="/blog"
            onMouseEnter={() => setActiveSide("writer")}
            onMouseLeave={() => setActiveSide("none")}
            className="block p-2 sm:p-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-rose-300 shadow-lg shadow-rose-950/20 hover:border-rose-400 transition-all text-right"
            dir="rtl"
          >
            <div className="flex items-center justify-start gap-1.5 text-rose-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              <span className="text-xs">✍</span>
              <span>كاتب وأديب</span>
            </div>
            <div className="text-gray-900 text-xs sm:text-sm font-bold truncate mt-0.5">
              حُبّي للكتابة جليّ
            </div>
            <p className="text-[10px] text-rose-700/80 hidden sm:block truncate">
              نصوص وخواطر أدبية
            </p>
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
