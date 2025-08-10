import React from "react";
import TechDocsLayout from "../../../Components/techBlog/TechDocsLayout";

export default function TechnologyLayout({
  children,
}: {
  children: React.ReactNode;
  params: { technology: string };
}) {
  return <TechDocsLayout>{children}</TechDocsLayout>;
}
