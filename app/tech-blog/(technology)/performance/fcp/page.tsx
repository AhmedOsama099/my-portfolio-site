import CodeSpace from "@/Components/techBlog/DocsUtils/CodeSpace";
import Comparison from "@/Components/techBlog/DocsUtils/Comparison";
import ContentSimpleParagraph from "@/Components/techBlog/DocsUtils/ContentSimpleParagraph";
import DocsImage from "@/Components/techBlog/DocsUtils/DocsImage";
import HeaderTitle from "@/Components/techBlog/DocsUtils/HeaderTitle";
import PageHeader from "@/Components/techBlog/DocsUtils/PageHeaderWrapper";
import RelatedQuestions from "@/Components/techBlog/DocsUtils/RelatedQuestions";
import Resources from "@/Components/techBlog/DocsUtils/Resources";
import SectionList from "@/Components/techBlog/DocsUtils/SectionList";
import SectionTitle from "@/Components/techBlog/DocsUtils/SectionTitle";
import SectionWrapper from "@/Components/techBlog/DocsUtils/SectionWrapper";
import WriterDate from "@/Components/techBlog/DocsUtils/Writer&Date";
import { parseWithSpacing } from "@/utils/fixPunctuationSpacing";
import { formatDateLang } from "@/utils/formatDateLang";
import { getServerTranslation } from "@/utils/getServerTranslation";

export async function generateMetadata() {
  const title = "FCP (First Contentful Paint) — The First Visual Milestone";
  const description =
    "A comprehensive guide to FCP (First Contentful Paint): FP vs FCP vs LCP, the Critical Rendering Path, Render-Blocking CSS, Web Font strategies (FOIT/FOUT), and sub-second optimization.";
  const url =
    "https://ahmedosamadev.vercel.app/tech-blog/performance/fcp";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      images: [
        {
          url: "/images/tech-blog/performance/fcp-header.svg",
          width: 1200,
          height: 480,
          alt: "FCP Web Performance Guide",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/tech-blog/performance/fcp-header.svg"],
    },
  };
}

export default async function FCPPage() {
  const { t, lang } = await getServerTranslation("fcp");

  return (
    <>
      {/* Page Header */}
      <PageHeader>
        <HeaderTitle>{t("fcp.title")}</HeaderTitle>
      </PageHeader>

      {/* Header Banner */}
      <DocsImage src="/images/tech-blog/performance/fcp-header.svg" />

      {/* Getting Started Section */}
      <SectionWrapper id="getting-started">
        <ContentSimpleParagraph>
          {parseWithSpacing(t("fcp.gettingStarted.p1"))}
          {parseWithSpacing(t("fcp.gettingStarted.p2"))}
          {parseWithSpacing(t("fcp.gettingStarted.p3"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("fcp.gettingStarted.questions.q1"))}
          {parseWithSpacing(t("fcp.gettingStarted.questions.q2"))}
          {parseWithSpacing(t("fcp.gettingStarted.questions.q3"))}
          {parseWithSpacing(t("fcp.gettingStarted.questions.q4"))}
        </SectionList>
      </SectionWrapper>

      {/* What is FCP */}
      <SectionWrapper id="what-is-fcp">
        <SectionTitle>{parseWithSpacing(t("fcp.whatIsFcp.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("fcp.whatIsFcp.p1"))}
          {parseWithSpacing(t("fcp.whatIsFcp.p2"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("fcp.whatIsFcp.items.text"))}
          {parseWithSpacing(t("fcp.whatIsFcp.items.images"))}
          {parseWithSpacing(t("fcp.whatIsFcp.items.svg"))}
          {parseWithSpacing(t("fcp.whatIsFcp.items.canvas"))}
        </SectionList>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("fcp.whatIsFcp.p3"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* Visual Progression: FP vs FCP vs LCP */}
      <SectionWrapper id="fp-vs-fcp-vs-lcp">
        <SectionTitle>{parseWithSpacing(t("fcp.fpVsFcpVsLcp.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("fcp.fpVsFcpVsLcp.intro"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("fcp.fpVsFcpVsLcp.fp"))}
          {parseWithSpacing(t("fcp.fpVsFcpVsLcp.fcp"))}
          {parseWithSpacing(t("fcp.fpVsFcpVsLcp.lcp"))}
        </SectionList>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("fcp.fpVsFcpVsLcp.summary"))}
        </ContentSimpleParagraph>
        <DocsImage src={`/images/tech-blog/performance/fcp-comparison-${lang}.svg`} />
      </SectionWrapper>

      {/* Scoring Thresholds */}
      <SectionWrapper id="fcp-scoring">
        <SectionTitle>{parseWithSpacing(t("fcp.scoring.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("fcp.scoring.intro"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("fcp.scoring.good"))}
          {parseWithSpacing(t("fcp.scoring.needsImprovement"))}
          {parseWithSpacing(t("fcp.scoring.poor"))}
        </SectionList>
      </SectionWrapper>

      {/* Critical Rendering Path & TTFB connection */}
      <SectionWrapper id="critical-path">
        <SectionTitle>{parseWithSpacing(t("fcp.criticalPath.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("fcp.criticalPath.p1"))}
          {parseWithSpacing(t("fcp.criticalPath.p2"))}
          {parseWithSpacing(t("fcp.criticalPath.p3"))}
          {parseWithSpacing(t("fcp.criticalPath.p4"))}
        </ContentSimpleParagraph>
        <DocsImage src={`/images/tech-blog/performance/fcp-lifecycle-${lang}.svg`} />
      </SectionWrapper>

      {/* Bottlenecks / Causes */}
      <SectionWrapper id="fcp-bottlenecks">
        <SectionTitle>{parseWithSpacing(t("fcp.causes.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("fcp.causes.intro"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("fcp.causes.cause1"))}
          {parseWithSpacing(t("fcp.causes.cause2"))}
          {parseWithSpacing(t("fcp.causes.cause3"))}
          {parseWithSpacing(t("fcp.causes.cause4"))}
          {parseWithSpacing(t("fcp.causes.cause5"))}
        </SectionList>
      </SectionWrapper>

      {/* Optimization Strategies */}
      <SectionWrapper id="optimizations">
        <SectionTitle>{parseWithSpacing(t("fcp.optimizations.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("fcp.optimizations.intro"))}
        </ContentSimpleParagraph>

        {/* 1. Critical CSS */}
        <SectionTitle>{parseWithSpacing(t("fcp.optimizations.criticalCss.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("fcp.optimizations.criticalCss.description"))}
        </ContentSimpleParagraph>

        {/* 2. Web Fonts */}
        <SectionTitle>{parseWithSpacing(t("fcp.optimizations.fontStrategy.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("fcp.optimizations.fontStrategy.description"))}
        </ContentSimpleParagraph>

        {/* 3. Resource Hints */}
        <SectionTitle>{parseWithSpacing(t("fcp.optimizations.resourceHints.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("fcp.optimizations.resourceHints.description"))}
        </ContentSimpleParagraph>

        {/* 4. Scripts Defer/Async */}
        <SectionTitle>{parseWithSpacing(t("fcp.optimizations.scriptDefer.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("fcp.optimizations.scriptDefer.description"))}
        </ContentSimpleParagraph>

        {/* 5. TTFB Reduction */}
        <SectionTitle>{parseWithSpacing(t("fcp.optimizations.ttfbReduction.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("fcp.optimizations.ttfbReduction.description"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* Measuring FCP */}
      <SectionWrapper id="measuring-fcp">
        <SectionTitle>{parseWithSpacing(t("fcp.measuring.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("fcp.measuring.p1"))}
        </ContentSimpleParagraph>

        <CodeSpace
          language="typescript"
          codeBlocks={[t("fcp.measuring.codeSnippet")]}
        />

        <ContentSimpleParagraph>
          {parseWithSpacing(t("fcp.measuring.toolsIntro"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("fcp.measuring.tool1"))}
          {parseWithSpacing(t("fcp.measuring.tool2"))}
          {parseWithSpacing(t("fcp.measuring.tool3"))}
        </SectionList>
      </SectionWrapper>

      {/* Comparison: Slow vs Fast */}
      <SectionWrapper id="summary-comparison">
        <SectionTitle>{parseWithSpacing(t("fcp.comparison.title"))}</SectionTitle>

        <Comparison
          firstLabel={t("fcp.comparison.slowLabel")}
          secondLabel={t("fcp.comparison.fastLabel")}
        >
          {parseWithSpacing(t("fcp.comparison.differences.css"))}
          {parseWithSpacing(t("fcp.comparison.differences.cssOpt"))}
          {parseWithSpacing(t("fcp.comparison.differences.fonts"))}
          {parseWithSpacing(t("fcp.comparison.differences.fontsOpt"))}
          {parseWithSpacing(t("fcp.comparison.differences.scripts"))}
          {parseWithSpacing(t("fcp.comparison.differences.scriptsOpt"))}
          {parseWithSpacing(t("fcp.comparison.differences.network"))}
          {parseWithSpacing(t("fcp.comparison.differences.networkOpt"))}
        </Comparison>
      </SectionWrapper>

      {/* Related Questions */}
      <RelatedQuestions
        questions={[
          t("fcp.relatedQuestions.q1"),
          t("fcp.relatedQuestions.q2"),
          t("fcp.relatedQuestions.q3"),
          t("fcp.relatedQuestions.q4"),
          t("fcp.relatedQuestions.q5"),
        ]}
      />

      {/* Resources */}
      <Resources
        items={[
          {
            name: "blog",
            url: "https://web.dev/articles/fcp",
          },
          {
            name: "medium",
            url: "https://patrickstox.com/technical-seo/web-performance/web-vitals/first-contentful-paint/",
          },
          {
            name: "geeksforgeeks",
            url: "https://developer.mozilla.org/en-US/docs/Glossary/First_contentful_paint",
          },
        ]}
      />

      {/* Date */}
      <WriterDate releaseDate={formatDateLang("September 30, 2026", lang)} />
    </>
  );
}
