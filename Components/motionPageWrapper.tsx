"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";

const MotionPageWrapper: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <motion.div
      className="h-full"
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
