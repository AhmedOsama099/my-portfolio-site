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
  const title = "TTFB (Time to First Byte) — The Foundation of Web Performance";
  const description =
    "A deep-dive guide into TTFB (Time to First Byte): the 4 lifecycle stages, its critical impact on Core Web Vitals (FCP, LCP), and battle-tested optimization strategies.";
  const url =
    "https://ahmedosamadev.vercel.app/tech-blog/performance/ttfb";

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
          url: "/images/tech-blog/performance/ttfb-header.svg",
          width: 1200,
          height: 480,
          alt: "TTFB Web Performance Guide",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/tech-blog/performance/ttfb-header.svg"],
    },
  };
}

export default async function TTFBPage() {
  const { t, lang } = await getServerTranslation("ttfb");

  return (
    <>
      {/* Page Header */}
      <PageHeader>
        <HeaderTitle>{t("ttfb.title")}</HeaderTitle>
      </PageHeader>
      
      {/* Header Banner */}
      <DocsImage src="/images/tech-blog/performance/ttfb-header.svg" />

      {/* Getting Started Section */}
      <SectionWrapper id="getting-started">
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.gettingStarted.p1"))}
          {parseWithSpacing(t("ttfb.gettingStarted.p2"))}
          {parseWithSpacing(t("ttfb.gettingStarted.p3"))}
          {parseWithSpacing(t("ttfb.gettingStarted.p4"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("ttfb.gettingStarted.questions.q1"))}
          {parseWithSpacing(t("ttfb.gettingStarted.questions.q2"))}
          {parseWithSpacing(t("ttfb.gettingStarted.questions.q3"))}
          {parseWithSpacing(t("ttfb.gettingStarted.questions.q4"))}
        </SectionList>
      </SectionWrapper>

      {/* What is TTFB */}
      <SectionWrapper id="what-is-ttfb">
        <SectionTitle>{parseWithSpacing(t("ttfb.whatIsTtfb.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.whatIsTtfb.p1"))}
          {parseWithSpacing(t("ttfb.whatIsTtfb.p2"))}
          {parseWithSpacing(t("ttfb.whatIsTtfb.p3"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* Lifecycle Breakdown Section */}
      <SectionWrapper id="ttfb-lifecycle">
        <SectionTitle>{parseWithSpacing(t("ttfb.lifecycle.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.lifecycle.intro"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("ttfb.lifecycle.step1"))}
          {parseWithSpacing(t("ttfb.lifecycle.step2"))}
          {parseWithSpacing(t("ttfb.lifecycle.step3"))}
          {parseWithSpacing(t("ttfb.lifecycle.step4"))}
        </SectionList>
        <DocsImage src={`/images/tech-blog/performance/ttfb-lifecycle-${lang}.svg`} />
      </SectionWrapper>

      {/* Scoring & Benchmarks */}
      <SectionWrapper id="ttfb-scoring">
        <SectionTitle>{parseWithSpacing(t("ttfb.scoring.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.scoring.intro"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("ttfb.scoring.good"))}
          {parseWithSpacing(t("ttfb.scoring.needsImprovement"))}
          {parseWithSpacing(t("ttfb.scoring.poor"))}
        </SectionList>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.scoring.mobileNote"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* Bottleneck for LCP & Core Web Vitals */}
      <SectionWrapper id="bottleneck-lcp">
        <SectionTitle>{parseWithSpacing(t("ttfb.bottleneckLcp.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.bottleneckLcp.p1"))}
          {parseWithSpacing(t("ttfb.bottleneckLcp.p2"))}
          {parseWithSpacing(t("ttfb.bottleneckLcp.p3"))}
          {parseWithSpacing(t("ttfb.bottleneckLcp.p4"))}
        </ContentSimpleParagraph>
        <DocsImage src={`/images/tech-blog/performance/ttfb-waterfall-${lang}.svg`} />
      </SectionWrapper>

      {/* What Causes Slow TTFB */}
      <SectionWrapper id="slow-ttfb-causes">
        <SectionTitle>{parseWithSpacing(t("ttfb.causes.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.causes.intro"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("ttfb.causes.cause1"))}
          {parseWithSpacing(t("ttfb.causes.cause2"))}
          {parseWithSpacing(t("ttfb.causes.cause3"))}
          {parseWithSpacing(t("ttfb.causes.cause4"))}
          {parseWithSpacing(t("ttfb.causes.cause5"))}
        </SectionList>
      </SectionWrapper>

      {/* Optimization Strategies */}
      <SectionWrapper id="optimizations">
        <SectionTitle>{parseWithSpacing(t("ttfb.optimizations.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.optimizations.intro"))}
        </ContentSimpleParagraph>

        {/* 1. CDN & Edge */}
        <SectionTitle>{parseWithSpacing(t("ttfb.optimizations.cdn.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.optimizations.cdn.description"))}
        </ContentSimpleParagraph>

        {/* 2. Modern Protocols */}
        <SectionTitle>{parseWithSpacing(t("ttfb.optimizations.protocols.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.optimizations.protocols.description"))}
        </ContentSimpleParagraph>

        {/* 3. HTML Streaming */}
        <SectionTitle>{parseWithSpacing(t("ttfb.optimizations.streaming.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.optimizations.streaming.description"))}
        </ContentSimpleParagraph>

        {/* 4. 103 Early Hints */}
        <SectionTitle>{parseWithSpacing(t("ttfb.optimizations.earlyHints.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.optimizations.earlyHints.description"))}
        </ContentSimpleParagraph>

        {/* 5. Service Workers */}
        <SectionTitle>{parseWithSpacing(t("ttfb.optimizations.serviceWorker.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.optimizations.serviceWorker.description"))}
        </ContentSimpleParagraph>

        {/* 6. Eliminating Redirects */}
        <SectionTitle>{parseWithSpacing(t("ttfb.optimizations.redirects.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.optimizations.redirects.description"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* Measuring TTFB */}
      <SectionWrapper id="measuring-ttfb">
        <SectionTitle>{parseWithSpacing(t("ttfb.measuring.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.measuring.p1"))}
        </ContentSimpleParagraph>

        <CodeSpace
          language="typescript"
          codeBlocks={[t("ttfb.measuring.codeSnippet")]}
        />

        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.measuring.toolsIntro"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("ttfb.measuring.tool1"))}
          {parseWithSpacing(t("ttfb.measuring.tool2"))}
          {parseWithSpacing(t("ttfb.measuring.tool3"))}
        </SectionList>
      </SectionWrapper>

      {/* Comparison: Slow vs Optimized */}
      <SectionWrapper id="summary-comparison">
        <SectionTitle>{parseWithSpacing(t("ttfb.comparison.title"))}</SectionTitle>

        <Comparison
          firstLabel={t("ttfb.comparison.slowLabel")}
          secondLabel={t("ttfb.comparison.fastLabel")}
        >
          {parseWithSpacing(t("ttfb.comparison.differences.hosting"))}
          {parseWithSpacing(t("ttfb.comparison.differences.hostingOpt"))}
          {parseWithSpacing(t("ttfb.comparison.differences.caching"))}
          {parseWithSpacing(t("ttfb.comparison.differences.cachingOpt"))}
          {parseWithSpacing(t("ttfb.comparison.differences.delivery"))}
          {parseWithSpacing(t("ttfb.comparison.differences.deliveryOpt"))}
          {parseWithSpacing(t("ttfb.comparison.differences.protocol"))}
          {parseWithSpacing(t("ttfb.comparison.differences.protocolOpt"))}
        </Comparison>
      </SectionWrapper>

      {/* Related Questions */}
      <RelatedQuestions
        questions={[
          t("ttfb.relatedQuestions.q1"),
          t("ttfb.relatedQuestions.q2"),
          t("ttfb.relatedQuestions.q3"),
          t("ttfb.relatedQuestions.q4"),
          t("ttfb.relatedQuestions.q5"),
        ]}
      />

      {/* Resources */}
      <Resources
        items={[
          {
            name: "blog",
            url: "https://web.dev/articles/optimize-ttfb",
          },
          {
            name: "medium",
            url: "https://liteink.co/blog/what-is-ttfb/",
          },
          {
            name: "geeksforgeeks",
            url: "https://developer.mozilla.org/en-US/docs/Glossary/Time_to_first_byte",
          },
        ]}
      />

      {/* Date */}
      <WriterDate releaseDate={formatDateLang("September 29, 2026", lang)} />
    </>
  );
}
