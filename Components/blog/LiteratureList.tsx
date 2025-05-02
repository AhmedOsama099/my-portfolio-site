"use client";

import React from "react";
import { motion } from "framer-motion";
import LiteratureItem from "./LiteratureItem";
import { LiteratureListProps } from "@/types/blog";

const LiteratureList: React.FC<LiteratureListProps> = ({
  filteredContent,
  handleClearSearch,
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      {filteredContent.length > 0 ? (
        <>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-12"
          >
            {filteredContent.map((piece, key) => (
              <motion.div key={key} variants={item}>
                <div className="text-sm text-gray-500 mb-2 text-right">
                  {piece.date}
                </div>
                <LiteratureItem piece={piece} />
              </motion.div>
            ))}
          </motion.div>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
          dir="rtl"
        >
          <p className="text-xl text-gray-600 mb-4">
            لم يتم العثور على نصوص مطابقة لبحثك.
          </p>

          <button
            onClick={handleClearSearch}
            className="px-4 py-2 bg-[#565FA1] text-white rounded-md hover:bg-[#4A5390] transition-colors"
          >
            مسح البحث
          </button>
        </motion.div>
      )}
    </>
  );
};

export default LiteratureList;
