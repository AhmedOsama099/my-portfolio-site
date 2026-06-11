// Shared, edge-safe locale config.
// Pure module (no React / Node APIs) so it can be imported by the middleware,
// server components, and client components alike.

export const LOCALES = ["en", "ar"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

/** Returns the locale from the first path segment, or null if not prefixed. */
export function getLocaleFromPathname(pathname: string): Locale | null {
  const first = pathname.split("/")[1];
  return isLocale(first) ? first : null;
}

/** Strips a leading locale segment: "/ar/about" -> "/about", "/ar" -> "/". */
export function stripLocale(pathname: string): string {
  const locale = getLocaleFromPathname(pathname);
  if (!locale) return pathname || "/";
  const rest = pathname.slice(locale.length + 1); // remove "/ar"
  return rest === "" ? "/" : rest;
}

/** Prefixes a path with a locale: ("/about", "ar") -> "/ar/about". */
export function withLocale(path: string, locale: Locale): string {
  const clean = stripLocale(path); // tolerate an already-prefixed path
  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}

/** The other locale (en <-> ar). */
export function otherLocale(locale: Locale): Locale {
  return locale === "ar" ? "en" : "ar";
}
