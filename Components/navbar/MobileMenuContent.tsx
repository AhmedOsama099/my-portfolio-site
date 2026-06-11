"use client";

import React from "react";
import LocaleLink from "@/Components/LocaleLink";
import { motion } from "framer-motion";
import { menuAnimations } from "./animations";
import { MobileMenuContentProps } from "@/types/navbar";

const MobileMenuContent: React.FC<MobileMenuContentProps> = ({
  links,
  toggleMenu,
}) => (
  <motion.div
    variants={menuAnimations.list}
    initial="closed"
    animate="opened"
    className="absolute bg-black text-white flex items-center justify-center gap-8 text-4xl h-screen w-screen flex-col top-0 start-0 z-40"
  >
    {links.map((link) => (
      <motion.div variants={menuAnimations.listItem} key={link.title}>
        <LocaleLink onClick={toggleMenu} href={link.url}>
          {link.title}
        </LocaleLink>
      </motion.div>
    ))}
  </motion.div>
);

export default MobileMenuContent;
