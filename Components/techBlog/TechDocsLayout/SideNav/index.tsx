import { navItemsMapper } from "@/data/techBlog";
import { SideNavProps } from "@/types/techBlog";
import SideNavHeader from "./SideNavHeader";
import SideNavSection from "./SideNavSection";
import { useAppTranslation } from "@/hooks/useAppTranslation";
import { usePostponeOnRender } from "@/hooks/usePostponeOnRender";
import { usePathname } from "next/navigation";

export default function SideNav({
  isMobile,
  isNavOpen,
  handleToggleNav,
  handleChangeNavState,
}: SideNavProps) {
  const { currentDirection, isLTR } = useAppTranslation();
  const { is50MSAfterRender } = usePostponeOnRender();
  const { t } = useAppTranslation();
  const pathname = usePathname();
  const tech = pathname.split("/")[2];
  const navItems = navItemsMapper(t)[tech];

  if (!is50MSAfterRender) return null;

  return (
    <aside
      dir={currentDirection}
      className={`fixed inset-y-0 start-0 ebd z-40 w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out  ${
        isNavOpen
          ? "translate-x-0"
          : isLTR
          ? "-translate-x-full"
          : "translate-x-full"
      }`}
      aria-hidden={!isNavOpen && isMobile}
    >
      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm md:bg-white"></div>
      <div className="relative flex flex-col h-full">
        <SideNavHeader handleToggleNav={handleToggleNav} />

        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          <nav className="space-y-3">
            <SideNavSection
              items={navItems}
              color="blue"
              isMobile={isMobile}
              handleChangeNavState={handleChangeNavState}
            />
          </nav>
        </div>
      </div>
    </aside>
  );
}
