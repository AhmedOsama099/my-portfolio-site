const nextConfig = {
  images: {
    unoptimized: false, // Enable Vercel's optimization
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow all external images
      },
    ],
  },
  // Remove output: "export" completely
  // Remove loader configuration
};

module.exports = nextConfig;
