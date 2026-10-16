import type { MetadataRoute } from "next";
import { LOCALES } from "@/lib/i18n/config";

const siteUrl = "https://ahmedosamadev.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  // Main canonical site pages (default mode)
  const mainRoutes = [
    "",
    "/about",
    "/portfolio",
    "/contact",
    "/blog",
  ];

  // Tech blog routes (bilingual: English & Arabic)
  const techBlogRoutes = [
    "/tech-blog",
    "/tech-blog/git/what-is-git",
    "/tech-blog/git/online-offline-git",
    "/tech-blog/ts/index-signature",
    "/tech-blog/ts/structural-type-system",
    "/tech-blog/performance/ttfb",
    "/tech-blog/performance/fcp",
    "/tech-blog/performance/lcp",
    "/tech-blog/performance/cls",
    "/tech-blog/performance/inp",
  ];

  const mainEntries: MetadataRoute.Sitemap = mainRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const techBlogEntries: MetadataRoute.Sitemap = techBlogRoutes.flatMap((route) => {
    return (LOCALES as readonly string[]).map((locale) => ({
      url: `${siteUrl}/${locale}${route}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [l, `${siteUrl}/${l}${route}`])
        ),
      },
    }));
  });

  return [...mainEntries, ...techBlogEntries];
}
