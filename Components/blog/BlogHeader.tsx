"use client";

import React from "react";
import { motion } from "framer-motion";

const BlogHeader: React.FC = () => {
  return (
    <motion.div
      className="mb-8 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#565FA1] to-slate-300 bg-clip-text text-transparent mb-6 md:leading-[90px] leading-[70px]">
        نصوص
      </h1>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto">
        قد تلاقيني في طيّات الكلمات والحروف، فسلامٌ عليك إن ألقيت أم لم تلقِ
        السلام.
      </p>
    </motion.div>
  );
};

export default BlogHeader;
