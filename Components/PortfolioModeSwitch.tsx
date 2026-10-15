"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import { useAppTranslation } from "@/hooks/useAppTranslation";
import { stripLocale, withLocale } from "@/lib/i18n/config";

// Two personas, one site: a segmented toggle so a visitor can flip between the
// software-engineer portfolio and the writer/literature side. The active half
// carries a sliding gradient pill; tapping the inactive half switches mode.
const EngineerIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const WriterIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
);

const PortfolioModeSwitch = () => {
  const { isProgrammer, toggleMode } = useTheme();
  const { t } = useAppTranslation();
  const pathname = usePathname();
  const router = useRouter();

  const switchMode = () => {
    const nextLocale = isProgrammer ? "ar" : "en";
    toggleMode();
    router.push(withLocale(stripLocale(pathname), nextLocale));
  };

  const segments = [
    {
      key: "engineer",
      active: isProgrammer,
      label: t("modeSwitch.engineer"),
      Icon: EngineerIcon,
    },
    {
      key: "writer",
      active: !isProgrammer,
      label: t("modeSwitch.writer"),
      Icon: WriterIcon,
    },
  ];

  return (
    <div
      role="group"
      aria-label={t("modeSwitch.hint")}
      className="relative my-3 mx-auto w-max max-w-[94vw] z-30 flex justify-center
        sm:absolute sm:my-0 sm:inset-x-auto sm:top-[4%] sm:start-[5%] sm:z-40"
    >
      <div className="flex items-center gap-1 p-1 rounded-full bg-white/85 backdrop-blur-md border border-white shadow-xl">
        {segments.map(({ key, active, label, Icon }) => (
          <button
            key={key}
            type="button"
            onClick={() => !active && switchMode()}
            aria-pressed={active}
            className="relative flex items-center gap-2 px-4 py-2 rounded-full text-sm md:text-base font-bold transition-colors cursor-pointer"
          >
            {active && (
              <motion.span
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-md"
              />
            )}
            <Icon
              className={`h-5 w-5 shrink-0 ${
                active ? "text-white" : "text-gray-500"
              }`}
            />
            <span
              className={`whitespace-nowrap ${
                active ? "text-white" : "text-gray-600"
              }`}
            >
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PortfolioModeSwitch;
