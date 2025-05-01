"use client";

import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { useAppTranslation } from "@/hooks/useAppTranslation";

const HomeDescription = () => {
  const { isProgrammer } = useTheme();
  const { t } = useAppTranslation();

  const primaryButton = isProgrammer ? "bg-[#3A4184]" : "bg-[#5c00aa]";
  const titleGradient = isProgrammer
    ? "from-[#3A4184]  to-[#D01C32]"
    : " from-slate-500 to-[#5c00aa80]";

  const secondaryButton = isProgrammer
    ? "border-[#3A4184] text-[#3A4184] "
    : "border-[#5c00aa] text-black ";

  return (
    <div
      className={`h-1/2 lg:h-full lg:w-1/2 flex flex-col justify-normal lg:justify-center lg:mt-0 mt-4 gap-8`}
    >
      {/* Title */}
      <h1
        className={`text-4xl md:text-5xl lg:text-[45px] xl:text-[52px] font-bold lg:text-start text-center bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent rtl:leading-[70px]`}
      >
        {t("home.title")}
      </h1>
      {/* Desc */}
      <p className={`md:text-xl lg:text-start text-center `}>
        {t("home.desc")}
      </p>
      {/* Buttons */}
      <div className="w-full flex flex-col sm:flex-row gap-4 pb-4">
        <Link
          href="/portfolio"
          className={`p-4 flex-1 rounded-lg  ${primaryButton}  text-white text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
        >
          {t("home.viewMyWork")}
        </Link>
        <Link
          href="/contact"
          className={`p-4 flex-1 rounded-lg border-2  sm:mb-0 text-center ${secondaryButton}  transition-all duration-300 hover:-translate-y-1`}
        >
          {t("home.contactMe")}
        </Link>
      </div>
    </div>
  );
};

export default HomeDescription;
