"use client";

import { useState, useEffect } from "react";
import { navItemsMapper, parentCategories } from "@/data/techBlog";
import { SideNavProps } from "@/types/techBlog";
import SideNavHeader from "./SideNavHeader";
import SideNavSection from "./SideNavSection";
import ParentNavSection from "./ParentNavSection";
import { useAppTranslation } from "@/hooks/useAppTranslation";
import { usePathname, useRouter } from "next/navigation";
import { stripLocale } from "@/lib/i18n/config";
import { useLocalizedHref } from "@/hooks/useLocalizedHref";

export default function SideNav({
  isMobile,
  isNavOpen,
  handleToggleNav,
  handleChangeNavState,
}: SideNavProps) {
  const { currentDirection, isLTR, t } = useAppTranslation();
  const pathname = usePathname();
  const router = useRouter();
  const getHref = useLocalizedHref();

  const [disableTransition, setDisableTransition] = useState(false);

  // Disable CSS slide transition on direction/locale switch to prevent sliding across screen
  useEffect(() => {
    setDisableTransition(true);
    const timer = setTimeout(() => setDisableTransition(false), 350);
    return () => clearTimeout(timer);
  }, [isLTR, currentDirection]);

  // Extract current technology key from URL (e.g., "git", "ts", "performance", "accessibility")
  const currentTechFromUrl =
    stripLocale(pathname).split("/")[2] || "performance";

  const [activeParentKey, setActiveParentKey] =
    useState<string>(currentTechFromUrl);

  // Keep activeParentKey synchronized with URL changes
  useEffect(() => {
    if (
      currentTechFromUrl &&
      parentCategories.some((cat) => cat.id === currentTechFromUrl)
    ) {
      setActiveParentKey(currentTechFromUrl);
    }
  }, [currentTechFromUrl]);

  // Handle clicking a parent category
  const handleSelectParent = (catId: string) => {
    setActiveParentKey(catId);
    const catConfig = parentCategories.find((cat) => cat.id === catId);
    if (catConfig && catId !== currentTechFromUrl) {
      router.push(getHref(catConfig.defaultHref));
    }
  };

  const navItems = navItemsMapper(t)[activeParentKey] || [];

  return (
    <aside
      dir={currentDirection}
      className={`fixed inset-y-0 start-0 z-[60] flex shadow-2xl transform ${
        disableTransition
          ? "transition-none"
          : "transition-transform duration-300 ease-in-out"
      } ${
        isNavOpen
          ? "translate-x-0"
          : isLTR
            ? "-translate-x-full"
            : "translate-x-full"
      }`}
      aria-hidden={!isNavOpen && isMobile}
    >
      {/* 1. Parent Sidebar (Main Sidebar) */}
      <ParentNavSection
        activeParent={activeParentKey}
        onSelectParent={handleSelectParent}
      />

      {/* 2. Child Sidebar (Subtopics Sidebar) */}
      <div className="w-56 sm:w-64 bg-white flex flex-col h-full border-e border-gray-200">
        <SideNavHeader
          handleToggleNav={handleToggleNav}
          activeParentKey={activeParentKey}
        />

        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          <nav className="space-y-3">
            <SideNavSection
              items={navItems}
              color="blue"
              isMobile={isMobile}
              handleChangeNavState={handleChangeNavState}
              parentKey={activeParentKey}
            />
          </nav>
        </div>
      </div>
    </aside>
  );
}
