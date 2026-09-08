import { DEFAULT_LOCALE, getLocaleFromPathname } from "@/lib/i18n/config";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useAppTranslation } from "./useAppTranslation";

/**
 * The URL is the source of truth for *language*. On every navigation this reads
 * the locale from the path prefix (/en or /ar) and syncs i18next language and
 * text direction. It deliberately does NOT touch the Programmer/Writer mode —
 * mode is a persona controlled only by the home-page Mode switch.
 */
export const usePagesLanguageState = () => {
  const { currentLanguage, changeCurrentDirection, setLanguage } =
    useAppTranslation();

  const pathname = usePathname();

  useEffect(() => {
    const pathLocale = getLocaleFromPathname(pathname);
    const windowLocale =
      typeof window !== "undefined"
        ? getLocaleFromPathname(window.location.pathname)
        : null;
    const cookieMatch =
      typeof document !== "undefined"
        ? document.cookie.match(/(?:^|;\s*)i18next=([^;]+)/)
        : null;
    const cookieLocale =
      cookieMatch && (cookieMatch[1] === "ar" || cookieMatch[1] === "en")
        ? (cookieMatch[1] as "ar" | "en")
        : null;

    const locale = pathLocale || windowLocale || cookieLocale || DEFAULT_LOCALE;

    if (currentLanguage !== locale) {
      setLanguage(locale);
    }
    changeCurrentDirection(locale === "ar" ? "rtl" : "ltr");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
};
