import { useAppTranslation } from "@/hooks/useAppTranslation";
import { SideNavProps } from "@/types/techBlog";

export default function SideNavHeader({
  handleToggleNav,
}: Pick<SideNavProps, "handleToggleNav">) {
  const { t } = useAppTranslation();

  return (
    <div className="flex items-center border-[#EE3E54] justify-between p-6 border-b bg-gradient-to-r from-blue-50 to-indigo-50 h-[112px]">
      <div>
        <h2 className="text-xl font-bold text-gray-800">
          {t("tech-blog.sideNavTitle")}
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          {t("tech-blog.sideNavDescription")}
        </p>
      </div>
      <button
        onClick={handleToggleNav}
        className="p-2 rounded-lg hover:bg-white/80 transition-colors duration-200 md:hidden"
        aria-label="Close navigation"
      >
        <svg
          className="w-5 h-5 text-gray-600"
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
