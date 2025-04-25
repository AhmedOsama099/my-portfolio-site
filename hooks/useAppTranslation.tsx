import { useTranslation } from "react-i18next";

export const useAppTranslation = () => {
  const { t, i18n } = useTranslation();

  return {
    currentLanguage: i18n.language,
    currentDirection: i18n.language === "ar" ? "rtl" : "ltr",
    changeLanguage: () =>
      i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar"),
    t,
    i18n,
  };
};
