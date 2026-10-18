import { useCurrentURL } from "@/hooks/useCurrentURL";
import { useLocalizedHref } from "@/hooks/useLocalizedHref";
import { SectionProps } from "@/types/techBlog";
import Link from "next/link";
import { useTechAuth } from "@/Components/techBlog/TechAuthContext";

export default function SideNavSection({
  title,
  items,
  isMobile,
  handleChangeNavState,
  parentKey,
}: SectionProps & { parentKey?: string }) {
  const { currentURL } = useCurrentURL();
  const getHref = useLocalizedHref();
  const { isItemLocked, openAuthModal } = useTechAuth();

  return (
    <div className="mb-6">
      {title && (
        <h3 className="px-2 sm:px-3 mb-2 sm:mb-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          {title}
        </h3>
      )}
      {items?.map((item) => {
        const fullPath = parentKey
          ? `/tech-blog/${parentKey}/${item.href}`
          : item.href;
        const isActive = currentURL === item.href;
        const locked = isItemLocked(parentKey || "", item.href);

        if (locked) {
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                if (isMobile) handleChangeNavState(false);
                openAuthModal(getHref(fullPath));
              }}
              className="w-full text-start flex items-center justify-between px-3 py-2.5 sm:px-4 sm:py-3 text-sm rounded-xl transition-all duration-200 text-slate-500 hover:bg-slate-100 hover:text-slate-800 group"
              title="Upcoming article — requires credentials to preview"
            >
              <div className="flex items-center min-w-0">
                <span className="me-2 text-xs flex-shrink-0 text-slate-400 group-hover:text-amber-600 transition-colors">
                  🔒
                </span>
                <span className="truncate">{item.title}</span>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200/80 shrink-0">
                Upcoming
              </span>
            </button>
          );
        }

        return (
          <Link
            key={item.id}
            href={getHref(fullPath)}
            className={`block px-3 py-2.5 sm:px-4 sm:py-3 text-sm rounded-xl transition-all duration-200 ${
              isActive
                ? `bg-blue-50 text-blue-700 font-semibold border-s-4 border-blue-500 shadow-sm`
                : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            }`}
            onClick={() => {
              if (isMobile) handleChangeNavState(false);
            }}
          >
            <div className="flex items-center min-w-0">
              <span
                className={`me-2 text-base flex-shrink-0 ${isActive ? "text-blue-600 font-bold" : "text-gray-400"}`}
              >
                •
              </span>
              <span className="truncate">{item.title}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
