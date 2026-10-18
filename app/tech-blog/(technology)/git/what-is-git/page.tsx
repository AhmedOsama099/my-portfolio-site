import ContentSimpleParagraph from "@/Components/techBlog/DocsUtils/ContentSimpleParagraph";
import DocsImage from "@/Components/techBlog/DocsUtils/DocsImage";
import HeaderTitle from "@/Components/techBlog/DocsUtils/HeaderTitle";
import PageHeader from "@/Components/techBlog/DocsUtils/PageHeaderWrapper";
import Resources from "@/Components/techBlog/DocsUtils/Resources";
import SectionList from "@/Components/techBlog/DocsUtils/SectionList";
import SectionTitle from "@/Components/techBlog/DocsUtils/SectionTitle";
import SectionWrapper from "@/Components/techBlog/DocsUtils/SectionWrapper";
import WriterDate from "@/Components/techBlog/DocsUtils/Writer&Date";
import { formatDateLang } from "@/utils/formatDateLang";
import { getServerTranslation } from "@/utils/getServerTranslation";
import { parseWithSpacing } from "@/utils/fixPunctuationSpacing";

export async function generateMetadata() {
  const title = "What is Git? — Distributed Version Control System Guide";
  const description =
    "A foundational guide to Git: why version control matters, distributed vs centralized architecture, snapshots vs deltas, and local collaboration advantages.";
  const url = "https://ahmedosamadev.vercel.app/tech-blog/git/what-is-git";
  const image = "https://ahmedosamadev.vercel.app/images/tech-blog/git/what-is-git-og.jpg";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      siteName: "Ahmed Osama Portfolio",
      images: [
        {
          url: image,
          secureUrl: image,
          width: 1200,
          height: 630,
          type: "image/jpeg",
          alt: "What is Git — Distributed Version Control System",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

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
          {parseWithSpacing(t("whatIsGit.p1"))}
          {parseWithSpacing(t("whatIsGit.p2"))}
        </ContentSimpleParagraph>
        <DocsImage src={`/images/tech-blog/git/what-is-git-${lang}-1.svg`} />
      </SectionWrapper>
      {/* Why git is a Version Control? */}
      <SectionWrapper id="why-version-control">
        <SectionTitle>{parseWithSpacing(t("whyVersionControl.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("whyVersionControl.p1"))}
          {parseWithSpacing(t("whyVersionControl.p2"))}
          {parseWithSpacing(t("whyVersionControl.p3"))}
          {parseWithSpacing(t("whyVersionControl.p4"))}
        </ContentSimpleParagraph>
        <DocsImage src={`/images/tech-blog/git/what-is-git-${lang}-2.svg`} />
      </SectionWrapper>

      {/* Why git is a Distributed? */}
      <SectionWrapper id="why-distributed">
        <SectionTitle>{parseWithSpacing(t("whyDistributed.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("whyDistributed.p1"))}
          {parseWithSpacing(t("whyDistributed.p2"))}
          {parseWithSpacing(t("whyDistributed.p3"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("whyDistributed.list.speed"))}
          {parseWithSpacing(t("whyDistributed.list.reliability"))}
          {parseWithSpacing(t("whyDistributed.list.collaboration"))}
        </SectionList>
        <DocsImage src={`/images/tech-blog/git/what-is-git-${lang}-3.svg`} />
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
      <WriterDate releaseDate={formatDateLang("August 18, 2025", lang)} />
    </>
  );
}
