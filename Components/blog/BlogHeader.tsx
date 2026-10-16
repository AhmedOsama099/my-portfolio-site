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
      {/* Category Pill matching default mode */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#3A4184]/20 shadow-sm text-xs sm:text-sm font-bold text-[#3A4184] mb-3">
        <span className="w-2 h-2 rounded-full bg-[#EE3E54] animate-pulse"></span>
        <span>مساحة الأدب والكتابة العربية</span>
        <span className="text-gray-300">·</span>
        <span className="text-gray-600 font-normal">أحمد أسامة</span>
      </div>

      {/* Main Gradient Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#3A4184] via-[#565FA1] to-[#EE3E54] bg-clip-text text-transparent mb-4 leading-normal sm:leading-relaxed">
        نصوصٌ وخواطِر
      </h1>

      {/* Literary Quote / Subtitle */}
      <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium">
        &laquo;حُبي للكتابةِ جليٌّ واضح، فهي وسيلتي للتصوير وطريقتي للبوح.. قد تلاقيني في طيّات الكلمات والحروف، فسلامٌ عليك إن ألقيت أم لم تُلقِ السلام.&raquo;
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
