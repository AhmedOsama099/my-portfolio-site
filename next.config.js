/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: [], // Add any external domains you're loading images from
    unoptimized: process.env.NODE_ENV !== 'production',
  },
  // Ensure trailing slashes are handled correctly
  trailingSlash: false,
  basePath: '', // Add your base path if needed
};

module.exports = nextConfig;