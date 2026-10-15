"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { recordPageView, recordInteraction } from "@/utils/analytics";

/**
 * Headless client component that listens to page navigations and user interactions,
 * silently storing analytics in localStorage without external backend dependencies.
 */
export default function AnalyticsTracker() {
  const pathname = usePathname();
  const lastPathRef = useRef<string>("");

  // Record pageviews on route change
  useEffect(() => {
    if (!pathname || pathname === lastPathRef.current) return;
    lastPathRef.current = pathname;

    // Small delay to let document.title update
    const timeout = setTimeout(() => {
      recordPageView(pathname, document.title);
    }, 200);

    return () => clearTimeout(timeout);
  }, [pathname]);

  // Global listener for common interactions
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Track social media clicks
      const anchor = target.closest("a");
      if (anchor && anchor.href) {
        const href = anchor.href;
        if (href.includes("github.com")) {
          recordInteraction("social_click", "GitHub Profile", href);
        } else if (href.includes("linkedin.com")) {
          recordInteraction("social_click", "LinkedIn Profile", href);
        } else if (href.includes("whatsapp.com") || href.includes("wa.me")) {
          recordInteraction("social_click", "WhatsApp Contact", href);
        } else if (href.includes("facebook.com")) {
          recordInteraction("social_click", "Facebook Profile", href);
        }
      }

      // Track code copy actions
      const copyBtn = target.closest("button");
      if (copyBtn) {
        const text = copyBtn.innerText || copyBtn.getAttribute("aria-label") || "";
        if (text.toLowerCase().includes("copy") || text.includes("نسخ")) {
          recordInteraction("code_copy", "Copy Code", "Code block copied");
        }
      }
    };

    window.addEventListener("click", handleGlobalClick, { passive: true });
    return () => window.removeEventListener("click", handleGlobalClick);
  }, []);

  return null;
}
