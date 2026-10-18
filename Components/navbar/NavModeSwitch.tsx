"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import { useAppTranslation } from "@/hooks/useAppTranslation";
import { stripLocale, withLocale } from "@/lib/i18n/config";

const EngineerIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const WriterIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2l7.586 7.586" />
    <circle cx="11" cy="11" r="2" />
  </svg>
);

interface NavModeSwitchProps {
  className?: string;
  showLabels?: boolean;
}

const NavModeSwitch: React.FC<NavModeSwitchProps> = ({
  className = "",
  showLabels = true,
}) => {
  const { isProgrammer, toggleMode } = useTheme();
  const { t } = useAppTranslation();
  const pathname = usePathname();
  const router = useRouter();

  const switchMode = (targetIsProgrammer: boolean) => {
    if (targetIsProgrammer === isProgrammer) return;
    const nextLocale = isProgrammer ? "ar" : "en";
    toggleMode();
    router.push(withLocale(stripLocale(pathname), nextLocale));
  };

  const segments = [
    {
      key: "engineer",
      active: isProgrammer,
      label: t("modeSwitch.engineer") || "Dev",
      Icon: EngineerIcon,
      onClick: () => switchMode(true),
    },
    {
      key: "writer",
      active: !isProgrammer,
      label: t("modeSwitch.writer") || "Writer",
      Icon: WriterIcon,
      onClick: () => switchMode(false),
    },
  ];

  return (
    <div
      role="group"
      aria-label="Portfolio Persona Switch"
      className={`relative inline-flex items-center p-0.5 rounded-full bg-slate-100/90 border border-slate-200/90 shadow-inner select-none shrink-0 ${className}`}
    >
      {segments.map(({ key, active, label, Icon, onClick }) => (
        <button
          key={key}
          type="button"
          onClick={onClick}
          aria-pressed={active}
          title={label}
          className={`relative flex items-center justify-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-full text-xs font-bold transition-colors cursor-pointer ${
            active ? "text-white" : "text-slate-600 hover:text-slate-900"
          }`}
        >
          {active && (
            <motion.span
              layoutId="nav-persona-pill"
              className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-rose-500 shadow-sm"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <Icon className="relative z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          {showLabels && (
            <span className="relative z-10 hidden min-[980px]:inline text-[11px] tracking-tight">
              {label}
            </span>
          )}
        </button>
      ))}
    </div>
  );
};

export default NavModeSwitch;
