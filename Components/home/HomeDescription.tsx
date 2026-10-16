"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const HomeDescription = () => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 lg:gap-7">
      {/* Role / Identity Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-wrap items-center gap-2"
      >
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-indigo-200/60 shadow-sm text-xs sm:text-sm font-bold text-[#3A4184]">
          <span className="w-2 h-2 rounded-full bg-[#EE3E54]"></span>
          <span>Ahmed Osama</span>
          <span className="text-gray-300">|</span>
          <span className="text-gray-600 font-medium">Software Engineer & Author</span>
        </span>
      </motion.div>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl xl:text-[48px] font-extrabold lg:text-start text-center tracking-tight leading-[1.2] text-gray-900"
      >
        Transforming Ideas into{" "}
        <span className="bg-gradient-to-r from-[#3A4184] via-[#565FA1] to-[#EE3E54] bg-clip-text text-transparent">
          Scalable Interfaces
        </span>
        , and Thoughts into{" "}
        <span className="bg-gradient-to-r from-[#EE3E54] via-rose-600 to-amber-700 bg-clip-text text-transparent">
          Timeless Prose
        </span>
        .
      </motion.h1>

      {/* Narrative Description */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-base sm:text-lg md:text-xl text-gray-700 lg:text-start text-center leading-relaxed"
      >
        Senior Software Engineer specializing in modern web architecture, frontend performance, and full-stack systems — paired with a profound dedication to Arabic literature, reflective prose, and creative writing. Two distinct expressions of the same creative mind.
      </motion.p>

      {/* Call to Actions (Primary Code, Primary Writing, Secondary Contact) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row flex-wrap items-center gap-3 pt-2 w-full"
      >
        {/* Explore Portfolio */}
        <Link
          href="/portfolio"
          className="w-full sm:w-auto px-6 py-3.5 text-base font-bold rounded-xl bg-[#3A4184] hover:bg-[#2B3168] text-white text-center shadow-lg shadow-indigo-950/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <span>Explore Projects</span>
        </Link>

        {/* Read Arabic Writings */}
        <Link
          href="/blog"
          className="w-full sm:w-auto px-6 py-3.5 text-base font-bold rounded-xl bg-[#EE3E54] hover:bg-[#D01C32] text-white text-center shadow-lg shadow-rose-950/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4 text-amber-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
          <span>Arabic Writings</span>
        </Link>

        {/* Tech Blog */}
        <Link
          href="/tech-blog"
          className="w-full sm:w-auto px-5 py-3.5 text-base font-semibold rounded-xl bg-white/90 hover:bg-white text-[#3A4184] border-2 border-[#3A4184]/20 hover:border-[#3A4184] text-center shadow-sm transition-all duration-300 hover:-translate-y-0.5"
        >
          Tech Blog
        </Link>

        {/* Contact */}
        <Link
          href="/contact"
          className="w-full sm:w-auto px-5 py-3.5 text-base font-semibold rounded-xl text-gray-700 hover:text-gray-900 hover:bg-slate-100 text-center transition-all duration-300"
        >
          Contact Me →
        </Link>
      </motion.div>
    </div>
  );
};

export default HomeDescription;
