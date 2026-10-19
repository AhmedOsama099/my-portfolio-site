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
  const title =
    "TTFB (Time to First Byte) — The Real Foundation of Web Performance";
  const description =
    "A comprehensive engineering guide to TTFB (Time to First Byte): full lifecycle breakdown from navigation to first byte, measurement APIs, benchmarks, root causes, optimization strategies, and Core Web Vitals impact.";
  const url = "https://ahmedosamadev.vercel.app/tech-blog/performance/ttfb";
  const image = "https://ahmedosamadev.vercel.app/images/tech-blog/performance/ttfb-og.jpg";

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
      publishedTime: "2026-09-29T00:00:00.000Z",
      authors: ["Ahmed Osama"],
      images: [
        {
          url: image,
          secureUrl: image,
          width: 1376,
          height: 768,
          type: "image/jpeg",
          alt: "TTFB (Time to First Byte) — Web Performance Guide",
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

export default async function TTFBPage() {
  const { t, lang } = await getServerTranslation("ttfb");

  return (
    <>
      {/* Page Header */}
      <PageHeader>
        <HeaderTitle>{t("ttfb.title")}</HeaderTitle>
      </PageHeader>

      {/* Header Banner */}
      <DocsImage src="/images/tech-blog/performance/ttfb-header.jpg" />

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
        <SectionTitle>
          {parseWithSpacing(t("ttfb.whatIsTtfb.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.whatIsTtfb.p1"))}
          {parseWithSpacing(t("ttfb.whatIsTtfb.p2"))}
          {parseWithSpacing(t("ttfb.whatIsTtfb.p3"))}
          {parseWithSpacing(t("ttfb.whatIsTtfb.p4"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* Section 2: TTFB Lifecycle */}
      <SectionWrapper id="ttfb-lifecycle">
        <SectionTitle>
          {parseWithSpacing(t("ttfb.lifecycle.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.lifecycle.p1"))}
          {parseWithSpacing(t("ttfb.lifecycle.p2"))}
          {parseWithSpacing(t("ttfb.lifecycle.p3"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("ttfb.lifecycle.stages.s1"))}
          {parseWithSpacing(t("ttfb.lifecycle.stages.s2"))}
          {parseWithSpacing(t("ttfb.lifecycle.stages.s3"))}
          {parseWithSpacing(t("ttfb.lifecycle.stages.s4"))}
        </SectionList>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.lifecycle.p4"))}
        </ContentSimpleParagraph>

        {/* Overview Lifecycle Diagram — placed right after Section 2 and before 2.1 */}
        <DocsImage
          src={`/images/tech-blog/performance/ttfb-lifecycle-${lang}.svg`}
        />

        {/* 2.1 DNS Resolution */}
        <SectionTitle className="text-xl mt-6">
          {parseWithSpacing(t("ttfb.lifecycle.dns.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.lifecycle.dns.p1"))}
          {parseWithSpacing(t("ttfb.lifecycle.dns.p2"))}
          {parseWithSpacing(t("ttfb.lifecycle.dns.p3"))}
          {parseWithSpacing(t("ttfb.lifecycle.dns.p4"))}
          {parseWithSpacing(t("ttfb.lifecycle.dns.p5"))}
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
          {parseWithSpacing(t("ttfb.lifecycle.connection.p9"))}
          {parseWithSpacing(t("ttfb.lifecycle.connection.p10"))}
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
          {parseWithSpacing(t("ttfb.lifecycle.travel.p7"))}
          {parseWithSpacing(t("ttfb.lifecycle.travel.p8"))}
          {parseWithSpacing(t("ttfb.lifecycle.travel.p9"))}
        </ContentSimpleParagraph>

        {/* 2.4 Server Processing */}
        <SectionTitle className="text-xl mt-6">
          {parseWithSpacing(t("ttfb.lifecycle.processing.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.lifecycle.processing.p1"))}
          {parseWithSpacing(t("ttfb.lifecycle.processing.p2"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("ttfb.lifecycle.processing.operations.auth"))}
          {parseWithSpacing(t("ttfb.lifecycle.processing.operations.db"))}
          {parseWithSpacing(t("ttfb.lifecycle.processing.operations.external"))}
          {parseWithSpacing(t("ttfb.lifecycle.processing.operations.logic"))}
          {parseWithSpacing(t("ttfb.lifecycle.processing.operations.ssr"))}
        </SectionList>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.lifecycle.processing.p3"))}
          {parseWithSpacing(t("ttfb.lifecycle.processing.p4"))}
          {parseWithSpacing(t("ttfb.lifecycle.processing.p5"))}
          {parseWithSpacing(t("ttfb.lifecycle.processing.p6"))}
          {parseWithSpacing(t("ttfb.lifecycle.processing.p7"))}
          {parseWithSpacing(t("ttfb.lifecycle.processing.p8"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* Section 3: What Is a Good TTFB? */}
      <SectionWrapper id="ttfb-scoring">
        <SectionTitle>{parseWithSpacing(t("ttfb.scoring.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.scoring.p1"))}
          {parseWithSpacing(t("ttfb.scoring.p2"))}
          {parseWithSpacing(t("ttfb.scoring.p3"))}
          {parseWithSpacing(t("ttfb.scoring.p4"))}
        </ContentSimpleParagraph>

        {/* Section 3 Visual Diagram */}
        <DocsImage
          src={`/images/tech-blog/performance/ttfb-scoring-${lang}.svg`}
        />

        {/* Why Field Data Matters */}
        <SectionTitle className="text-xl mt-6">
          {parseWithSpacing(t("ttfb.scoring.rumTitle"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.scoring.p5"))}
          {parseWithSpacing(t("ttfb.scoring.p6"))}
          {parseWithSpacing(t("ttfb.scoring.p7"))}
          {parseWithSpacing(t("ttfb.scoring.p8"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* Section 4: Causes of High TTFB */}
      <SectionWrapper id="slow-ttfb-causes">
        <SectionTitle>{parseWithSpacing(t("ttfb.causes.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.causes.intro1"))}
          {parseWithSpacing(t("ttfb.causes.intro2"))}
        </ContentSimpleParagraph>

        {/* Section 4 Visual Causes Diagram */}
        <DocsImage
          src={`/images/tech-blog/performance/ttfb-causes-${lang}.svg`}
        />

        {/* 4.1 DNS & Connection */}
        <SectionTitle className="text-xl mt-6">
          {parseWithSpacing(t("ttfb.causes.dnsConn.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.causes.dnsConn.p1"))}
          {parseWithSpacing(t("ttfb.causes.dnsConn.p2"))}
        </ContentSimpleParagraph>

        {/* 4.2 Distance & Network */}
        <SectionTitle className="text-xl mt-6">
          {parseWithSpacing(t("ttfb.causes.network.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.causes.network.p1"))}
          {parseWithSpacing(t("ttfb.causes.network.p2"))}
          {parseWithSpacing(t("ttfb.causes.network.p3"))}
        </ContentSimpleParagraph>

        {/* 4.3 Server Processing */}
        <SectionTitle className="text-xl mt-6">
          {parseWithSpacing(t("ttfb.causes.server.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.causes.server.p1"))}
          {parseWithSpacing(t("ttfb.causes.server.p2"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("ttfb.causes.server.causes.slowQueries"))}
          {parseWithSpacing(t("ttfb.causes.server.causes.sequentialOps"))}
          {parseWithSpacing(t("ttfb.causes.server.causes.externalServices"))}
          {parseWithSpacing(t("ttfb.causes.server.causes.highResource"))}
          {parseWithSpacing(t("ttfb.causes.server.causes.heavyCompute"))}
        </SectionList>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.causes.server.p3"))}
          {parseWithSpacing(t("ttfb.causes.server.p4"))}
        </ContentSimpleParagraph>

        {/* 4.4 SSR */}
        <SectionTitle className="text-xl mt-6">
          {parseWithSpacing(t("ttfb.causes.ssr.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.causes.ssr.p1"))}
          {parseWithSpacing(t("ttfb.causes.ssr.p2"))}
          {parseWithSpacing(t("ttfb.causes.ssr.p3"))}
          {parseWithSpacing(t("ttfb.causes.ssr.p4"))}
        </ContentSimpleParagraph>

        {/* 4.5 Caching */}
        <SectionTitle className="text-xl mt-6">
          {parseWithSpacing(t("ttfb.causes.caching.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.causes.caching.p1"))}
          {parseWithSpacing(t("ttfb.causes.caching.p2"))}
          {parseWithSpacing(t("ttfb.causes.caching.p3"))}
          {parseWithSpacing(t("ttfb.causes.caching.p4"))}
          {parseWithSpacing(t("ttfb.causes.caching.p5"))}
          {parseWithSpacing(t("ttfb.causes.conclusion"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* Section 5: How to Improve TTFB */}
      <SectionWrapper id="optimizations">
        <SectionTitle>
          {parseWithSpacing(t("ttfb.optimizations.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.optimizations.intro1"))}
          {parseWithSpacing(t("ttfb.optimizations.intro2"))}
        </ContentSimpleParagraph>

        {/* Section 5 Visual Optimization Checklist Diagram */}
        <DocsImage
          src={`/images/tech-blog/performance/ttfb-optimization-${lang}.svg`}
        />

        {/* 5.1 Network & Connection */}
        <SectionTitle className="text-xl mt-6">
          {parseWithSpacing(t("ttfb.optimizations.network.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.optimizations.network.p1"))}
          {parseWithSpacing(t("ttfb.optimizations.network.p2"))}
          {parseWithSpacing(t("ttfb.optimizations.network.p3"))}
        </ContentSimpleParagraph>

        {/* 5.2 Server Processing */}
        <SectionTitle className="text-xl mt-6">
          {parseWithSpacing(t("ttfb.optimizations.server.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.optimizations.server.p1"))}
          {parseWithSpacing(t("ttfb.optimizations.server.p2"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(
            t("ttfb.optimizations.server.solutions.dbAndIndexing"),
          )}
          {parseWithSpacing(
            t("ttfb.optimizations.server.solutions.reduceQueries"),
          )}
          {parseWithSpacing(
            t("ttfb.optimizations.server.solutions.parallelExecution"),
          )}
          {parseWithSpacing(
            t("ttfb.optimizations.server.solutions.externalServices"),
          )}
          {parseWithSpacing(
            t("ttfb.optimizations.server.solutions.resourceMonitoring"),
          )}
        </SectionList>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.optimizations.server.p3"))}
          {parseWithSpacing(t("ttfb.optimizations.server.p4"))}
        </ContentSimpleParagraph>

        {/* 5.3 Caching */}
        <SectionTitle className="text-xl mt-6">
          {parseWithSpacing(t("ttfb.optimizations.caching.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.optimizations.caching.p1"))}
          {parseWithSpacing(t("ttfb.optimizations.caching.p2"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("ttfb.optimizations.caching.levels.cdn"))}
          {parseWithSpacing(t("ttfb.optimizations.caching.levels.app"))}
          {parseWithSpacing(t("ttfb.optimizations.caching.levels.db"))}
          {parseWithSpacing(t("ttfb.optimizations.caching.levels.html"))}
        </SectionList>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.optimizations.caching.p3"))}
          {parseWithSpacing(t("ttfb.optimizations.caching.p4"))}
          {parseWithSpacing(t("ttfb.optimizations.caching.p5"))}
        </ContentSimpleParagraph>

        {/* 5.4 Rendering Strategy */}
        <SectionTitle className="text-xl mt-6">
          {parseWithSpacing(t("ttfb.optimizations.rendering.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.optimizations.rendering.p1"))}
          {parseWithSpacing(t("ttfb.optimizations.rendering.p2"))}
          {parseWithSpacing(t("ttfb.optimizations.rendering.p3"))}
          {parseWithSpacing(t("ttfb.optimizations.rendering.p4"))}
          {parseWithSpacing(t("ttfb.optimizations.rendering.p5"))}
          {parseWithSpacing(t("ttfb.optimizations.rendering.p6"))}
          {parseWithSpacing(t("ttfb.optimizations.rendering.p7"))}
        </ContentSimpleParagraph>

        {/* 5.5 Measurement */}
        <SectionTitle className="text-xl mt-6">
          {parseWithSpacing(t("ttfb.optimizations.measurement.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("ttfb.optimizations.measurement.p1"))}
          {parseWithSpacing(t("ttfb.optimizations.measurement.p2"))}
          {parseWithSpacing(t("ttfb.optimizations.measurement.p3"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* Section 6: Relation to Core Web Vitals */}
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
        <DocsImage
          src={`/images/tech-blog/performance/ttfb-waterfall-${lang}.svg`}
        />
      </SectionWrapper>

      {/* Section 7: Architecture Comparison */}
      <SectionWrapper id="summary-comparison">
        <SectionTitle>
          {parseWithSpacing(t("ttfb.comparison.title"))}
        </SectionTitle>
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
          {parseWithSpacing(t("ttfb.comparison.differences.processing"))}
          {parseWithSpacing(t("ttfb.comparison.differences.processingOpt"))}
          {parseWithSpacing(t("ttfb.comparison.differences.protocol"))}
          {parseWithSpacing(t("ttfb.comparison.differences.protocolOpt"))}
        </Comparison>

        <ContentSimpleParagraph className="mt-6">
          {parseWithSpacing(t("ttfb.comparison.caveats.p1"))}
          {parseWithSpacing(t("ttfb.comparison.caveats.p2"))}
          {parseWithSpacing(t("ttfb.comparison.caveats.p3"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* Section 8: Conclusion */}
      <SectionWrapper id="conclusion">
        <SectionTitle>
          {parseWithSpacing(t("ttfb.conclusion.title"))}
        </SectionTitle>
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
            name: "webDev",
            url: "https://web.dev/articles/ttfb",
          },
          {
            name: "webDev",
            url: "https://web.dev/articles/optimize-ttfb",
          },
          {
            name: "webDev",
            url: "https://web.dev/articles/vitals",
          },
          {
            name: "mdn",
            url: "https://developer.mozilla.org/en-US/docs/Glossary/Time_to_first_byte",
          },
          {
            name: "mdn",
            url: "https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Navigation_and_resource_timings",
          },
          {
            name: "mdn",
            url: "https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming",
          },

          {
            name: "youtube",
            url: "https://www.youtube.com/playlist?list=PLH_t3aTgqQcAFpAc58kJ4QLIn9y_I9zP1",
          },
          {
            name: "masterDev",
            url: "https://master.dev/courses/web-perf-v2/",
          },
        ]}
      />

      {/* Date */}
      <WriterDate releaseDate={formatDateLang("September 29, 2026", lang)} />
    </>
  );
}
