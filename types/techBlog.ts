import { logoMap } from "@/data/techBlog";
import { ReactNode } from "react";

// General

interface IChildren {
  children?: ReactNode;
}

interface IChildrenClassName {
  children: ReactNode;
  className?: string;
}

// Other

export type ToggleButtonProps = {
  isNavOpen: boolean;
  isMobile: boolean;
  handleToggleNav: () => void;
};

export type MobileOverlayProps = {
  handleToggleNav: () => void;
};

export type ContentWrapperProps = {
  children: ReactNode;
  isNavOpen: boolean;
  isMobile: boolean;
};

export type SideNavProps = {
  isNavOpen: boolean;
  isMobile: boolean;
  handleToggleNav: () => void;
  handleChangeNavState: (state: boolean) => void;
};

export interface SectionProps {
  title: string;
  items: Array<{ id: string; href: string; title: string }>;
  color: string;
  isMobile: boolean;
  handleChangeNavState: (state: boolean) => void;
}

export type TechDocsLayoutProps = IChildren;

export type TechnologyLinkItemProps = {
  pageURL: string;
  imageURL: string;
  alt: string;
};

export type PageHeaderProps = IChildrenClassName;

export type HeaderTitleProps = IChildrenClassName;

export type HeaderDescriptionProps = {
  description: string;
  className?: string;
};

export type TechDocsReferenceProps = {
  children: ReactNode;
  mainContainerClassName?: string;
  textContainerClassName?: string;
  textClassName?: string;
};

export type SectionTitleProps = IChildrenClassName;

export type SectionWrapperProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

export type ContentSimpleParagraphProps = IChildrenClassName;

export interface DocsImageProps {
  src: string;
  className?: string;
}

export type SectionListProps = {
  children: ReactNode[];
  listContainerClassName?: string;
  listItemClassName?: string;
};

export type Resource = {
  name: keyof typeof logoMap;
  url: string;
};

export interface ResourcesProps {
  items: Resource[];
}
