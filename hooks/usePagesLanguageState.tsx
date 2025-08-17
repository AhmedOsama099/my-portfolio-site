import { useTheme } from "@/context/ThemeContext";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAppTranslation } from "./useAppTranslation";

export const usePagesLanguageState = () => {
  const router = useRouter();

  const {
    currentLanguage,
    changeCurrentDirection,
    changeLanguage,
    setLanguage,
  } = useAppTranslation();

  const pathname = usePathname();
  const { isProgrammer } = useTheme();

  useEffect(() => {
    if (pathname.includes("/tech-blog")) {
      setLanguage("ar");
      router.refresh(); // re-fetch SSR page with new lang

      changeCurrentDirection("rtl");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

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
