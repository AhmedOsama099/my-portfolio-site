import React from "react";
import TechDocsLayout from "../../../Components/techBlog/TechDocsLayout";
import MotionPageWrapper from "@/Components/motionPageWrapper";
import TechArticleCommentsWrapper from "@/Components/comments/TechArticleCommentsWrapper";
import TechArticleGuard from "@/Components/techBlog/TechArticleGuard";

export default async function TechnologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TechDocsLayout>
      <MotionPageWrapper className="max-w-4xl mx-auto relative max-[980px]:mt-16 px-2">
        <TechArticleGuard>
          {children}
          <TechArticleCommentsWrapper />
        </TechArticleGuard>
      </MotionPageWrapper>
    </TechDocsLayout>
  );
}
