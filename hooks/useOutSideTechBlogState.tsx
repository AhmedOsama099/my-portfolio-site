import { useTheme } from "@/context/ThemeContext";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useAppTranslation } from "./useAppTranslation";

export const useOutSideTechBlogState = () => {
  const { currentLanguage, changeCurrentDirection, changeLanguage } =
    useAppTranslation();

  const pathname = usePathname();
  const { isProgrammer } = useTheme();

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
