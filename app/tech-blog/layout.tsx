import React from "react";
import type { Metadata } from "next";
import { TechAuthProvider } from "@/Components/techBlog/TechAuthContext";

export const metadata: Metadata = {
  title: "Engineering Tech Blog — Software Architecture, Web Performance & Systems",
  description:
    "In-depth technical articles, architecture deep dives, Web Performance (Core Web Vitals), TypeScript typing systems, Git internals, and Web Accessibility by Ahmed Osama.",
  alternates: {
    canonical: "https://ahmedosamadev.vercel.app/tech-blog",
  },
  openGraph: {
    type: "website",
    url: "https://ahmedosamadev.vercel.app/tech-blog",
    title: "Engineering Tech Blog — Software Architecture, Web Performance & Systems",
    description:
      "In-depth technical articles, architecture deep dives, Web Performance (Core Web Vitals), TypeScript typing systems, Git internals, and Web Accessibility by Ahmed Osama.",
    siteName: "Ahmed Osama Portfolio",
    images: [
      {
        url: "https://ahmedosamadev.vercel.app/images/tech-blog/performance/ttfb-header.jpg",
        secureUrl: "https://ahmedosamadev.vercel.app/images/tech-blog/performance/ttfb-header.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Ahmed Osama Tech Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Tech Blog — Software Architecture, Web Performance & Systems",
    description:
      "In-depth technical articles, architecture deep dives, Web Performance (Core Web Vitals), TypeScript typing systems, Git internals, and Web Accessibility by Ahmed Osama.",
    images: ["https://ahmedosamadev.vercel.app/images/tech-blog/performance/ttfb-header.jpg"],
  },
};

export default function TechBlogRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TechAuthProvider>{children}</TechAuthProvider>;
}
