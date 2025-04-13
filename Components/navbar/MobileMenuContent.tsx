"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { menuAnimations } from "./animations";
import { MobileMenuContentProps } from "@/types/navbar";

const MobileMenuContent: React.FC<MobileMenuContentProps> = ({ links }) => (
  <motion.div
    variants={menuAnimations.list}
    initial="closed"
    animate="opened"
    className="absolute bg-black text-white flex items-center justify-center gap-8 text-4xl h-screen w-screen flex-col top-0 start-0 z-40"
  >
    {links.map((link) => (
      <motion.div variants={menuAnimations.listItem} key={link.title}>
        <Link href={link.url}>{link.title}</Link>
      </motion.div>
    ))}
  </motion.div>
);

export default MobileMenuContent;
