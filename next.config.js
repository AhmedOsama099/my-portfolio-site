/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Set to true to ensure images work on Vercel
    domains: ["localhost", "ahmed-osama-portfolio-nine.vercel.app"],
    loader: "custom",
    loaderFile: "./imageLoader.ts",
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
