import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false, // Enable Vercel's optimization
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow all external images
      },
    ],
  },
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
  },
};

export default nextConfig;
