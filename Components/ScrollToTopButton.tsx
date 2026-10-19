"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { stripLocale } from "@/lib/i18n/config";
import { useAppTranslation } from "@/hooks/useAppTranslation";

export default function ScrollToTopButton() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  const { currentLanguage, isLTR } = useAppTranslation();

  const isArabic = currentLanguage === "ar" || !isLTR;

  // Determine whether current route is an Article (Tech Blog) or خواطر (Literature Blog)
  const cleanPath = pathname ? stripLocale(pathname) : "";
  const isArticle = cleanPath.startsWith("/tech-blog");
  const isLiterature = cleanPath.startsWith("/blog");
  const isAllowedPage = isArticle || isLiterature;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Listen to scroll events across window and all overflow containers
  useEffect(() => {
    if (!isAllowedPage) {
      setIsVisible(false);
      return;
    }

    const checkScroll = () => {
      // 1. Check window / document scroll
      const winScroll =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      if (winScroll > 220) {
        setIsVisible(true);
        return;
      }

      // 2. Check inner overflow-y-auto containers (e.g. MotionPageWrapper)
      const scrollContainers = document.querySelectorAll<HTMLElement>(
        ".overflow-y-auto, [class*='overflow-y-auto'], .custom-scrollbar"
      );
      let maxScroll = 0;
      scrollContainers.forEach((el) => {
        if (el.scrollTop > maxScroll) {
          maxScroll = el.scrollTop;
        }
      });

      setIsVisible(maxScroll > 220);
    };

    // Run check once on path change
    checkScroll();

    // Use capture phase to intercept scroll from any descendant container
    window.addEventListener("scroll", checkScroll, {
      capture: true,
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", checkScroll, { capture: true });
    };
  }, [pathname, isAllowedPage]);

  const handleScrollToTop = () => {
    // Smoothly scroll window and document
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    document.body.scrollTo({ top: 0, behavior: "smooth" });

    // Smoothly scroll any active overflow container
    const scrollContainers = document.querySelectorAll<HTMLElement>(
      ".overflow-y-auto, [class*='overflow-y-auto'], .custom-scrollbar"
    );
    scrollContainers.forEach((el) => {
      if (el.scrollTop > 0) {
        el.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  };

  if (!mounted || !isAllowedPage) return null;

  return createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed z-50 flex items-center justify-center"
          style={{
            position: "fixed",
            // Positioned right above the FloatingContactButton with a clean 12px gap
            bottom:
              "max(5.75rem, calc(5.25rem + env(safe-area-inset-bottom, 0px)))",
            right: "max(1.5rem, calc(1rem + env(safe-area-inset-right, 0px)))",
          }}
        >
          <div className="relative flex items-center justify-center">
            {/* Tooltip on hover */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, x: isArabic ? -8 : 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isArabic ? -8 : 8 }}
                  transition={{ duration: 0.15 }}
                  className="hidden sm:block absolute end-full me-3 px-3 py-1.5 rounded-xl bg-slate-900/90 dark:bg-slate-800/95 text-white text-xs font-semibold whitespace-nowrap shadow-xl border border-white/10 backdrop-blur-md pointer-events-none"
                  dir={isArabic ? "rtl" : "ltr"}
                >
                  {isArabic ? "إلى أعلى الصفحة" : "Scroll to top"}
                  {/* Small triangular arrow */}
                  <span
                    className="absolute top-1/2 -translate-y-1/2 start-full border-4 border-transparent border-s-slate-900/90 dark:border-s-slate-800/95"
                    aria-hidden="true"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Scroll Button */}
            <button
              type="button"
              onClick={handleScrollToTop}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              aria-label={
                isArabic ? "العودة إلى أعلى الصفحة" : "Scroll back to top"
              }
              className="group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-white/95 dark:bg-slate-900/95 text-slate-700 dark:text-slate-200 hover:text-white hover:bg-gradient-to-tr hover:from-[#565FA1] hover:to-[#EE3E54] border border-slate-200/90 dark:border-slate-800/90 shadow-xl shadow-slate-900/10 dark:shadow-black/40 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
            >
              {/* Upward Arrow Icon */}
              <svg
                className="w-5 h-5 sm:w-5.5 sm:h-5.5 transition-transform duration-300 group-hover:-translate-y-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.4}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>

              {/* Subtle hover pulse ring */}
              <span className="absolute inset-0 rounded-full border border-indigo-400/30 dark:border-indigo-500/20 pointer-events-none group-hover:animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
