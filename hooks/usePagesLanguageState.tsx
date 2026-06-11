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
  const locale = getLocaleFromPathname(pathname) ?? DEFAULT_LOCALE;

  useEffect(() => {
    if (currentLanguage !== locale) {
      setLanguage(locale);
    }
    changeCurrentDirection(locale === "ar" ? "rtl" : "ltr");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);
};
