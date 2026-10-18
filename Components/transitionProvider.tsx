"use client";

import { motion } from "framer-motion";
import React, { FC, useState, useEffect, createContext, useContext, useCallback, useRef } from "react";
import Navbar from "./navbar";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { stripLocale } from "@/lib/i18n/config";
import FloatingContactButton from "./contact/FloatingContactButton";

interface TransitionContextType {
  navigateWithTransition: (href: string) => void;
  isTransitioning: boolean;
}

export const TransitionContext = createContext<TransitionContextType>({
  navigateWithTransition: () => {},
  isTransitioning: false,
});

export const usePageTransition = () => useContext(TransitionContext);

const getRouteLabel = (path: string): string => {
  const clean = stripLocale(path).split("?")[0].split("#")[0];
  if (clean === "" || clean === "/") return "home";
  if (clean.startsWith("/about")) return "about";
  if (clean.startsWith("/portfolio")) return "portfolio";
  if (clean.startsWith("/tech-blog")) return "tech blog";
  if (clean.startsWith("/blog")) return "خواطر";
  if (clean.startsWith("/contact")) return "contact";
  if (clean.startsWith("/stats")) return "stats";
  const last = clean.split("/").filter(Boolean).pop() || "home";
  return last.replace(/-/g, " ");
};

const TransitionProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const pathName = usePathname();
  const router = useRouter();

  // Drop the /en|/ar prefix
  const routePath = stripLocale(pathName);
  const isStats = routePath.startsWith("/stats");

  // Transition state
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionLabel, setTransitionLabel] = useState(() => getRouteLabel(routePath));
  const [initialEnterDone, setInitialEnterDone] = useState(false);

  const prevPathRef = useRef(pathName);

  // When pathname changes (either via router.push or browser Back/Forward):
  useEffect(() => {
    if (prevPathRef.current !== pathName) {
      prevPathRef.current = pathName;
      // Update label to current page
      setTransitionLabel(getRouteLabel(stripLocale(pathName)));
      // Give a tiny moment for DOM paint behind the curtain, then lift it
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathName]);

  // Handle client navigation with pre-covering black curtain
  const navigateWithTransition = useCallback(
    (href: string) => {
      const currentClean = stripLocale(pathName).replace(/\/+$/, "") || "/";
      const targetClean = stripLocale(href).replace(/\/+$/, "") || "/";

      // If already on this route, do nothing
      if (currentClean === targetClean) return;

      // Set destination label and activate black curtain overlay
      setTransitionLabel(getRouteLabel(targetClean));
      setIsTransitioning(true);

      // Once curtain covers the screen (300ms), execute the route push
      setTimeout(() => {
        router.push(href);
      }, 300);
    },
    [pathName, router]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialEnterDone(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <TransitionContext.Provider value={{ navigateWithTransition, isTransitioning }}>
      <div
        className={clsx(
          "w-full max-w-full h-screen min-w-56 flex flex-col bg-gradient-to-b from-blue-100 to-red-100",
          isStats ? "overflow-y-auto" : "overflow-hidden"
        )}
      >
        {/* Black Screen Transition Curtains (Applies to all pages including Tech Blog) */}
        {!isStats && (
          <>
            {/* Top Curtain */}
            <motion.div
              className={clsx(
                "fixed inset-x-0 top-0 w-full bg-black rounded-b-[100px] z-[300]",
                isTransitioning ? "pointer-events-auto" : "pointer-events-none"
              )}
              initial={{ height: "100vh" }}
              animate={{
                height: isTransitioning ? "140vh" : "0vh",
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            {/* Destination Name in Center */}
            <motion.div
              className="fixed m-auto inset-0 text-white text-5xl sm:text-7xl md:text-8xl font-black cursor-default z-[310] w-fit h-fit pointer-events-none text-center select-none capitalize"
              initial={{ opacity: 1, scale: 0.95 }}
              animate={{
                opacity: isTransitioning ? 1 : initialEnterDone ? 0 : 0,
                scale: isTransitioning ? 1 : 0.95,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
            >
              {transitionLabel}
            </motion.div>

            {/* Bottom Curtain */}
            <motion.div
              className={clsx(
                "fixed inset-x-0 bottom-0 w-full bg-black rounded-t-[100px] z-[290]",
                isTransitioning ? "pointer-events-auto" : "pointer-events-none"
              )}
              initial={{ height: "140vh" }}
              animate={{
                height: isTransitioning ? "140vh" : "0vh",
              }}
              transition={{
                delay: isTransitioning ? 0 : 0.1,
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </>
        )}

        {!isStats && <Navbar />}
        <div
          className={clsx(
            "w-full flex flex-col",
            isStats ? "h-full" : "flex-1 min-h-0 overflow-hidden"
          )}
        >
          {children}
        </div>
        <FloatingContactButton />
      </div>
    </TransitionContext.Provider>
  );
};

export default TransitionProvider;
