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
  const title = "LCP (Largest Contentful Paint) — The Core Web Vital for Perceived Speed";
  const description =
    "A deep-dive guide into LCP (Largest Contentful Paint): eligible vs excluded elements, 4 subparts breakdown, fetchpriority='high', modern image formats (AVIF/WebP), and render-delay elimination.";
  const url =
    "https://ahmedosamadev.vercel.app/tech-blog/performance/lcp";
  const image =
    "https://ahmedosamadev.vercel.app/images/tech-blog/performance/lcp-og.jpg";

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
          alt: "LCP Core Web Vitals Performance Guide",
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

export default async function LCPPage() {
  const { t, lang } = await getServerTranslation("lcp");

  return (
    <>
      {/* Page Header */}
      <PageHeader>
        <HeaderTitle>{t("lcp.title")}</HeaderTitle>
      </PageHeader>

      {/* Header Banner */}
      <DocsImage src="/images/tech-blog/performance/lcp-header.svg" />

      {/* Getting Started Section */}
      <SectionWrapper id="getting-started">
        <ContentSimpleParagraph>
          {parseWithSpacing(t("lcp.gettingStarted.p1"))}
          {parseWithSpacing(t("lcp.gettingStarted.p2"))}
          {parseWithSpacing(t("lcp.gettingStarted.p3"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("lcp.gettingStarted.questions.q1"))}
          {parseWithSpacing(t("lcp.gettingStarted.questions.q2"))}
          {parseWithSpacing(t("lcp.gettingStarted.questions.q3"))}
          {parseWithSpacing(t("lcp.gettingStarted.questions.q4"))}
          {parseWithSpacing(t("lcp.gettingStarted.questions.q5"))}
        </SectionList>
      </SectionWrapper>

      {/* What is LCP */}
      <SectionWrapper id="what-is-lcp">
        <SectionTitle>{parseWithSpacing(t("lcp.whatIsLcp.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("lcp.whatIsLcp.p1"))}
          {parseWithSpacing(t("lcp.whatIsLcp.p2"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* Eligible vs Excluded LCP Elements */}
      <SectionWrapper id="lcp-elements">
        <SectionTitle>{parseWithSpacing(t("lcp.lcpElements.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("lcp.lcpElements.intro"))}
        </ContentSimpleParagraph>

        {/* Eligible */}
        <SectionTitle>{parseWithSpacing(t("lcp.lcpElements.consideredTitle"))}</SectionTitle>
        <SectionList>
          {parseWithSpacing(t("lcp.lcpElements.consideredItems.img"))}
          {parseWithSpacing(t("lcp.lcpElements.consideredItems.svgImage"))}
          {parseWithSpacing(t("lcp.lcpElements.consideredItems.video"))}
          {parseWithSpacing(t("lcp.lcpElements.consideredItems.bgUrl"))}
          {parseWithSpacing(t("lcp.lcpElements.consideredItems.text"))}
        </SectionList>

        {/* Excluded */}
        <SectionTitle>{parseWithSpacing(t("lcp.lcpElements.excludedTitle"))}</SectionTitle>
        <SectionList>
          {parseWithSpacing(t("lcp.lcpElements.excludedItems.opacity"))}
          {parseWithSpacing(t("lcp.lcpElements.excludedItems.fullViewport"))}
          {parseWithSpacing(t("lcp.lcpElements.excludedItems.lowEntropy"))}
        </SectionList>
      </SectionWrapper>

      {/* How LCP is Reported & Layout Sizing */}
      <SectionWrapper id="lcp-reporting">
        <SectionTitle>{parseWithSpacing(t("lcp.lcpReporting.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("lcp.lcpReporting.p1"))}
          {parseWithSpacing(t("lcp.lcpReporting.p2"))}
          {parseWithSpacing(t("lcp.lcpReporting.p3"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* Scoring Thresholds */}
      <SectionWrapper id="lcp-scoring">
        <SectionTitle>{parseWithSpacing(t("lcp.scoring.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("lcp.scoring.intro"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("lcp.scoring.good"))}
          {parseWithSpacing(t("lcp.scoring.needsImprovement"))}
          {parseWithSpacing(t("lcp.scoring.poor"))}
        </SectionList>
      </SectionWrapper>

      {/* 4-Subpart LCP Time Breakdown */}
      <SectionWrapper id="lcp-breakdown">
        <SectionTitle>{parseWithSpacing(t("lcp.lcpBreakdown.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("lcp.lcpBreakdown.intro"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("lcp.lcpBreakdown.step1"))}
          {parseWithSpacing(t("lcp.lcpBreakdown.step2"))}
          {parseWithSpacing(t("lcp.lcpBreakdown.step3"))}
          {parseWithSpacing(t("lcp.lcpBreakdown.step4"))}
        </SectionList>
        <DocsImage src={`/images/tech-blog/performance/lcp-breakdown-${lang}.svg`} />
      </SectionWrapper>

      {/* Deep-Dive Optimization Strategies */}
      <SectionWrapper id="optimizations">
        <SectionTitle>{parseWithSpacing(t("lcp.optimizations.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("lcp.optimizations.intro"))}
        </ContentSimpleParagraph>

        {/* Phase 1: Resource Load Delay */}
        <SectionTitle>{parseWithSpacing(t("lcp.optimizations.phase1.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("lcp.optimizations.phase1.p1"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("lcp.optimizations.phase1.antiPatterns.jsImg"))}
          {parseWithSpacing(t("lcp.optimizations.phase1.antiPatterns.lazyImg"))}
          {parseWithSpacing(t("lcp.optimizations.phase1.antiPatterns.cssBg"))}
        </SectionList>
        <SectionList>
          {parseWithSpacing(t("lcp.optimizations.phase1.solutions.preload"))}
          {parseWithSpacing(t("lcp.optimizations.phase1.solutions.noLazyAboveFold"))}
          {parseWithSpacing(t("lcp.optimizations.phase1.solutions.lowPriorityOffscreen"))}
          {parseWithSpacing(t("lcp.optimizations.phase1.solutions.sameOrigin"))}
        </SectionList>

        {/* Phase 2: Resource Load Duration */}
        <SectionTitle>{parseWithSpacing(t("lcp.optimizations.phase2.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("lcp.optimizations.phase2.p1"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("lcp.optimizations.phase2.solutions.responsiveImages"))}
          {parseWithSpacing(t("lcp.optimizations.phase2.solutions.modernFormats"))}
          {parseWithSpacing(t("lcp.optimizations.phase2.solutions.compression"))}
          {parseWithSpacing(t("lcp.optimizations.phase2.solutions.fonts"))}
          {parseWithSpacing(t("lcp.optimizations.phase2.solutions.caching"))}
        </SectionList>

        {/* Phase 3: Element Render Delay */}
        <SectionTitle>{parseWithSpacing(t("lcp.optimizations.phase3.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("lcp.optimizations.phase3.p1"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("lcp.optimizations.phase3.solutions.cssBlocking"))}
          {parseWithSpacing(t("lcp.optimizations.phase3.solutions.jsBlocking"))}
          {parseWithSpacing(t("lcp.optimizations.phase3.solutions.ssrSsg"))}
          {parseWithSpacing(t("lcp.optimizations.phase3.solutions.breakLongTasks"))}
        </SectionList>

        {/* Phase 4: TTFB Optimization */}
        <SectionTitle>{parseWithSpacing(t("lcp.optimizations.phase4.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("lcp.optimizations.phase4.p1"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("lcp.optimizations.phase4.solutions.compression"))}
          {parseWithSpacing(t("lcp.optimizations.phase4.solutions.protocols"))}
          {parseWithSpacing(t("lcp.optimizations.phase4.solutions.edgeCdn"))}
        </SectionList>
      </SectionWrapper>

      {/* Measuring LCP */}
      <SectionWrapper id="measuring-lcp">
        <SectionTitle>{parseWithSpacing(t("lcp.measuring.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("lcp.measuring.p1"))}
        </ContentSimpleParagraph>

        <CodeSpace
          language="typescript"
          codeBlocks={[t("lcp.measuring.codeSnippet")]}
        />

        <ContentSimpleParagraph>
          {parseWithSpacing(t("lcp.measuring.toolsIntro"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("lcp.measuring.tool1"))}
          {parseWithSpacing(t("lcp.measuring.tool2"))}
          {parseWithSpacing(t("lcp.measuring.tool3"))}
          {parseWithSpacing(t("lcp.measuring.tool4"))}
        </SectionList>
      </SectionWrapper>

      {/* Comparison: Unoptimized vs Optimized */}
      <SectionWrapper id="summary-comparison">
        <SectionTitle>{parseWithSpacing(t("lcp.comparison.title"))}</SectionTitle>

        <Comparison
          firstLabel={t("lcp.comparison.slowLabel")}
          secondLabel={t("lcp.comparison.fastLabel")}
        >
          {parseWithSpacing(t("lcp.comparison.differences.discoverability"))}
          {parseWithSpacing(t("lcp.comparison.differences.discoverabilityOpt"))}
          {parseWithSpacing(t("lcp.comparison.differences.formatting"))}
          {parseWithSpacing(t("lcp.comparison.differences.formattingOpt"))}
          {parseWithSpacing(t("lcp.comparison.differences.renderBlocking"))}
          {parseWithSpacing(t("lcp.comparison.differences.renderBlockingOpt"))}
          {parseWithSpacing(t("lcp.comparison.differences.ttfb"))}
          {parseWithSpacing(t("lcp.comparison.differences.ttfbOpt"))}
        </Comparison>
      </SectionWrapper>

      {/* Related Questions */}
      <RelatedQuestions
        questions={[
          t("lcp.relatedQuestions.q1"),
          t("lcp.relatedQuestions.q2"),
          t("lcp.relatedQuestions.q3"),
          t("lcp.relatedQuestions.q4"),
          t("lcp.relatedQuestions.q5"),
        ]}
      />

      {/* Resources */}
      <Resources
        items={[
          {
            name: "blog",
            url: "https://web.dev/articles/lcp",
          },
          {
            name: "medium",
            url: "https://web.dev/articles/optimize-lcp",
          },
          {
            name: "geeksforgeeks",
            url: "https://developer.mozilla.org/en-US/docs/Glossary/Largest_contentful_paint",
          },
        ]}
      />

      {/* Date */}
      <WriterDate releaseDate={formatDateLang("October 7, 2026", lang)} />
    </>
  );
}
