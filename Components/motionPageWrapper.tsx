"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const MotionPageWrapper: FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <motion.div
      className={clsx("h-full pt-8", className)}
      initial={{
        y: "-200vh",
      }}
      animate={{
        y: "0",
      }}
      transition={{
        duration: 1,
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionPageWrapper;
