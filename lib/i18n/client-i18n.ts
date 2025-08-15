import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../../public/locales/clients-side/en/translation.json";
import ar from "../../public/locales/clients-side/ar/translation.json";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    // debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["cookie", "localStorage", "navigator"],
      caches: ["cookie"], // store in cookie
      cookieMinutes: 525600, // 1 year
    },
    resources: {
      en: {
        translation: en,
      },
      ar: {
        translation: ar,
      },
    },
  });

export default i18n;
