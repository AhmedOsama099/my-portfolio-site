"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import LocaleLink from "@/Components/LocaleLink";
import { motion, AnimatePresence } from "framer-motion";
import { menuAnimations } from "./animations";
import { MobileMenuContentProps } from "@/types/navbar";

const MobileMenuContent: React.FC<MobileMenuContentProps> = ({
  links,
  toggleMenu,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        variants={menuAnimations.list}
        initial="closed"
        animate="opened"
        exit="closed"
        className="fixed inset-0 bg-black text-white flex items-center justify-center gap-7 text-2xl sm:text-3xl flex-col z-[250] p-6 select-none"
      >
        {/* Close button in top-right */}
        <button
          onClick={toggleMenu}
          aria-label="Close menu"
          className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Nav links with high contrast on black background */}
        <div className="flex flex-col items-center gap-4">
          {links.map((link) => (
            <motion.div variants={menuAnimations.listItem} key={link.title}>
              <LocaleLink
                onClick={toggleMenu}
                href={link.url}
                className="block py-2.5 px-6 rounded-2xl hover:bg-white/10 text-white hover:text-[#EE3E54] transition-all font-black tracking-tight text-center text-2xl sm:text-3xl"
              >
                {link.title}
              </LocaleLink>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export default MobileMenuContent;
