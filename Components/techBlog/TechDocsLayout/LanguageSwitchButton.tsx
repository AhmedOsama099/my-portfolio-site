"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  DEFAULT_LOCALE,
  getLocaleFromPathname,
  isLocale,
  otherLocale,
  stripLocale,
  withLocale,
} from "@/lib/i18n/config";
import { useAppTranslation } from "@/hooks/useAppTranslation";

export default function LanguageSwitchButton() {
  const pathname = usePathname();
  const router = useRouter();
  const { currentLanguage, setLanguage, changeCurrentDirection } =
    useAppTranslation();

  const activePathLocale =
    getLocaleFromPathname(pathname) ||
    (typeof window !== "undefined"
      ? getLocaleFromPathname(window.location.pathname)
      : null);

  const current =
    activePathLocale ||
    (isLocale(currentLanguage) ? currentLanguage : DEFAULT_LOCALE);

  // Toggle the article language by navigating to the other URL locale.
  const switchArticleLanguage = () => {
    const nextLocale = otherLocale(current);
    const rawPath =
      typeof window !== "undefined" ? window.location.pathname : pathname;
    const cleanPath = stripLocale(rawPath);
    const targetUrl = withLocale(cleanPath, nextLocale);

    if (typeof document !== "undefined") {
      document.cookie = `i18next=${nextLocale}; path=/; max-age=31536000`;
      document.documentElement.lang = nextLocale;
      document.documentElement.dir = nextLocale === "ar" ? "rtl" : "ltr";
    }

    setLanguage(nextLocale);
    changeCurrentDirection(nextLocale === "ar" ? "rtl" : "ltr");

    // Perform full navigation to ensure the Server Component re-renders with the new locale
    if (typeof window !== "undefined") {
      window.location.href = targetUrl;
    } else {
      router.push(targetUrl);
      router.refresh();
    }
  };

  return (
    <button
      onClick={switchArticleLanguage}
      className="fixed h-11 top-32 end-0 z-10 p-2 bg-[#EE3E54] text-white rounded-s-lg shadow hover:bg-[#B12343] transition"
    >
      {current === "ar" ? "English" : "العربية"}
    </button>
  );
}

