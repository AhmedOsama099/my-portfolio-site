import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export const useAppTranslation = () => {
  const { t, i18n } = useTranslation();

  const [currentDirection, setCurrentDirection] = useState<string>("ltr");
  const isLTR = useRef(true);
  useEffect(() => {
    if (i18n.language === "ar") {
      setCurrentDirection("rtl");
      isLTR.current = false;
    } else {
      setCurrentDirection("ltr");
      isLTR.current = true;
    }
  }, [i18n.language]);

  const changeCurrentDirection = (dir: "ltr" | "rtl") => {
    setCurrentDirection(dir);
  };

  return {
    currentLanguage: i18n.language,
    currentDirection: currentDirection,
    isLTR: isLTR.current,
    changeCurrentDirection: (dir: "ltr" | "rtl") => changeCurrentDirection(dir),
    setLanguage: (lang: string) => i18n.changeLanguage(lang),
    changeLanguage: () =>
      i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar"),
    t,
    i18n,
  };
};
