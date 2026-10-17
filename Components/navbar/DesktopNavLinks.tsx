"use client";

import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import NavLink from "./navLink";
import { DesktopNavLinksProps } from "@/types/navbar";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const DesktopNavLinks: React.FC<DesktopNavLinksProps> = ({ links }) => {
  const leftLinks = [
    links.find((l) => l.url === "/about") || { url: "/about", title: "About" },
    links.find((l) => l.url === "/portfolio") || { url: "/portfolio", title: "Portfolio" },
  ];
  const centerLink =
    links.find((l) => l.url === "/") || { url: "/", title: "Home" };
  const rightLinks = [
    links.find((l) => l.url === "/tech-blog") || { url: "/tech-blog", title: "Tech Blog" },
    links.find((l) => l.url === "/blog") || { url: "/blog", title: "Arabic Writings" },
  ];

  const leftInnerRef = useRef<HTMLDivElement>(null);
  const rightInnerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  const [wingWidth, setWingWidth] = useState<number>(0);

  // Measure exact widths and balance left & right wings equally
  useIsomorphicLayoutEffect(() => {
    const measureAndBalance = () => {
      const leftW = leftInnerRef.current?.getBoundingClientRect().width || 0;
      const rightW = rightInnerRef.current?.getBoundingClientRect().width || 0;
      const maxW = Math.ceil(Math.max(leftW, rightW));

      if (typeof window !== "undefined") {
        const centerW = centerRef.current?.getBoundingClientRect().width || 75;
        // Ensure wings do not force navbar beyond viewport width
        const safeMax = Math.max(
          0,
          Math.floor((window.innerWidth - centerW - 48) / 2)
        );
        const finalWidth = Math.min(maxW, safeMax);
        setWingWidth(finalWidth || maxW);
      } else {
        setWingWidth(maxW);
      }
    };

    measureAndBalance();
    const timer = setTimeout(measureAndBalance, 50);

    window.addEventListener("resize", measureAndBalance);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", measureAndBalance);
    };
  }, [links]);

  return (
    <nav
      className="hidden min-[680px]:inline-flex items-center justify-center rounded-full text-xs sm:text-sm xl:text-base whitespace-nowrap flex-nowrap transition-all duration-300 bg-white/80 backdrop-blur-xl border border-white/80 shadow-md shadow-indigo-950/5 px-3 sm:px-4 py-1.5 sm:py-2 select-none"
    >
      {/* Left Wing: About & Portfolio (aligned towards center Home) */}
      <div
        style={{ width: wingWidth ? `${wingWidth}px` : undefined }}
        className="flex items-center justify-end transition-[width] duration-300 min-w-0"
      >
        <div
          ref={leftInnerRef}
          className="inline-flex items-center justify-end gap-1 sm:gap-1.5 xl:gap-2 shrink-0"
        >
          {leftLinks.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </div>
      </div>

      {/* Center Anchor: Home (always centered to navbar and page) */}
      <div
        ref={centerRef}
        className="shrink-0 px-1 sm:px-1.5 flex items-center justify-center"
      >
        <NavLink link={centerLink} key={centerLink.title} />
      </div>

      {/* Right Wing: Tech Blog & Arabic Writings (aligned towards center Home) */}
      <div
        style={{ width: wingWidth ? `${wingWidth}px` : undefined }}
        className="flex items-center justify-start transition-[width] duration-300 min-w-0"
      >
        <div
          ref={rightInnerRef}
          className="inline-flex items-center justify-start gap-1 sm:gap-1.5 xl:gap-2 shrink-0"
        >
          {rightLinks.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavLinks;
