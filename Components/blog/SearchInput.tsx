"use client";

import React from "react";
import { motion } from "framer-motion";
import { SearchInputProps } from "@/types/blog";

const SearchInput: React.FC<SearchInputProps> = ({
  searchTerm,
  setSearchTerm,
  filteredCount,
  debouncedSearchTerm,
}) => {
  const handleClearSearch = () => {
    setSearchTerm("");
  };

  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative max-w-md mx-auto">
        {searchTerm && (
          <button
            onClick={handleClearSearch}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 z-10"
            aria-label="Clear search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="ابحث في النصوص..."
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#565FA1] focus:border-transparent shadow-sm text-right pr-4 pl-10"
          dir="rtl"
        />
      </div>

      {/* Search results count */}
      {debouncedSearchTerm.length >= 2 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-2 text-sm text-gray-600 font-arabic"
          dir="rtl"
        >
          تم العثور على {filteredCount} {filteredCount === 1 ? "نص" : "نصوص"}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SearchInput;
