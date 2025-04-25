import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../../public/locales/en/translation.json";
import ar from "../../public/locales/ar/translation.json";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  // debug: process.env.NODE_ENV === "development",
  interpolation: {
    escapeValue: false,
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
