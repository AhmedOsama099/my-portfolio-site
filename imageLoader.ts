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
  return `https://ahmed-osama-portfolio-nine.vercel.app/${src}?w=${width}&q=${
    quality || 75
  }`;
}
