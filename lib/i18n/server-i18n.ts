import { createInstance, type Resource } from "i18next";
import { translations } from "./server-translations-object";

export async function initServerI18n(lang: string, ns: string) {
  const i18nInstance = createInstance();
  const allNamespaces = Object.keys(translations.en || {});

  await i18nInstance.init({
    lng: lang,
    fallbackLng: "en",
    resources: translations as unknown as Resource,
    ns: allNamespaces.includes(ns) ? allNamespaces : [...allNamespaces, ns],
    defaultNS: ns,
    interpolation: { escapeValue: false },
  });

  return i18nInstance;
}
