import type { MetadataRoute } from "next";

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
    "/tech-blog/accessibility/general-tips",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
