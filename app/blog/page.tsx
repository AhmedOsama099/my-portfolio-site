"use client";

import React, { useState, useEffect, useMemo } from "react";
import MotionPageWrapper from "@/Components/motionPageWrapper";
import { literatureContent } from "@/data/blog";
import BlogHeader from "@/Components/blog/BlogHeader";
import SearchInput from "@/Components/blog/SearchInput";
import LiteratureList from "@/Components/blog/LiteratureList";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  // Debounce search term
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  // Filter content based on search term
  const filteredContent = useMemo(() => {
    if (debouncedSearchTerm.length < 2) return literatureContent;

    return literatureContent.filter((item) => {
      const titleMatch = item.title
        .toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase());
      const contentMatch = item.content
        ? item.content.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        : "";
      return titleMatch || contentMatch;
    });
  }, [debouncedSearchTerm]);

  console.log(filteredContent.filter((ele) => ele.title).length);

  // Handle search clear
  const handleClearSearch = () => {
    setSearchTerm("");
  };

  const filteredContentLength = useMemo(
    () => filteredContent.filter((item) => item.isShow).length,
    [filteredContent],
  );

  return (
    <MotionPageWrapper>
      <div className="min-h-screen py-12 px-4 sm:px-8 md:px-12 max-w-4xl mx-auto relative z-10">
        {/* Page Header */}
        <BlogHeader />

        {/* Search Input with attached counter badge */}
        <div className="relative max-w-md mx-auto mb-8">
          <SearchInput
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filteredCount={filteredContentLength}
            debouncedSearchTerm={debouncedSearchTerm}
          />
          <div className="absolute top-[95%] -z-10 right-0 inline-flex items-center bg-[#565FA1] px-2 py-1 shadow-sm border border-[#565FA1]/30 border-t-transparent rounded-l-lg rounded-br-lg">
            <span className="text-white font-semibold mr-1 text-xs">عدد</span>

            <span className="text-white font-bold  py-0.5 rounded-full min-w-[1.5rem] text-center text-xs">
              {filteredContentLength}
            </span>
            <span className="text-white font-semibold mr-1 text-xs">
              من النصوص
            </span>
          </div>
        </div>

        {/* Literature Content */}
        <LiteratureList
          filteredContent={filteredContent as any}
          handleClearSearch={handleClearSearch}
        />
      </div>
    </MotionPageWrapper>
  );
};

export default BlogPage;
