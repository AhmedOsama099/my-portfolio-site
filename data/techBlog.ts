import { NavItemsMapperProps, TechNavItemProps } from "@/types/techBlog";
import { TFunction } from "i18next";

const gitNavItems = (
  t: TFunction<"translation", undefined>
): TechNavItemProps[] => [
  {
    id: "what-is-git",
    title: t("tech-blog.git.what-is-git"),
    href: "what-is-git",
  },
  {
    id: "online-offline-git",
    title: t("tech-blog.git.online-offline-git"),
    href: "online-offline-git",
  },
];

const tsNavItems = (
  t: TFunction<"translation", undefined>
): TechNavItemProps[] => [
  {
    id: "structural-type-system",
    title: t("tech-blog.ts.structural-type-system"),
    href: "structural-type-system",
  },
  {
    id: "index-signature",
    title: t("tech-blog.ts.index-signature"),
    href: "index-signature",
  },
  // {
  //   id: "excess-type-checking",
  //   title: t("tech-blog.ts.excess-type-checking"),
  //   href: "excess-type-checking",
  // },
];

export const navItemsMapper = (
  t: TFunction<"translation", undefined>
): NavItemsMapperProps => ({
  git: gitNavItems(t),
  ts: tsNavItems(t),
});

export const logoMap: Record<string, string> = {
  git: "/images/tech-blog/logos/git.svg",
  gitLab: "/images/tech-blog/logos/git-lab.svg",
  freeCodeCamp: "/images/tech-blog/logos/free-code-camp.svg",
  gitScripts: "/images/tech-blog/logos/git-scripts.webp",
  tutorialsPoint: "/images/tech-blog/logos/tutorials-point.svg",
  adabeat: "/images/tech-blog/logos/adabeat.svg",
  gilbertGhost: "/images/tech-blog/logos/gilbert-ghost.png",
  typescript: "/images/tech-blog/logos/ts.svg",
  geeksforgeeks: "/images/tech-blog/logos/geeksforgeeks.svg",
  medium: "/images/tech-blog/logos/medium.svg",
  frontendMasters: "/images/tech-blog/logos/frontend-masters.png",
  blog: "/images/tech-blog/logos/blog.svg",
  typescriptDeepDive: "/images/tech-blog/logos/typescript-deep-dive.png",
};
