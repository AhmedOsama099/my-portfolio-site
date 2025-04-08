// Types for navbar components
export interface NavLinkType {
  url: string;
  title: string;
}

export interface SocialMediaType {
  link: string;
  imageURL: string;
  alt: string;
}

export interface MobileMenuProps {
  open: boolean;
  toggleMenu: () => void;
}

export interface MenuButtonProps {
  open: boolean;
  toggleMenu: () => void;
}