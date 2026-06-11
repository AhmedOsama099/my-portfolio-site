const nextConfig = {
  images: {
    unoptimized: false, // Enable Vercel's optimization
    // Allow our own local SVGs (project featured images) to be served through
    // next/image. Locked down with a sandboxed CSP and attachment disposition.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow all external images
      },
    ],
  },
  // Note: locale routing (/en, /ar) is handled by middleware.ts, not the legacy
  // Pages-Router `i18n` config (unsupported in the App Router).
};

module.exports = nextConfig;
