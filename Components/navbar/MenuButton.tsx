import React from "react";
import { motion } from "framer-motion";
import { menuAnimations } from "./animations";
import { MenuButtonProps } from "@/types/navbar";

const MenuButton: React.FC<MenuButtonProps> = ({ open, toggleMenu }) => (
  <button
    type="button"
    onClick={toggleMenu}
    aria-label={open ? "Close menu" : "Open menu"}
    aria-expanded={open}
    className="flex justify-between flex-col w-10 h-8 z-50 relative"
  >
    <motion.div
      variants={menuAnimations.top}
      animate={open ? "opened" : "closed"}
      className="w-10 h-1 bg-black rounded origin-left"
    />
    <motion.div
      variants={menuAnimations.center}
      animate={open ? "opened" : "closed"}
      className="w-10 h-1 bg-black rounded"
    />
    <motion.div
      variants={menuAnimations.bottom}
      animate={open ? "opened" : "closed"}
      className="w-10 h-1 bg-black rounded origin-left"
    />
  </button>
);

export default MenuButton;
