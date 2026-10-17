"use client";

import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import NavLink from "./navLink";
import { DesktopNavLinksProps } from "@/types/navbar";
import { usePathname } from "next/navigation";
import { stripLocale } from "@/lib/i18n/config";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const DesktopNavLinks: React.FC<DesktopNavLinksProps> = ({ links }) => {
  const pathname = usePathname();
  const currentPath = stripLocale(pathname);

  // Determine active link index
  let activeIndex = links.findIndex(
    (link) =>
      currentPath === link.url ||
      (link.url !== "/" && currentPath.startsWith(link.url))
  );
  if (activeIndex === -1) activeIndex = 0;

  const leftLinks = links.slice(0, activeIndex);
  const activeLink = links[activeIndex];
  const rightLinks = links.slice(activeIndex + 1);

  const leftInnerRef = useRef<HTMLDivElement>(null);
  const rightInnerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  // Initial estimate to avoid layout shift
  const maxCount = Math.max(leftLinks.length, rightLinks.length);
  const [wingWidth, setWingWidth] = useState<number>(() => maxCount * 80);

  // Measure exact widths and balance left & right wings equally
  useIsomorphicLayoutEffect(() => {
    const measureAndBalance = () => {
      const leftW = leftInnerRef.current?.getBoundingClientRect().width || 0;
      const rightW = rightInnerRef.current?.getBoundingClientRect().width || 0;
      const maxW = Math.ceil(Math.max(leftW, rightW));

      if (typeof window !== "undefined") {
        const centerW = centerRef.current?.getBoundingClientRect().width || 80;
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

    // Initial measure
    measureAndBalance();

    // Re-measure after slight tick to ensure fonts/DOM metrics are ready
    const timer = setTimeout(measureAndBalance, 50);

    window.addEventListener("resize", measureAndBalance);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", measureAndBalance);
    };
  }, [pathname, activeIndex, links]);

  return (
    <nav
      className="hidden min-[680px]:inline-flex items-center justify-center rounded-full text-xs sm:text-sm xl:text-base whitespace-nowrap flex-nowrap transition-all duration-300 bg-white/80 backdrop-blur-xl border border-white/80 shadow-md shadow-indigo-950/5 px-3 sm:px-4 py-1.5 sm:py-2 select-none"
    >
      {/* Left Wing (Links before Active Page) - Aligned towards center */}
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

      {/* Center Active Page - Exactly at 50% Center of Navbar and Page */}
      <div
        ref={centerRef}
        className="shrink-0 px-1 sm:px-1.5 flex items-center justify-center"
      >
        {activeLink && <NavLink link={activeLink} key={activeLink.title} />}
      </div>

      {/* Right Wing (Links after Active Page) - Aligned towards center */}
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
