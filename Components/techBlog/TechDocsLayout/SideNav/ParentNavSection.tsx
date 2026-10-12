"use client";

import Image from "next/image";
import { parentCategories } from "@/data/techBlog";
import { useAppTranslation } from "@/hooks/useAppTranslation";

type ParentNavSectionProps = {
  activeParent: string;
  onSelectParent: (id: string) => void;
  isMobile?: boolean;
};

// Compact labels for the mobile icon rail
const shortCategoryLabels: Record<string, { en: string; ar: string }> = {
  git: { en: "Git", ar: "Git" },
  ts: { en: "TS", ar: "TS" },
  performance: { en: "Perf", ar: "الأداء" },
  accessibility: { en: "A11y", ar: "الوصول" },
};

export default function ParentNavSection({
  activeParent,
  onSelectParent,
  isMobile,
}: ParentNavSectionProps) {
  const { t, isLTR, currentLanguage } = useAppTranslation();
  const langKey = currentLanguage === "ar" ? "ar" : "en";

  return (
    <div className="w-[68px] md:w-52 bg-slate-900 text-slate-100 flex flex-col border-e border-slate-800 h-full select-none flex-shrink-0 transition-all duration-300">
      {/* Desktop Parent Header */}
      <div className="hidden md:flex p-4 border-b border-slate-800 bg-slate-950/70 h-[112px] flex-col justify-center">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
          <h2 className="text-base font-bold text-white tracking-wide">
            {t("tech-blog.parentNavTitle")}
          </h2>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          {t("tech-blog.parentNavDescription")}
        </p>
      </div>

      {/* Mobile Rail Header */}
      <div className="flex md:hidden flex-col items-center justify-center p-2 border-b border-slate-800 bg-slate-950/70 h-[112px]">
        <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mb-1">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
        </div>
        <span className="text-[10px] font-bold text-slate-300 tracking-wider text-center line-clamp-1">
          {t("tech-blog.parentNavTitle")}
        </span>
      </div>

      {/* Parent Items List */}
      <div className="flex-1 overflow-y-auto p-1.5 md:p-2.5 space-y-2 md:space-y-1.5 custom-scrollbar">
        {parentCategories.map((cat) => {
          const isActive = activeParent === cat.id;
          const fullCategoryName = t(`tech-blog.categories.${cat.id}`);
          const shortName =
            shortCategoryLabels[cat.id]?.[langKey] || fullCategoryName;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectParent(cat.id)}
              title={fullCategoryName}
              aria-label={fullCategoryName}
              className={`w-full text-start flex flex-col md:flex-row items-center md:justify-between px-1.5 py-2.5 md:px-3 md:py-2.5 rounded-xl transition-all duration-200 group relative ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 font-semibold"
                  : "text-slate-300 hover:bg-slate-800/80 hover:text-white"
              }`}
            >
              {/* Active bar on mobile start edge */}
              {isActive && (
                <span className="md:hidden absolute start-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-white rounded-e-full" />
              )}

              <div className="flex flex-col md:flex-row items-center md:gap-3 min-w-0 w-full justify-center md:justify-start">
                <Image
                  src={cat.icon}
                  alt={cat.id}
                  width={26}
                  height={26}
                  unoptimized
                  className="w-6.5 h-6.5 object-contain flex-shrink-0 transition-transform duration-200 group-hover:scale-110 drop-shadow-sm"
                />
                {/* Desktop Full Title */}
                <span className="hidden md:inline text-xs sm:text-sm font-medium truncate">
                  {fullCategoryName}
                </span>
                {/* Mobile Compact Title */}
                <span className="md:hidden text-[10px] font-medium mt-1 text-center truncate max-w-full leading-tight">
                  {shortName}
                </span>
              </div>

              {/* Desktop Arrow Indicator */}
              <svg
                className={`hidden md:block w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200 ${
                  isActive
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0"
                } ${!isLTR ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          );
        })}
      </div>
    </div>
  );
}
