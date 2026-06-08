"use client";

import { useEffect } from "react";
import { useAppTranslation } from "@/hooks/useAppTranslation";

/**
 * Keeps the root <html> element's `lang` and `dir` attributes in sync with the
 * active i18next language. The root layout renders <html lang="en" dir="ltr">
 * for the initial server response (good defaults for SEO / Lighthouse), and this
 * component updates them on the client whenever the language changes — e.g. when
 * switching to Arabic (RTL) in writer mode or on the tech-blog pages.
 */
const HtmlLangSync = () => {
  const { currentLanguage } = useAppTranslation();

  useEffect(() => {
    const lang = currentLanguage === "ar" ? "ar" : "en";
    const dir = currentLanguage === "ar" ? "rtl" : "ltr";

    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [currentLanguage]);

  return null;
};

export default HtmlLangSync;
