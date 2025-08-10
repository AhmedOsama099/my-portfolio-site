"use client";

import { useOutSideTechBlogState } from "@/hooks/useOutSideTechBlogState";
import { ReactNode } from "react";

export default function OutsideTechBlogStateHandler({
  children,
}: {
  children: ReactNode;
}) {
  useOutSideTechBlogState();
  return <>{children}</>;
}
