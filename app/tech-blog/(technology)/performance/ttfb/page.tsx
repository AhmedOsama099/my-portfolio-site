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
  const title = "TTFB (Time to First Byte) — The Real Foundation of Web Performance";
  const description =
    "A comprehensive engineering guide to TTFB (Time to First Byte): full lifecycle breakdown from navigation to first byte, measurement APIs, benchmarks, root causes, optimization strategies, and Core Web Vitals impact.";
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

      {/* Introduction */}
      <SectionWrapper id="introduction">
        <SectionTitle>{parseWithSpacing(t("ttfb.intro.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.intro.p1"))}
          {parseWithSpacing(t("ttfb.intro.p2"))}
          {parseWithSpacing(t("ttfb.intro.p3"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* Section 1: What is TTFB */}
      <SectionWrapper id="what-is-ttfb">
        <SectionTitle>{parseWithSpacing(t("ttfb.whatIsTtfb.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.whatIsTtfb.p1"))}
          {parseWithSpacing(t("ttfb.whatIsTtfb.p2"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("ttfb.whatIsTtfb.stages.dns"))}
          {parseWithSpacing(t("ttfb.whatIsTtfb.stages.connection"))}
          {parseWithSpacing(t("ttfb.whatIsTtfb.stages.travel"))}
          {parseWithSpacing(t("ttfb.whatIsTtfb.stages.processing"))}
          {parseWithSpacing(t("ttfb.whatIsTtfb.stages.response"))}
        </SectionList>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.whatIsTtfb.p3"))}
          {parseWithSpacing(t("ttfb.whatIsTtfb.p4"))}
          {parseWithSpacing(t("ttfb.whatIsTtfb.p5"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* Section 2: TTFB Lifecycle */}
      <SectionWrapper id="ttfb-lifecycle">
        <SectionTitle>{parseWithSpacing(t("ttfb.lifecycle.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.lifecycle.p1"))}
          {parseWithSpacing(t("ttfb.lifecycle.p2"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("ttfb.lifecycle.stages.s1"))}
          {parseWithSpacing(t("ttfb.lifecycle.stages.s2"))}
          {parseWithSpacing(t("ttfb.lifecycle.stages.s3"))}
          {parseWithSpacing(t("ttfb.lifecycle.stages.s4"))}
        </SectionList>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.lifecycle.p3"))}
        </ContentSimpleParagraph>

        {/* 2.1 DNS Resolution */}
        <SectionTitle className="text-xl mt-6">
          {parseWithSpacing(t("ttfb.lifecycle.dns.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.lifecycle.dns.p1"))}
          {parseWithSpacing(t("ttfb.lifecycle.dns.p2"))}
          {parseWithSpacing(t("ttfb.lifecycle.dns.p3"))}
          {parseWithSpacing(t("ttfb.lifecycle.dns.p4"))}
        </ContentSimpleParagraph>

        {/* 2.2 Connection Setup */}
        <SectionTitle className="text-xl mt-6">
          {parseWithSpacing(t("ttfb.lifecycle.connection.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.lifecycle.connection.p1"))}
          {parseWithSpacing(t("ttfb.lifecycle.connection.p2"))}
          {parseWithSpacing(t("ttfb.lifecycle.connection.p3"))}
          {parseWithSpacing(t("ttfb.lifecycle.connection.p4"))}
          {parseWithSpacing(t("ttfb.lifecycle.connection.p5"))}
          {parseWithSpacing(t("ttfb.lifecycle.connection.p6"))}
          {parseWithSpacing(t("ttfb.lifecycle.connection.p7"))}
          {parseWithSpacing(t("ttfb.lifecycle.connection.p8"))}
        </ContentSimpleParagraph>

        {/* 2.3 Request Travel and Network Latency */}
        <SectionTitle className="text-xl mt-6">
          {parseWithSpacing(t("ttfb.lifecycle.travel.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.lifecycle.travel.p1"))}
          {parseWithSpacing(t("ttfb.lifecycle.travel.p2"))}
          {parseWithSpacing(t("ttfb.lifecycle.travel.p3"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("ttfb.lifecycle.travel.factors.distance"))}
          {parseWithSpacing(t("ttfb.lifecycle.travel.factors.quality"))}
          {parseWithSpacing(t("ttfb.lifecycle.travel.factors.congestion"))}
          {parseWithSpacing(t("ttfb.lifecycle.travel.factors.routes"))}
          {parseWithSpacing(t("ttfb.lifecycle.travel.factors.protocols"))}
        </SectionList>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.lifecycle.travel.p4"))}
          {parseWithSpacing(t("ttfb.lifecycle.travel.p5"))}
          {parseWithSpacing(t("ttfb.lifecycle.travel.p6"))}
        </ContentSimpleParagraph>

        {/* 2.4 Server Processing */}
        <SectionTitle className="text-xl mt-6">
          {parseWithSpacing(t("ttfb.lifecycle.processing.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.lifecycle.processing.p1"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("ttfb.lifecycle.processing.operations.auth"))}
          {parseWithSpacing(t("ttfb.lifecycle.processing.operations.db"))}
          {parseWithSpacing(t("ttfb.lifecycle.processing.operations.external"))}
          {parseWithSpacing(t("ttfb.lifecycle.processing.operations.ssr"))}
        </SectionList>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.lifecycle.processing.p2"))}
          {parseWithSpacing(t("ttfb.lifecycle.processing.p3"))}
          {parseWithSpacing(t("ttfb.lifecycle.processing.p4"))}
          {parseWithSpacing(t("ttfb.lifecycle.processing.p5"))}
        </ContentSimpleParagraph>

        <DocsImage src={`/images/tech-blog/performance/ttfb-lifecycle-${lang}.svg`} />
      </SectionWrapper>

      {/* Section 3: Measuring TTFB */}
      <SectionWrapper id="measuring-ttfb">
        <SectionTitle>{parseWithSpacing(t("ttfb.measuring.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.measuring.intro"))}
        </ContentSimpleParagraph>

        {/* 3.1 Navigation Timing API */}
        <SectionTitle className="text-xl mt-6">
          {parseWithSpacing(t("ttfb.measuring.navigationTiming.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.measuring.navigationTiming.p1"))}
          {parseWithSpacing(t("ttfb.measuring.navigationTiming.p2"))}
          {parseWithSpacing(t("ttfb.measuring.navigationTiming.p3"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("ttfb.measuring.navigationTiming.properties.startTime"))}
          {parseWithSpacing(t("ttfb.measuring.navigationTiming.properties.responseStart"))}
        </SectionList>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.measuring.navigationTiming.p4"))}
        </ContentSimpleParagraph>

        <CodeSpace
          language="typescript"
          codeBlocks={[t("ttfb.measuring.navigationTiming.codeSnippet")]}
        />

        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.measuring.navigationTiming.p5"))}
          {parseWithSpacing(t("ttfb.measuring.navigationTiming.p6"))}
          {parseWithSpacing(t("ttfb.measuring.navigationTiming.p7"))}
        </ContentSimpleParagraph>

        {/* 3.2 Browser DevTools */}
        <SectionTitle className="text-xl mt-6">
          {parseWithSpacing(t("ttfb.measuring.devTools.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.measuring.devTools.p1"))}
          {parseWithSpacing(t("ttfb.measuring.devTools.p2"))}
          {parseWithSpacing(t("ttfb.measuring.devTools.p3"))}
          {parseWithSpacing(t("ttfb.measuring.devTools.p4"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* Section 4: What Is a Good TTFB? */}
      <SectionWrapper id="ttfb-scoring">
        <SectionTitle>{parseWithSpacing(t("ttfb.scoring.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.scoring.p1"))}
          {parseWithSpacing(t("ttfb.scoring.p2"))}
          {parseWithSpacing(t("ttfb.scoring.p3"))}
          {parseWithSpacing(t("ttfb.scoring.p4"))}
          {parseWithSpacing(t("ttfb.scoring.p5"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* Section 5: Causes of High TTFB */}
      <SectionWrapper id="slow-ttfb-causes">
        <SectionTitle>{parseWithSpacing(t("ttfb.causes.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.causes.intro"))}
        </ContentSimpleParagraph>

        {/* 5.1 DNS & Connection */}
        <SectionTitle className="text-xl mt-6">
          {parseWithSpacing(t("ttfb.causes.dnsConn.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.causes.dnsConn.p1"))}
          {parseWithSpacing(t("ttfb.causes.dnsConn.p2"))}
        </ContentSimpleParagraph>

        {/* 5.2 Distance & Network */}
        <SectionTitle className="text-xl mt-6">
          {parseWithSpacing(t("ttfb.causes.network.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.causes.network.p1"))}
          {parseWithSpacing(t("ttfb.causes.network.p2"))}
        </ContentSimpleParagraph>

        {/* 5.3 Server Processing */}
        <SectionTitle className="text-xl mt-6">
          {parseWithSpacing(t("ttfb.causes.server.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.causes.server.p1"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("ttfb.causes.server.causes.slowQueries"))}
          {parseWithSpacing(t("ttfb.causes.server.causes.sequentialOps"))}
          {parseWithSpacing(t("ttfb.causes.server.causes.externalServices"))}
          {parseWithSpacing(t("ttfb.causes.server.causes.highResource"))}
          {parseWithSpacing(t("ttfb.causes.server.causes.heavyCompute"))}
        </SectionList>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.causes.server.p2"))}
          {parseWithSpacing(t("ttfb.causes.server.p3"))}
        </ContentSimpleParagraph>

        {/* 5.4 SSR */}
        <SectionTitle className="text-xl mt-6">
          {parseWithSpacing(t("ttfb.causes.ssr.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.causes.ssr.p1"))}
          {parseWithSpacing(t("ttfb.causes.ssr.p2"))}
        </ContentSimpleParagraph>

        {/* 5.5 Caching */}
        <SectionTitle className="text-xl mt-6">
          {parseWithSpacing(t("ttfb.causes.caching.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.causes.caching.p1"))}
          {parseWithSpacing(t("ttfb.causes.caching.p2"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* Section 6: How to Improve TTFB */}
      <SectionWrapper id="optimizations">
        <SectionTitle>{parseWithSpacing(t("ttfb.optimizations.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.optimizations.intro"))}
        </ContentSimpleParagraph>

        {/* 6.1 Network & Connection */}
        <SectionTitle className="text-xl mt-6">
          {parseWithSpacing(t("ttfb.optimizations.network.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.optimizations.network.p1"))}
          {parseWithSpacing(t("ttfb.optimizations.network.p2"))}
          {parseWithSpacing(t("ttfb.optimizations.network.p3"))}
        </ContentSimpleParagraph>

        {/* 6.2 Server Processing */}
        <SectionTitle className="text-xl mt-6">
          {parseWithSpacing(t("ttfb.optimizations.server.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.optimizations.server.p1"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("ttfb.optimizations.server.solutions.dbOptimization"))}
          {parseWithSpacing(t("ttfb.optimizations.server.solutions.indexing"))}
          {parseWithSpacing(t("ttfb.optimizations.server.solutions.reduceQueries"))}
          {parseWithSpacing(t("ttfb.optimizations.server.solutions.parallelExecution"))}
          {parseWithSpacing(t("ttfb.optimizations.server.solutions.externalServices"))}
        </SectionList>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.optimizations.server.p2"))}
          {parseWithSpacing(t("ttfb.optimizations.server.p3"))}
        </ContentSimpleParagraph>

        {/* 6.3 Caching */}
        <SectionTitle className="text-xl mt-6">
          {parseWithSpacing(t("ttfb.optimizations.caching.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.optimizations.caching.p1"))}
          {parseWithSpacing(t("ttfb.optimizations.caching.p2"))}
          {parseWithSpacing(t("ttfb.optimizations.caching.p3"))}
        </ContentSimpleParagraph>

        {/* 6.4 Rendering Strategy */}
        <SectionTitle className="text-xl mt-6">
          {parseWithSpacing(t("ttfb.optimizations.rendering.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.optimizations.rendering.p1"))}
          {parseWithSpacing(t("ttfb.optimizations.rendering.p2"))}
          {parseWithSpacing(t("ttfb.optimizations.rendering.p3"))}
        </ContentSimpleParagraph>

        {/* 6.5 Measurement */}
        <SectionTitle className="text-xl mt-6">
          {parseWithSpacing(t("ttfb.optimizations.measurement.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.optimizations.measurement.p1"))}
          {parseWithSpacing(t("ttfb.optimizations.measurement.p2"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* Section 7: Relation to Core Web Vitals */}
      <SectionWrapper id="bottleneck-lcp">
        <SectionTitle>{parseWithSpacing(t("ttfb.vitals.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.vitals.p1"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("ttfb.vitals.metrics.lcp"))}
          {parseWithSpacing(t("ttfb.vitals.metrics.inp"))}
          {parseWithSpacing(t("ttfb.vitals.metrics.cls"))}
        </SectionList>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.vitals.p2"))}
          {parseWithSpacing(t("ttfb.vitals.p3"))}
          {parseWithSpacing(t("ttfb.vitals.p4"))}
          {parseWithSpacing(t("ttfb.vitals.p5"))}
        </ContentSimpleParagraph>
        <DocsImage src={`/images/tech-blog/performance/ttfb-waterfall-${lang}.svg`} />
      </SectionWrapper>

      {/* Section 8: Architecture Comparison */}
      <SectionWrapper id="summary-comparison">
        <SectionTitle>{parseWithSpacing(t("ttfb.comparison.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.comparison.intro"))}
        </ContentSimpleParagraph>

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

        <ContentSimpleParagraph className="mt-6">
          {parseWithSpacing(t("ttfb.comparison.caveats.p1"))}
          {parseWithSpacing(t("ttfb.comparison.caveats.p2"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* Section 9: Conclusion */}
      <SectionWrapper id="conclusion">
        <SectionTitle>{parseWithSpacing(t("ttfb.conclusion.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.conclusion.p1"))}
          {parseWithSpacing(t("ttfb.conclusion.p2"))}
          {parseWithSpacing(t("ttfb.conclusion.p3"))}
        </ContentSimpleParagraph>
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
            url: "https://web.dev/articles/ttfb",
          },
          {
            name: "medium",
            url: "https://web.dev/articles/optimize-ttfb",
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
