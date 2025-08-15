// lib/i18n-server.ts
import i18n from "i18next";
import Backend from "i18next-fs-backend";
import path from "path";

export async function initServerI18n(lang: string, ns: string) {
  if (!i18n.isInitialized) {
    await i18n.use(Backend).init({
      lng: lang,
      ns: [ns],
      defaultNS: ns,
      fallbackLng: "en",
      interpolation: { escapeValue: false },
      backend: {
        loadPath: path.join(
          process.cwd(),
          "/locales/server-side/{{lng}}/{{ns}}.json"
        ),
      },
    });
  } else {
    await i18n.changeLanguage(lang);
    if (!i18n.hasResourceBundle(lang, ns)) {
      await i18n.loadNamespaces(ns);
    }
  }

  return i18n;
}
