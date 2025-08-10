import { ReactNode } from "react";

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
