"use client";

import { ReactNode } from "react";
import i18n from "@/lib/i18n";
import { I18nextProvider } from "react-i18next";
import { useAppTranslation } from "@/hooks/useAppTranslation";

export default function TranslationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { currentLanguage, currentDirection } = useAppTranslation();

  return (
    <I18nextProvider i18n={i18n}>
      <div lang={currentLanguage} dir={currentDirection}>
        {children}
      </div>
    </I18nextProvider>
  );
}
