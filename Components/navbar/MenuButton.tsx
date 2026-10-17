"use client";

import React from "react";
import { motion } from "framer-motion";
import { MenuButtonProps } from "@/types/navbar";
import { usePathname } from "next/navigation";
import { stripLocale } from "@/lib/i18n/config";
import clsx from "clsx";

const MenuButton: React.FC<MenuButtonProps> = ({ open, toggleMenu }) => {
  const pathname = usePathname();
  const routePath = stripLocale(pathname);
  const isArticlePage =
    routePath.startsWith("/tech-blog") || routePath.startsWith("/blog");

  return (
    <button
      type="button"
      onClick={toggleMenu}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className={clsx(
        "group relative w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none",
        isArticlePage
          ? "bg-transparent border border-transparent shadow-none"
          : "bg-white/85 backdrop-blur-xl border border-white/90 shadow-md shadow-indigo-950/10 hover:shadow-lg hover:scale-105 active:scale-95"
      )}
    >
      {/* Subtle gradient rim glow on hover */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/20 via-transparent to-rose-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Creative dynamic icon */}
      <div className="relative w-5 h-4 flex flex-col justify-between items-center pointer-events-none">
        {/* Top sleek bar */}
        <motion.span
          animate={
            open
              ? { rotate: 45, y: 7, width: 20 }
              : { rotate: 0, y: 0, width: 18 }
          }
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="h-[2px] bg-slate-900 rounded-full block origin-center transition-colors group-hover:bg-cyan-600"
        />

        {/* Middle asymmetric creative dual-gradient bar */}
        <motion.span
          animate={
            open
              ? { opacity: 0, scaleX: 0 }
              : { opacity: 1, scaleX: 1, width: 12 }
          }
          transition={{ duration: 0.2 }}
          className="h-[2px] bg-gradient-to-r from-cyan-500 via-indigo-500 to-rose-500 rounded-full block self-center"
        />

        {/* Bottom sleek bar */}
        <motion.span
          animate={
            open
              ? { rotate: -45, y: -7, width: 20 }
              : { rotate: 0, y: 0, width: 18 }
          }
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="h-[2px] bg-slate-900 rounded-full block origin-center transition-colors group-hover:bg-rose-600"
        />
      </div>
    </button>
  );
};

export default MenuButton;
