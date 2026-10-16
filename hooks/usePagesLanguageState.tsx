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
    const isTechBlog = pathname.includes("/tech-blog");
    if (isTechBlog) {
      const pathLocale = getLocaleFromPathname(pathname);
      const locale = pathLocale || DEFAULT_LOCALE;

      if (currentLanguage !== locale) {
        setLanguage(locale);
      }
      changeCurrentDirection(locale === "ar" ? "rtl" : "ltr");
    } else {
      // All other sections are in the default mode (English)
      if (currentLanguage !== DEFAULT_LOCALE) {
        setLanguage(DEFAULT_LOCALE);
      }
      changeCurrentDirection("ltr");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
};
