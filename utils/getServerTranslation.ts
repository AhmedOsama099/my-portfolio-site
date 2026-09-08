import { initServerI18n } from "@/lib/i18n/server-i18n";
import { DEFAULT_LOCALE, isLocale } from "@/lib/i18n/config";
import { cookies, headers } from "next/headers";

export async function getServerTranslation(ns: string = "common") {
  const cookieStore = await cookies();
  const requestHeaders = await headers();

  // Locale comes from the URL prefix, forwarded by the middleware as a header.
  // Fall back to the persisted cookie, then the default locale.
  const headerLocale = requestHeaders.get("x-locale");
  const cookieLocale = cookieStore.get("i18next")?.value;

  const lang =
    (isLocale(headerLocale) ? headerLocale : null) ||
    (isLocale(cookieLocale) ? cookieLocale : null) ||
    DEFAULT_LOCALE;

  const i18n = await initServerI18n(lang, ns);
  const t = i18n.getFixedT(lang, ns);

  return { t, lang };
}
