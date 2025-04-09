"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { FC } from "react";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";

const TransitionProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen overflow-y-auto bg-gradient-to-b from-blue-100 to-red-100 min-w-56"
      >
        <motion.div
          className="w-screen h-screen fixed bg-black rounded-b-[100px] z-40"
          initial={{ height: "100vh" }}
          animate={{
            height: "0vh",
          }}
          exit={{
            height: "140vh",
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        />

        <motion.div
          className="w-screen h-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
          initial={{
            height: "140vh",
          }}
          animate={{
            height: "0vh",
            transition: {
              delay: 0.3,
              duration: 0.3,
            },
          }}
        />

        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-96px)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
