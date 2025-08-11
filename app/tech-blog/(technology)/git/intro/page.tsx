import MotionPageWrapper from "@/Components/motionPageWrapper";
import ContentSimpleParagraph from "@/Components/techBlog/DocsUtils/ContentSimpleParagraph";
import HeaderDescription from "@/Components/techBlog/DocsUtils/HeaderDescription";
import HeaderTitle from "@/Components/techBlog/DocsUtils/HeaderTitle";
import PageHeader from "@/Components/techBlog/DocsUtils/PageHeaderWrapper";
import SectionTitle from "@/Components/techBlog/DocsUtils/SectionTitle";
import SectionWrapper from "@/Components/techBlog/DocsUtils/SectionWrapper";
import TechDocsReference from "@/Components/techBlog/DocsUtils/TechDocsReference";

export default async function TechnologyDocsPage() {
  const technology = "GIT";

  return (
    <MotionPageWrapper className="max-w-4xl mx-auto relative max-[980px]:mt-16  ">
      {/* Page Header */}
      <PageHeader>
        <HeaderTitle title="GIT Documentation" />
        <HeaderDescription description="  Complete guide and reference for git development" />
      </PageHeader>

      {/* Content Sections */}
      <div className="space-y-8">
        {/* Getting Started Section */}
        <SectionWrapper id="getting-started">
          <SectionTitle title="Getting Started" />
          <ContentSimpleParagraph>
            Welcome to the {technology} documentation. This guide will help you
            get started with {technology}
            development and provide comprehensive reference materials.
          </ContentSimpleParagraph>
          <TechDocsReference>
            This is a placeholder documentation page. Replace this content with
            actual git documentation.
          </TechDocsReference>
        </SectionWrapper>
      </div>
    </MotionPageWrapper>
  );
}
