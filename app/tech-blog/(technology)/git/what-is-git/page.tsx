import ContentSimpleParagraph from "@/Components/techBlog/DocsUtils/ContentSimpleParagraph";
import DocsImage from "@/Components/techBlog/DocsUtils/DocsImage";
import HeaderTitle from "@/Components/techBlog/DocsUtils/HeaderTitle";
import PageHeader from "@/Components/techBlog/DocsUtils/PageHeaderWrapper";
import Resources from "@/Components/techBlog/DocsUtils/Resources";
import SectionList from "@/Components/techBlog/DocsUtils/SectionList";
import SectionTitle from "@/Components/techBlog/DocsUtils/SectionTitle";
import SectionWrapper from "@/Components/techBlog/DocsUtils/SectionWrapper";
import { getServerTranslation } from "@/utils/getServerTranslation";
import parse from "html-react-parser";
export default async function WhatIsGITPage() {
  const { t, lang } = await getServerTranslation("what-is-git");

  return (
    <>
      {/* Page Header */}
      <PageHeader>
        <HeaderTitle>{t("title")}</HeaderTitle>
      </PageHeader>

      {/* Getting Started Section */}
      <SectionWrapper id="getting-started">
        {/* What is git? */}
        <ContentSimpleParagraph>
          {parse(t("whatIsGit.p1"))}
          {parse(t("whatIsGit.p2"))}
          <DocsImage src={`/images/tech-blog/git/what-is-git-${lang}-1.svg`} />
        </ContentSimpleParagraph>
      </SectionWrapper>
      {/* Why git is a Version Control? */}
      <SectionWrapper id="why-version-control">
        <SectionTitle>{parse(t("whyVersionControl.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parse(t("whyVersionControl.p1"))}
          {parse(t("whyVersionControl.p2"))}
          {parse(t("whyVersionControl.p3"))}
          {parse(t("whyVersionControl.p4"))}
          <DocsImage src={`/images/tech-blog/git/what-is-git-${lang}-2.svg`} />
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* Why git is a Distributed? */}
      <SectionWrapper id="why-distributed">
        <SectionTitle>{parse(t("whyDistributed.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parse(t("whyDistributed.p1"))}
          {parse(t("whyDistributed.p2"))}
          <span>
            {parse(t("whyDistributed.p3"))}
            <SectionList>
              {parse(t("whyDistributed.list.speed"))}
              {parse(t("whyDistributed.list.reliability"))}
              {parse(t("whyDistributed.list.collaboration"))}
            </SectionList>
          </span>
          <DocsImage src={`/images/tech-blog/git/what-is-git-${lang}-3.svg`} />
        </ContentSimpleParagraph>
      </SectionWrapper>

      <Resources
        items={[
          {
            name: "git",
            url: "https://git-scm.com/book/ms/v2/Getting-Started-About-Version-Control",
          },

          {
            name: "freeCodeCamp",
            url: "https://www.freecodecamp.org/news/what-is-git-and-how-to-use-it-c341b049ae61",
          },
          {
            name: "gitLab",
            url: "https://about.gitlab.com/topics/version-control/what-is-git-version-control/?utm_source=chatgpt.com",
          },
        ]}
      />
    </>
  );
}
