// lib/i18n-server.ts
import i18n from "i18next";

// Import your translations directly
import commonEn from "../../server-locales/en/common.json";
import commonAr from "../../server-locales//ar/common.json";
import whatIsGitEn from "../../server-locales/en/what-is-git.json";
import whatIsGitAr from "../../server-locales//ar/what-is-git.json";

// Map all translations by language and namespace
const translations: Record<string, Record<string, unknown>> = {
  en: {
    common: commonEn,
    "what-is-git": whatIsGitEn,
  },
  ar: {
    common: commonAr,
    "what-is-git": whatIsGitAr,
  },
};

export async function initServerI18n(lang: string, ns: string) {
  if (!i18n.isInitialized) {
    await i18n.init<"translation">({
      lng: lang,
      fallbackLng: "en",
      resources: translations as Record<string, Record<string, string>>,
      ns: [ns],
      defaultNS: ns,
      interpolation: { escapeValue: false },
    });
  } else {
    i18n.changeLanguage(lang);
  }

  return i18n;
}
