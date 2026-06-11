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
  const { pathname, search } = req.nextUrl;
  const locale = getLocaleFromPathname(pathname);

  // 1. No locale prefix -> redirect to the detected locale.
  if (!locale) {
    const target = req.nextUrl.clone();
    target.pathname = withLocale(pathname, detectLocale(req));
    return NextResponse.redirect(target);
  }

  const rest = stripLocale(pathname);

  // 2. Rewrite to the un-prefixed route, forwarding the locale to the server
  //    via request headers (readable by `headers()` in server components).
  const reqHeaders = new Headers(req.headers);
  reqHeaders.set("x-locale", locale);
  // NOTE: do NOT set `x-invoke-path` here — it is a reserved Next.js internal
  // routing header. Overriding it on the forwarded request makes the production
  // server (`next start`) mis-resolve every rewritten route to the not-found
  // page (dev silently ignores it, which is why it only broke in production).

  const rewriteUrl = req.nextUrl.clone();
  rewriteUrl.pathname = rest;

  const res = NextResponse.rewrite(rewriteUrl, {
    request: { headers: reqHeaders },
  });
  // Persist the choice so "/" and SSR fallbacks resolve consistently.
  res.cookies.set("i18next", locale, { path: "/", maxAge: 60 * 60 * 24 * 365 });
  return res;
}

export const config = {
  // Run on everything except Next internals, the API, and files with an
  // extension (covers /images/**, /docs/** assets, favicon, robots, sitemap...).
  matcher: ["/((?!_next/|api/|.*\\..*).*)"],
};
