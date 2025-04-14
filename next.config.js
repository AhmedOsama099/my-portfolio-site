/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true, // Set to true to ensure images work on Vercel
    domains: ["localhost", "your-vercel-app-name.vercel.app"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  // Ensure trailing slashes are handled correctly
  trailingSlash: false,
};

module.exports = nextConfig;
