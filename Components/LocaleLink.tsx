"use client";

import Link from "next/link";
import React, { ComponentProps } from "react";
import { usePageTransition } from "./transitionProvider";

type LocaleLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

/**
 * Link for site navigation with smooth pre-navigation curtain transition.
 * Catches internal navigation so the black curtain drops BEFORE the route changes,
 * preventing any flash or partial rendering of the destination page.
 */
export default function LocaleLink({ href, onClick, ...props }: LocaleLinkProps) {
  const { navigateWithTransition } = usePageTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    // Allow new tab actions
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    // Pass external or hash links to default behavior
    if (
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("//") ||
      href.startsWith("#") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:")
    ) {
      return;
    }

    e.preventDefault();
    navigateWithTransition(href);
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
