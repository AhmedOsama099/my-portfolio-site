import { usePathname } from "next/navigation";
import {
  DEFAULT_LOCALE,
  getLocaleFromPathname,
  withLocale,
} from "@/lib/i18n/config";

/** True for internal app routes that should carry the locale prefix. */
function isInternalRoute(href: string): boolean {
  return href.startsWith("/") && !href.startsWith("//");
}

/**
 * Returns a function that prefixes internal hrefs with the current URL locale.
 * External links, hashes and asset paths are returned unchanged.
 */
export const useLocalizedHref = () => {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) ?? DEFAULT_LOCALE;

  return (href: string) => (isInternalRoute(href) ? withLocale(href, locale) : href);
};
