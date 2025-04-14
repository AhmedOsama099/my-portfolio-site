"use client";

export default function myImageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  // Check if src already contains a domain
  if (src.startsWith("http")) {
    return src;
  }

  // Remove leading slash if present
  const cleanSrc = src.startsWith("/") ? src.slice(1) : src;

  // Return the full URL with width and quality parameters
  return `https://ahmed-osama-portfolio-nine.vercel.app/${cleanSrc}?w=${width}&q=${
    quality || 75
  }`;
}
