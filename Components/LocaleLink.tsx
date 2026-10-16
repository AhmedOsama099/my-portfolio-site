"use client";

import Link from "next/link";
import { ComponentProps } from "react";

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
  return <Link href={href} {...props} />;
}
