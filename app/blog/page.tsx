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
        .toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase());
      return titleMatch || contentMatch;
    });
  }, [debouncedSearchTerm]);

  // Handle search clear
  const handleClearSearch = () => {
    setSearchTerm("");
  };

  return (
    <MotionPageWrapper>
      <div className="min-h-screen py-12 px-4 sm:px-8 md:px-12 max-w-4xl mx-auto relative z-10">
        {/* Page Header */}
        <BlogHeader />

        {/* Search Input */}
        <SearchInput
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filteredCount={filteredContent.length}
          debouncedSearchTerm={debouncedSearchTerm}
        />

        {/* Literature Content */}
        <LiteratureList
          filteredContent={filteredContent}
          handleClearSearch={handleClearSearch}
        />
      </div>
    </MotionPageWrapper>
  );
};

export default BlogPage;
