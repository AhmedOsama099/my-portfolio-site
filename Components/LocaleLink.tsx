"use client";

import Link from "next/link";
import { ComponentProps } from "react";
import { useTheme } from "@/context/ThemeContext";
import { withLocale } from "@/lib/i18n/config";

type LocaleLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

/**
 * Link for the MAIN site navigation. It prefixes internal hrefs with the
 * locale of the current Programmer/Writer mode (programmer -> /en, writer ->
 * /ar) so the persona's language stays consistent while navigating. External
 * and hash links pass through unchanged.
 *
 * For locale that should follow the URL instead of the mode (e.g. tech-blog
 * article navigation), use `useLocalizedHref` directly.
 */
export default function LocaleLink({ href, ...props }: LocaleLinkProps) {
  const { isProgrammer } = useTheme();
  const isInternal = href.startsWith("/") && !href.startsWith("//");
  const localized = isInternal
    ? withLocale(href, isProgrammer ? "en" : "ar")
    : href;
  return <Link href={localized} {...props} />;
}
