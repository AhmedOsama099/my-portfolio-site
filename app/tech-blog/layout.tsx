import React from "react";
import { TechAuthProvider } from "@/Components/techBlog/TechAuthContext";

export default function TechBlogRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TechAuthProvider>{children}</TechAuthProvider>;
}
