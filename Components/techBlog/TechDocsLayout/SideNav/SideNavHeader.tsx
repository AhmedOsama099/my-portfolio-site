import { useAppTranslation } from "@/hooks/useAppTranslation";
import { SideNavProps } from "@/types/techBlog";

export default function SideNavHeader({
  handleToggleNav,
  activeParentKey,
}: Pick<SideNavProps, "handleToggleNav"> & { activeParentKey?: string }) {
  const { t } = useAppTranslation();

  return (
    <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200/80 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 h-[112px]">
      <div className="min-w-0 flex-1 pe-2">
        <h2 className="text-base sm:text-lg font-bold text-gray-800 truncate">
          {t("tech-blog.sideNavTitle")}
        </h2>
        <p className="text-xs text-gray-600 mt-0.5 line-clamp-2 leading-relaxed">
          {activeParentKey
            ? `${t("tech-blog.sideNavDescription")} (${t(`tech-blog.categories.${activeParentKey}`)})`
            : t("tech-blog.sideNavDescription")}
        </p>
      </div>
      <button
        onClick={handleToggleNav}
        className="p-2 sm:p-2.5 rounded-xl bg-white/70 hover:bg-white text-gray-700 shadow-sm border border-gray-200/60 transition-all duration-200 md:hidden flex-shrink-0 flex items-center justify-center"
        aria-label="Close navigation"
      >
        <svg
          className="w-5 h-5 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
