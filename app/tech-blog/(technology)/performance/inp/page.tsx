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
  const title = "INP (Interaction to Next Paint) — The Core Web Vital for Real-World Responsiveness";
  const description =
    "A deep-dive guide into INP (Interaction to Next Paint): replacing FID, the 3 latency phases (Input Delay, Processing, Presentation), eliminating Layout Thrashing, and sub-200ms optimization.";
  const url =
    "https://ahmedosamadev.vercel.app/tech-blog/performance/inp";

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
          url: "/images/tech-blog/performance/inp-header.svg",
          width: 1200,
          height: 480,
          alt: "INP Core Web Vitals Responsiveness Guide",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/tech-blog/performance/inp-header.svg"],
    },
  };
}

export default async function INPPage() {
  const { t, lang } = await getServerTranslation("inp");

  return (
    <>
      {/* Page Header */}
      <PageHeader>
        <HeaderTitle>{t("inp.title")}</HeaderTitle>
      </PageHeader>

      {/* Header Banner */}
      <DocsImage src="/images/tech-blog/performance/inp-header.svg" />

      {/* Getting Started Section */}
      <SectionWrapper id="getting-started">
        <ContentSimpleParagraph>
          {parseWithSpacing(t("inp.gettingStarted.p1"))}
          {parseWithSpacing(t("inp.gettingStarted.p2"))}
          {parseWithSpacing(t("inp.gettingStarted.p3"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("inp.gettingStarted.questions.q1"))}
          {parseWithSpacing(t("inp.gettingStarted.questions.q2"))}
          {parseWithSpacing(t("inp.gettingStarted.questions.q3"))}
          {parseWithSpacing(t("inp.gettingStarted.questions.q4"))}
          {parseWithSpacing(t("inp.gettingStarted.questions.q5"))}
        </SectionList>
      </SectionWrapper>

      {/* What is INP */}
      <SectionWrapper id="what-is-inp">
        <SectionTitle>{parseWithSpacing(t("inp.whatIsInp.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("inp.whatIsInp.p1"))}
          {parseWithSpacing(t("inp.whatIsInp.p2"))}
          {parseWithSpacing(t("inp.whatIsInp.p3"))}
        </ContentSimpleParagraph>

        {/* Triggers & Eligible Gestures */}
        <SectionTitle>{parseWithSpacing(t("inp.whatIsInp.triggers.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("inp.whatIsInp.triggers.intro"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("inp.whatIsInp.triggers.mouse"))}
          {parseWithSpacing(t("inp.whatIsInp.triggers.touch"))}
          {parseWithSpacing(t("inp.whatIsInp.triggers.keyboard"))}
          {parseWithSpacing(t("inp.whatIsInp.triggers.excluded"))}
        </SectionList>

        {/* Why No INP Reported */}
        <SectionTitle>{parseWithSpacing(t("inp.whatIsInp.noInp.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("inp.whatIsInp.noInp.intro"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("inp.whatIsInp.noInp.reason1"))}
          {parseWithSpacing(t("inp.whatIsInp.noInp.reason2"))}
          {parseWithSpacing(t("inp.whatIsInp.noInp.reason3"))}
        </SectionList>
      </SectionWrapper>

      {/* Scoring Thresholds */}
      <SectionWrapper id="scoring-thresholds">
        <SectionTitle>{parseWithSpacing(t("inp.scoring.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("inp.scoring.intro"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("inp.scoring.good"))}
          {parseWithSpacing(t("inp.scoring.needsImprovement"))}
          {parseWithSpacing(t("inp.scoring.poor"))}
        </SectionList>
      </SectionWrapper>

      {/* FID vs INP Evolution */}
      <SectionWrapper id="fid-vs-inp">
        <SectionTitle>{parseWithSpacing(t("inp.fidVsInp.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("inp.fidVsInp.p1"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("inp.fidVsInp.points.fidFlaw1"))}
          {parseWithSpacing(t("inp.fidVsInp.points.fidFlaw2"))}
          {parseWithSpacing(t("inp.fidVsInp.points.inpAdvantage"))}
        </SectionList>
      </SectionWrapper>

      {/* Anatomy of Interaction Latency */}
      <SectionWrapper id="latency-breakdown">
        <SectionTitle>{parseWithSpacing(t("inp.latencyBreakdown.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("inp.latencyBreakdown.intro"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("inp.latencyBreakdown.phases.inputDelay"))}
          {parseWithSpacing(t("inp.latencyBreakdown.phases.processingDuration"))}
          {parseWithSpacing(t("inp.latencyBreakdown.phases.presentationDelay"))}
        </SectionList>

        {/* Anatomical Diagram */}
        <DocsImage src={`/images/tech-blog/performance/inp-breakdown-${lang}.svg`} />
      </SectionWrapper>

      {/* Performance API Suite */}
      <SectionWrapper id="performance-apis">
        <SectionTitle>{parseWithSpacing(t("inp.performanceApis.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("inp.performanceApis.intro"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("inp.performanceApis.apis.now"))}
          {parseWithSpacing(t("inp.performanceApis.apis.timeOrigin"))}
          {parseWithSpacing(t("inp.performanceApis.apis.getEntries"))}
          {parseWithSpacing(t("inp.performanceApis.apis.navigationTiming"))}
          {parseWithSpacing(t("inp.performanceApis.apis.observer"))}
        </SectionList>
      </SectionWrapper>

      {/* Measuring INP Programmatically */}
      <SectionWrapper id="measuring-inp">
        <SectionTitle>{parseWithSpacing(t("inp.measuring.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("inp.measuring.p1"))}
        </ContentSimpleParagraph>

        <CodeSpace
          language="typescript"
          codeBlocks={[t("inp.measuring.codeSnippet")]}
        />

        <ContentSimpleParagraph>
          {parseWithSpacing(t("inp.measuring.toolsIntro"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("inp.measuring.tool1"))}
          {parseWithSpacing(t("inp.measuring.tool2"))}
          {parseWithSpacing(t("inp.measuring.tool3"))}
          {parseWithSpacing(t("inp.measuring.tool4"))}
          {parseWithSpacing(t("inp.measuring.tool5"))}
        </SectionList>
      </SectionWrapper>

      {/* Six Optimization Strategies */}
      <SectionWrapper id="optimization-strategies">
        <SectionTitle>{parseWithSpacing(t("inp.optimizations.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("inp.optimizations.intro"))}
        </ContentSimpleParagraph>

        {/* Strategy 1: Yield to Main Thread */}
        <SectionTitle>{parseWithSpacing(t("inp.optimizations.opt1.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("inp.optimizations.opt1.p1"))}
          {parseWithSpacing(t("inp.optimizations.opt1.solution"))}
        </ContentSimpleParagraph>

        {/* Strategy 2: Eliminate Layout Thrashing */}
        <SectionTitle>{parseWithSpacing(t("inp.optimizations.opt2.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("inp.optimizations.opt2.p1"))}
        </ContentSimpleParagraph>

        <CodeSpace
          language="javascript"
          codeBlocks={[
            t("inp.optimizations.opt2.unoptimizedCode"),
            t("inp.optimizations.opt2.optimizedCode"),
          ]}
        />

        {/* Strategy 3: Minimize DOM Size */}
        <SectionTitle>{parseWithSpacing(t("inp.optimizations.opt3.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("inp.optimizations.opt3.p1"))}
        </ContentSimpleParagraph>

        {/* Strategy 4: HTML Streaming vs Heavy JS Hydration */}
        <SectionTitle>{parseWithSpacing(t("inp.optimizations.opt4.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("inp.optimizations.opt4.p1"))}
        </ContentSimpleParagraph>

        {/* Strategy 5: Idle Time Scheduling */}
        <SectionTitle>{parseWithSpacing(t("inp.optimizations.opt5.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("inp.optimizations.opt5.p1"))}
        </ContentSimpleParagraph>

        {/* Strategy 6: Passive Listener Myth */}
        <SectionTitle>{parseWithSpacing(t("inp.optimizations.opt6.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("inp.optimizations.opt6.p1"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* Architecture Comparison */}
      <SectionWrapper id="summary-comparison">
        <SectionTitle>{parseWithSpacing(t("inp.comparison.title"))}</SectionTitle>

        <Comparison
          firstLabel={t("inp.comparison.slowLabel")}
          secondLabel={t("inp.comparison.fastLabel")}
        >
          {parseWithSpacing(t("inp.comparison.differences.tasks"))}
          {parseWithSpacing(t("inp.comparison.differences.tasksOpt"))}
          {parseWithSpacing(t("inp.comparison.differences.reflow"))}
          {parseWithSpacing(t("inp.comparison.differences.reflowOpt"))}
          {parseWithSpacing(t("inp.comparison.differences.dom"))}
          {parseWithSpacing(t("inp.comparison.differences.domOpt"))}
          {parseWithSpacing(t("inp.comparison.differences.thirdParty"))}
          {parseWithSpacing(t("inp.comparison.differences.thirdPartyOpt"))}
          {parseWithSpacing(t("inp.comparison.differences.hydration"))}
          {parseWithSpacing(t("inp.comparison.differences.hydrationOpt"))}
        </Comparison>
      </SectionWrapper>

      {/* Related Questions */}
      <RelatedQuestions
        questions={[
          t("inp.relatedQuestions.q1"),
          t("inp.relatedQuestions.q2"),
          t("inp.relatedQuestions.q3"),
          t("inp.relatedQuestions.q4"),
          t("inp.relatedQuestions.q5"),
        ]}
      />

      {/* Resources */}
      <Resources
        items={[
          {
            name: "blog",
            url: "https://web.dev/articles/inp",
          },
          {
            name: "medium",
            url: "https://www.corewebvitals.io/core-web-vitals/interaction-to-next-paint",
          },
          {
            name: "geeksforgeeks",
            url: "https://developer.mozilla.org/en-US/docs/Glossary/Interaction_to_next_paint",
          },
        ]}
      />

      {/* Date */}
      <WriterDate releaseDate={formatDateLang("October 12, 2026", lang)} />
    </>
  );
}
