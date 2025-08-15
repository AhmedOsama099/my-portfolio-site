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

export const navItemsMapper = (
  t: TFunction<"translation", undefined>
): NavItemsMapperProps => ({
  git: gitNavItems(t),
});

export const logoMap: Record<string, string> = {
  git: "/images/tech-blog/logos/git.svg",
  gitLab: "/images/tech-blog/logos/git-lab.svg",
  freeCodeCamp: "/images/tech-blog/logos/free-code-camp.svg",
};
