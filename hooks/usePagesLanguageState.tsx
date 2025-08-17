import { useTheme } from "@/context/ThemeContext";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useAppTranslation } from "./useAppTranslation";

export const usePagesLanguageState = () => {
  const {
    currentLanguage,
    changeCurrentDirection,
    changeLanguage,
    setLanguage,
  } = useAppTranslation();

  const pathname = usePathname();
  const { toggleMode, isProgrammer } = useTheme();

  useEffect(() => {
    if (pathname.includes("/tech-blog")) {
      setLanguage("ar");
      if (!isProgrammer) {
        toggleMode();
      }
      changeCurrentDirection("rtl");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, isProgrammer]);

  useEffect(() => {
    if (!pathname.includes("/tech-blog") && isProgrammer) {
      if (currentLanguage === "ar") {
        changeLanguage();
      }
    }
  }, [
    isProgrammer,
    pathname,
    changeCurrentDirection,
    changeLanguage,
    currentLanguage,
  ]);
};
