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

export interface DesktopNavLinksProps {
  links: NavLinkType[];
}

export interface ExtendedMobileMenuProps extends MobileMenuProps {
  links: NavLinkType[];
}

export type NavLinkProps = {
  link: {
    url: string;
    title: string;
  };
};

export interface SocialMediaLinksProps {
  socialMedia: SocialMediaType[];
  className?: string;
}

export interface MobileMenuContentProps {
  links: NavLinkType[];
  toggleMenu: () => void;
}
