/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true, // Set to true to ensure images work on Vercel
  },
  // Ensure trailing slashes are handled correctly
  trailingSlash: false,
};

module.exports = nextConfig;
