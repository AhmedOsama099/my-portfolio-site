"use client";

import React from "react";
import { motion } from "framer-motion";

const BlogHeader: React.FC = () => {
  return (
    <motion.div
      className="mb-10 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      dir="rtl"
    >
      {/* Main Title */}
      <h1 className="font-khawatir text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#3A4184] via-[#565FA1] to-[#EE3E54] bg-clip-text text-transparent mb-3 !leading-relaxed">
        خواطِر
      </h1>

      {/* Literary Quote / Subtitle */}
      <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium">
        قد تلاقيني في طيّات الكلمات والحروف، فسلامٌ عليك إن ألقيت أم لم تُلقِ
        السلام.&raquo;
      </p>

      {/* Tags row */}
      <div className="flex items-center justify-center gap-2 mt-4 text-xs font-semibold text-gray-600">
        <span className="px-3 py-1 rounded-full bg-slate-100/90 border border-slate-200">
          ✍️ ٨٧ نصًا منشورًا
        </span>
        <span className="px-3 py-1 rounded-full bg-slate-100/90 border border-slate-200">
          📖 خواطر وتأملات
        </span>
      </div>
    </motion.div>
  );
};

export default BlogHeader;
