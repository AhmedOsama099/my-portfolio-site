"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { stripLocale } from "@/lib/i18n/config";
import ArticleComments from "./ArticleComments";

const TITLE_MAP: Record<string, string> = {
  "what-is-git": "What is GIT",
  "online-offline-git": "Git Online & Offline Protocols",
  "structural-type-system": "Structural Type System",
  "index-signature": "Index Signatures in TypeScript",
  "ttfb": "TTFB (Time to First Byte)",
  "fcp": "FCP (First Contentful Paint)",
  "lcp": "LCP (Largest Contentful Paint)",
  "cls": "CLS (Cumulative Layout Shift)",
  "inp": "INP (Interaction to Next Paint)",
  "headings": "Accessible Heading Hierarchy",
  "target-size": "Interactive Target Sizing",
};

export default function TechArticleCommentsWrapper() {
  const pathname = usePathname();
  const cleanPath = stripLocale(pathname).replace(/\/+$/, "");

  // Only render on specific article pages, not on the hub index
  const segments = cleanPath.split("/").filter(Boolean);
  if (segments.length < 3) return null; // e.g. ["tech-blog", "git", "what-is-git"]

  const slug = segments[segments.length - 1];
  const title =
    TITLE_MAP[slug] ||
    slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="w-full mt-10">
      <ArticleComments
        articleId={slug}
        articleTitle={title}
        articleType="tech-blog"
        pagePath={cleanPath}
        dir="ltr"
      />
    </div>
  );
}
