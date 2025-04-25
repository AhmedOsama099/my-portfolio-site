"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PortfolioModeSwitchProps {
  onToggle: (mode: "programmer" | "writer") => void;
  currentMode: "programmer" | "writer";
}

const PortfolioModeSwitch = ({
  onToggle,
  currentMode = "programmer",
}: PortfolioModeSwitchProps) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  // Reset animation periodically to draw attention
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 2000);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleModeToggle = (e: React.MouseEvent) => {
    // Get click position for the loader origin
    const rect = e.currentTarget.getBoundingClientRect();
    setClickPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    // Show loader
    setIsLoading(true);

    // After animation completes, toggle the mode
    setTimeout(() => {
      onToggle(currentMode === "programmer" ? "writer" : "programmer");
      // Hide loader after mode change
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    }, 1000);
  };

  return (
    <>
      {/* Global Loader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center overflow-hidden justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          >
            <motion.div
              className={`absolute rounded-full ${
                currentMode === "programmer" ? "bg-blue-500" : "bg-purple-500"
              }`}
              style={{
                left: clickPosition.x,
                top: clickPosition.y,
              }}
              initial={{ width: 0, height: 0 }}
              animate={{
                width: "300vw",
                height: "300vh",
                x: "-50%",
                y: "-50%",
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="w-16 h-16 relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 left-0 w-full h-full border-4 border-t-purple-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mode Switch Button */}
      <motion.div
        onClick={handleModeToggle}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-3xl shadow-lg z-50 flex items-center gap-2 cursor-pointer border-2 border-white"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={
          isAnimating
            ? {
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0],
                transition: {
                  duration: 1,
                  repeat: 1,
                  repeatType: "reverse",
                },
              }
            : {}
        }
      >
        <div className="bg-white rounded-full p-1.5 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${
              currentMode === "programmer" ? "text-purple-500" : "text-blue-500"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                currentMode === "programmer"
                  ? "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  : "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              }
            />
          </svg>
        </div>
        <span className="text-sm md:text-base pr-1">
          {currentMode === "programmer" ? "Writer Mode" : "Programmer Mode"}
        </span>
      </motion.div>
    </>
  );
};

export default PortfolioModeSwitch;
