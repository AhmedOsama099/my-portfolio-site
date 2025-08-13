"use client";

import { usePagesLanguageState } from "@/hooks/usePagesLanguageState";
import { ReactNode } from "react";

export default function PagesLanguagesStateHandler({
  children,
}: {
  children: ReactNode;
}) {
  usePagesLanguageState();
  return <>{children}</>;
}
