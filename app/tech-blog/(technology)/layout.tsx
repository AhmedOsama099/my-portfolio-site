import React from "react";
import TechDocsLayout from "../../../Components/techBlog/TechDocsLayout";

export default async function TechnologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TechDocsLayout>{children}</TechDocsLayout>;
}
