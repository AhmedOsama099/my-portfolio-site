import type { MetadataRoute } from "next";
import { LOCALES } from "@/lib/i18n/config";

const siteUrl = "https://ahmedosamadev.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/portfolio",
    "/contact",
    "/blog",
    "/tech-blog",
    "/tech-blog/git/what-is-git",
    "/tech-blog/git/online-offline-git",
    "/tech-blog/ts/excess-type-checking",
    "/tech-blog/ts/index-signature",
    "/tech-blog/ts/structural-type-system",
    // Accessibility section commented out for now.
    // "/tech-blog/accessibility/general-tips",
  ];

  const localizedUrl = (locale: string, route: string) =>
    `${siteUrl}/${locale}${route}`;

  const locales = [...LOCALES];

  return routes.flatMap((route) => {
    return locales.map((locale) => ({
      url: localizedUrl(locale, route),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, localizedUrl(l, route)])
        ),
      },
    }));
  });
}
