import { ReactNode } from "react";

// General

interface ITitleClassName {
  title: string;
  className?: string;
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
  activeIndex?: number;
  isMobile: boolean;
  handleChangeNavState: (state: boolean) => void;
}

export interface TechDocsLayoutProps {
  children: React.ReactNode;
}

export type TechnologyLinkItemProps = {
  pageURL: string;
  imageURL: string;
  alt: string;
};

export type PageHeaderProps = IChildrenClassName;

export type HeaderTitleProps = ITitleClassName;

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

export type SectionTitleProps = ITitleClassName;

export type SectionWrapperProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

export type ContentSimpleParagraphProps = IChildrenClassName;
