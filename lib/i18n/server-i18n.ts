// lib/i18n-server.ts
import i18n from "i18next";
import { translations } from "./server-translations-object";

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
