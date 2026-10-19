"use client";

import React from "react";
import Image from "next/image";
import LocaleLink from "@/Components/LocaleLink";
import { motion } from "framer-motion";
import { socialMedia } from "@/data/navbar";
import { projects } from "@/data/portfolio";

export default function HeroSection() {
  const totalProjects = projects.length + 7;

  return (
    <section
      className="w-full max-w-full flex flex-col items-center justify-start sm:justify-center select-none overflow-x-hidden"
      aria-label="Ahmed Osama Introduction"
    >
      {/* 1. Hero Image Container (No 3D tilt, no hover cards, clean aura, fluid height) */}
      <div className="relative flex flex-col items-center justify-center shrink-0 mt-0 sm:mt-1">
        {/* Subtle Centered Ambient Aura (safely contained, zero overflow) */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="w-full h-full max-w-[340px] sm:max-w-md rounded-full bg-gradient-to-r from-cyan-400/20 via-transparent to-rose-400/20 blur-3xl pointer-events-none" />
        </div>

        {/* The Hero Portrait: Pure Transparent PNG sitting directly on site background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative h-[clamp(280px,46vh,500px)] w-auto aspect-[896/1200] max-w-[85vw] select-none"
        >
          <Image
            src="/images/hero-portrait.png"
            alt="Ahmed Osama — Software Engineer & Arabic Writer"
            fill
            priority
            sizes="(max-width: 640px) 320px, (max-width: 1024px) 440px, 500px"
            className="object-contain pointer-events-none"
            style={{
              filter: "drop-shadow(0 12px 28px rgba(86,95,161,0.22))",
            }}
          />
        </motion.div>
      </div>

      {/* 2. Title & Role */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="flex flex-col items-center justify-center text-center mt-2 sm:mt-3"
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Ahmed Osama El-Daoushy
        </h1>

        <div className="flex items-center justify-center gap-2 sm:gap-3 mt-1 sm:mt-1.5 text-xs sm:text-sm md:text-base lg:text-lg font-bold text-slate-700">
          <LocaleLink
            href="/portfolio"
            className="text-slate-700 hover:text-cyan-600 transition-colors"
          >
            Software Engineer
          </LocaleLink>
          <span className="text-slate-400 font-normal">|</span>
          <LocaleLink
            href="/blog"
            className="text-slate-700 hover:text-rose-600 transition-colors"
          >
            Literary writer
          </LocaleLink>
        </div>
      </motion.div>

      {/* 3. Social Media Icons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex items-center justify-center gap-4 sm:gap-5 md:gap-6 mt-2 sm:mt-3"
        aria-label="Social Media Links"
      >
        {socialMedia.map((item) => (
          <a
            key={item.alt}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.alt}
            className="transition-all duration-300 hover:scale-125 hover:-translate-y-1 drop-shadow-sm hover:drop-shadow-md"
          >
            <Image
              src={item.imageURL}
              alt={item.alt}
              width={36}
              height={36}
              className="w-8 h-8 sm:w-8.5 sm:h-8.5 md:w-9 md:h-9 object-contain"
            />
          </a>
        ))}
      </motion.div>

      {/* 4. Expressive Stats Numbers directly under Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.25 }}
        className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 md:gap-6 mt-2 sm:mt-3 py-1.5 sm:py-2 md:py-2.5 px-3.5 sm:px-6 md:px-7 rounded-2xl sm:rounded-full bg-white/50 backdrop-blur-md border border-white/70 shadow-sm max-w-[calc(100vw-2rem)]"
      >
        <LocaleLink
          href="/portfolio"
          className="group flex items-center gap-1.5 hover:opacity-80 transition-opacity"
        >
          <span className="text-sm sm:text-base md:text-lg font-black bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
            {totalProjects}+
          </span>
          <span className="text-[11px] sm:text-xs md:text-sm font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">
            Projects
          </span>
        </LocaleLink>

        <span className="w-1 h-1 rounded-full bg-slate-300" />

        <LocaleLink
          href="/tech-blog"
          className="group flex items-center gap-1.5 hover:opacity-80 transition-opacity"
        >
          <span className="text-sm sm:text-base md:text-lg font-black bg-gradient-to-r from-teal-600 to-emerald-700 bg-clip-text text-transparent">
            10
          </span>
          <span className="text-[11px] sm:text-xs md:text-sm font-bold text-slate-700 group-hover:text-teal-600 transition-colors">
            Tech Guides
          </span>
        </LocaleLink>

        <span className="w-1 h-1 rounded-full bg-slate-300" />

        <LocaleLink
          href="/blog"
          className="group flex items-center gap-1.5 hover:opacity-80 transition-opacity"
        >
          <span className="text-sm sm:text-base md:text-lg font-black bg-gradient-to-r from-rose-600 to-red-600 bg-clip-text text-transparent">
            87+
          </span>
          <span className="text-[11px] sm:text-xs md:text-sm font-bold text-slate-700 group-hover:text-rose-600 transition-colors">
            نصوص أدبية
          </span>
        </LocaleLink>

      </motion.div>
    </section>
  );
}

