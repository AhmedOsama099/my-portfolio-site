"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  DEFAULT_LOCALE,
  getLocaleFromPathname,
  otherLocale,
  stripLocale,
  withLocale,
} from "@/lib/i18n/config";

export default function LanguageSwitchButton() {
  const pathname = usePathname();
  const router = useRouter();
  const current = getLocaleFromPathname(pathname) ?? DEFAULT_LOCALE;

  // Toggle the article language by navigating to the other URL locale.
  // This does not affect the Programmer/Writer mode.
  const switchArticleLanguage = () => {
    router.push(withLocale(stripLocale(pathname), otherLocale(current)));
    // The article is server-rendered from the x-locale header. Because both
    // locales rewrite to the same internal route, the client Router Cache would
    // otherwise serve the stale (same-language) payload — refresh re-fetches the
    // server component with the new locale.
    router.refresh();
  };

  return (
    <button
      onClick={switchArticleLanguage}
      className="fixed h-11 top-32 end-0 z-10 p-2 bg-[#EE3E54] text-white rounded-s-lg  shadow hover:bg-[#B12343] transition"
    >
      {current === "ar" ? "English" : "العربية"}
    </button>
  );
}
