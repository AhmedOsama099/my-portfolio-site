import React from "react";
import { motion } from "framer-motion";
import { MenuButtonProps } from "./types";
import { menuAnimations } from "./animations";

const MenuButton: React.FC<MenuButtonProps> = ({ open, toggleMenu }) => (
  <button
    onClick={toggleMenu}
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
