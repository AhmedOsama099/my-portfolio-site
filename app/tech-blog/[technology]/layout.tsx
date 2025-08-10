import React from "react";
import TechDocsLayout from "../../../Components/techBlog/TechDocsLayout";
import TranslationProvider from "../../../Components/TranslationProvider";

export default function TechnologyLayout({
  children,
}: {
  children: React.ReactNode;
  params: { technology: string };
}) {
  return (
    <TranslationProvider>
      <TechDocsLayout>{children}</TechDocsLayout>
    </TranslationProvider>
  );
}
