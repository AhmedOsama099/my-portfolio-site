"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { DEFAULT_LOCALE, getLocaleFromPathname } from "@/lib/i18n/config";
import { useAppTranslation } from "@/hooks/useAppTranslation";

/**
 * Keeps the root <html> element's `lang` and `dir` attributes, as well as the
 * active client i18next language, in sync with the current URL locale prefix.
 */
const HtmlLangSync = () => {
  const pathname = usePathname();
  const { currentLanguage, setLanguage, changeCurrentDirection } =
    useAppTranslation();

  useEffect(() => {
    const isTechBlog = pathname.includes("/tech-blog");
    if (isTechBlog) {
      const urlLocale = getLocaleFromPathname(pathname) || DEFAULT_LOCALE;
      const dir = urlLocale === "ar" ? "rtl" : "ltr";

      document.documentElement.lang = urlLocale;
      document.documentElement.dir = dir;

      if (currentLanguage !== urlLocale) {
        setLanguage(urlLocale);
        changeCurrentDirection(dir);
      }
    } else {
      document.documentElement.lang = DEFAULT_LOCALE;
      document.documentElement.dir = "ltr";

      if (currentLanguage !== DEFAULT_LOCALE) {
        setLanguage(DEFAULT_LOCALE);
        changeCurrentDirection("ltr");
      }
    }
  }, [pathname, currentLanguage, setLanguage, changeCurrentDirection]);

  return null;
};

export default HtmlLangSync;
