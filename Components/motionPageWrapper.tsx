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
      className={clsx("h-full overflow-y-auto  custom-scrollbar", className)}
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
};

export default MotionPageWrapper;
