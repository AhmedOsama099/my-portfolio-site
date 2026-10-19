"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/tailwind";

interface MotionPageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const MotionPageWrapper = React.forwardRef<HTMLDivElement, MotionPageWrapperProps>(
  ({ children, className }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn("h-full overflow-y-auto custom-scrollbar", className)}
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
        <style jsx global>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 0.5rem;
            background: transparent;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: transparent;
            transition: background-color 0.3s;
          }

          .custom-scrollbar:hover::-webkit-scrollbar-thumb {
            background-color: rgba(155, 155, 155, 0.5);
            border-radius: 4px;
          }

          .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: transparent transparent;
          }

          .custom-scrollbar:hover {
            scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
          }
        `}</style>
        {children}
      </motion.div>
    );
  }
);

MotionPageWrapper.displayName = "MotionPageWrapper";

export default MotionPageWrapper;
