import { navItems } from "@/data/techBlog";
import { SideNavProps } from "@/types/techBlog";
import SideNavHeader from "./SideNavHeader";
import SideNavSection from "./SideNavSection";
import SideNavResources from "./SideNavResources";
import { useAppTranslation } from "@/hooks/useAppTranslation";
import { useFirstRender } from "@/hooks/useFirstRender";

export default function SideNav({
  isMobile,
  isNavOpen,
  handleToggleNav,
  handleChangeNavState,
}: SideNavProps) {
  const { currentDirection, isLTR } = useAppTranslation();
  const { is50MSAfterFirstRender } = useFirstRender();

  if (!is50MSAfterFirstRender) return null;

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
              title="Getting Started"
              items={navItems.slice(0, 3)}
              color="blue"
              activeIndex={0}
              isMobile={isMobile}
              handleChangeNavState={handleChangeNavState}
            />
            <SideNavSection
              title="Reference"
              items={navItems.slice(3, 6)}
              color="green"
              isMobile={isMobile}
              handleChangeNavState={handleChangeNavState}
            />
            <SideNavSection
              title="Advanced"
              items={navItems.slice(6)}
              color="purple"
              isMobile={isMobile}
              handleChangeNavState={handleChangeNavState}
            />
          </nav>
          <SideNavResources />
        </div>
      </div>
    </aside>
  );
}
