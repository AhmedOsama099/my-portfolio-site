"use client";

import React, { useState, useEffect } from "react";
import LocaleLink from "@/Components/LocaleLink";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { stripLocale } from "@/lib/i18n/config";

export default function FloatingContactButton() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  const cleanPath = pathname ? stripLocale(pathname) : "";
  const isAboutPage = cleanPath.startsWith("/about");
  const isContactPage = cleanPath.startsWith("/contact");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || isAboutPage || isContactPage) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex items-center gap-3"
      style={{ position: "fixed", bottom: "1.5rem", right: "1.5rem" }}
    >
      <LocaleLink
        href="/contact"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Contact Ahmed Osama"
        className="group relative flex items-center gap-3 p-3.5 sm:p-4 rounded-full bg-gradient-to-tr from-[#565FA1] via-[#636dbb] to-[#EE3E54] hover:from-[#4A5396] hover:to-[#E02D43] text-white shadow-xl shadow-[#565FA1]/35 hover:shadow-2xl hover:shadow-[#EE3E54]/45 border border-white/40 transition-all duration-300 hover:scale-110 active:scale-95"
      >

        {/* Message / Chat Icon */}
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:scale-110"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>

        {/* Expandable Label on Hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2 }}
              className="hidden sm:inline-block font-bold text-sm whitespace-nowrap overflow-hidden pr-1"
            >
              Contact Me
            </motion.span>
          )}
        </AnimatePresence>

        {/* Subtle Ping Wave Ring */}
        <span className="absolute inset-0 rounded-full border border-white/30 pointer-events-none animate-pulse" />
      </LocaleLink>
    </motion.div>,
    document.body
  );
}
