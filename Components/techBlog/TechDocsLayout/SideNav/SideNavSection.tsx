import { useCurrentURL } from "@/hooks/useCurrentURL";
import { useLocalizedHref } from "@/hooks/useLocalizedHref";
import { SectionProps } from "@/types/techBlog";
import Link from "next/link";

export default function SideNavSection({
  title,
  items,
  isMobile,
  handleChangeNavState,
  parentKey,
}: SectionProps & { parentKey?: string }) {
  const { currentURL } = useCurrentURL();
  const getHref = useLocalizedHref();

  return (
    <div className="mb-6">
      {title && (
        <h3 className="px-3 mb-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          {title}
        </h3>
      )}
      {items?.map((item) => {
        const fullPath = parentKey
          ? `/tech-blog/${parentKey}/${item.href}`
          : item.href;
        const isActive = currentURL === item.href;

        return (
          <Link
            key={item.id}
            href={getHref(fullPath)}
            className={`block px-4 py-3 text-sm rounded-xl transition-all duration-200 ${
              isActive
                ? `bg-blue-50 text-blue-700 font-semibold border-s-4 border-blue-500 shadow-sm`
                : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            }`}
            onClick={() => {
              if (isMobile) handleChangeNavState(false);
            }}
          >
            <div className="flex items-center">
              <span
                className={`me-2.5 text-base ${isActive ? "text-blue-600 font-bold" : "text-gray-400"}`}
              >
                •
              </span>
              <span>{item.title}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
