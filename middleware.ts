// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  DEFAULT_LOCALE,
  type Locale,
  getLocaleFromPathname,
  isLocale,
  stripLocale,
  withLocale,
} from "@/lib/i18n/config";

/** Detect the preferred locale from the i18next cookie, then Accept-Language. */
function detectLocale(req: NextRequest): Locale {
  const cookie = req.cookies.get("i18next")?.value;
  if (isLocale(cookie)) return cookie;

  const accept = req.headers.get("accept-language") ?? "";
  // Take the first language tag and match its primary subtag (e.g. "ar-EG" -> "ar").
  const primary = accept.split(",")[0]?.trim().split("-")[0]?.toLowerCase();
  if (isLocale(primary)) return primary;

  return DEFAULT_LOCALE;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Direct root route for /stats (bypasses all middleware handling)
  if (pathname === "/stats" || pathname.startsWith("/stats/")) {
    return NextResponse.next();
  }

  const locale = getLocaleFromPathname(pathname);
  const rest = stripLocale(pathname);
  const isTechBlog = rest.startsWith("/tech-blog");

  // Arabic and English routing are strictly reserved for tech-blog articles
  if (isTechBlog) {
    const activeLocale = locale || DEFAULT_LOCALE;
    const reqHeaders = new Headers(req.headers);
    reqHeaders.set("x-locale", activeLocale);

    const rewriteUrl = req.nextUrl.clone();
    rewriteUrl.pathname = rest;

    return NextResponse.rewrite(rewriteUrl, {
      request: { headers: reqHeaders },
    });
  }

  // If a legacy URL with /en/ or /ar/ prefix is hit for non-tech-blog pages,
  // redirect cleanly to the un-prefixed canonical route
  if (locale) {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = rest;
    return NextResponse.redirect(redirectUrl);
  }

  // All other pages (/ , /about, /portfolio, /contact, /blog) are in the default mode
  const reqHeaders = new Headers(req.headers);
  reqHeaders.set("x-locale", DEFAULT_LOCALE);

  return NextResponse.next({
    request: { headers: reqHeaders },
  });
}

export const config = {
  // Run on everything except Next internals, the API, and files with an
  // extension (covers /images/**, /docs/** assets, favicon, robots, sitemap...).
  matcher: ["/((?!_next/|api/|.*\\..*).*)"],
};
