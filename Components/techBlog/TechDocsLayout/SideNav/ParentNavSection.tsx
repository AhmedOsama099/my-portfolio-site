import Image from "next/image";
import { parentCategories } from "@/data/techBlog";
import { useAppTranslation } from "@/hooks/useAppTranslation";

type ParentNavSectionProps = {
  activeParent: string;
  onSelectParent: (id: string) => void;
};

export default function ParentNavSection({
  activeParent,
  onSelectParent,
}: ParentNavSectionProps) {
  const { t, isLTR } = useAppTranslation();

  return (
    <div className="w-52 bg-slate-900 text-slate-100 flex flex-col border-e border-slate-800 h-full select-none flex-shrink-0">
      {/* Parent Header */}
      <div className="p-4 border-b border-slate-800 bg-slate-950/70 h-[112px] flex flex-col justify-center">
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

      {/* Parent Items List */}
      <div className="flex-1 overflow-y-auto p-2.5 space-y-1.5 custom-scrollbar">
        {parentCategories.map((cat) => {
          const isActive = activeParent === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectParent(cat.id)}
              className={`w-full text-start flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 font-semibold"
                  : "text-slate-300 hover:bg-slate-800/80 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <Image
                  src={cat.icon}
                  alt={cat.id}
                  width={26}
                  height={26}
                  unoptimized
                  className="w-6.5 h-6.5 object-contain flex-shrink-0 transition-transform duration-200 group-hover:scale-110 drop-shadow-sm"
                />
                <span className="text-xs sm:text-sm font-medium truncate">
                  {t(`tech-blog.categories.${cat.id}`)}
                </span>
              </div>

              {/* Arrow Indicator */}
              <svg
                className={`w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200 ${
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
