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
  const title = "CLS (Cumulative Layout Shift) — The Core Web Vital for Visual Stability";
  const description =
    "A deep-dive guide into CLS (Cumulative Layout Shift): the Impact & Distance fraction calculus, Session Windows, hadRecentInput 500ms rule, scroll-triggered shifts, and zero-shift layout engineering.";
  const url =
    "https://ahmedosamadev.vercel.app/tech-blog/performance/cls";
  const image =
    "https://ahmedosamadev.vercel.app/images/tech-blog/performance/cls-header.jpg";

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
          alt: "CLS Core Web Vitals Visual Stability Guide",
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

export default async function CLSPage() {
  const { t, lang } = await getServerTranslation("cls");

  return (
    <>
      {/* Page Header */}
      <PageHeader>
        <HeaderTitle>{t("cls.title")}</HeaderTitle>
      </PageHeader>

      {/* Header Banner */}
      <DocsImage src="/images/tech-blog/performance/cls-header.svg" />

      {/* Getting Started Section */}
      <SectionWrapper id="getting-started">
        <ContentSimpleParagraph>
          {parseWithSpacing(t("cls.gettingStarted.p1"))}
          {parseWithSpacing(t("cls.gettingStarted.p2"))}
          {parseWithSpacing(t("cls.gettingStarted.p3"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("cls.gettingStarted.questions.q1"))}
          {parseWithSpacing(t("cls.gettingStarted.questions.q2"))}
          {parseWithSpacing(t("cls.gettingStarted.questions.q3"))}
          {parseWithSpacing(t("cls.gettingStarted.questions.q4"))}
          {parseWithSpacing(t("cls.gettingStarted.questions.q5"))}
        </SectionList>
      </SectionWrapper>

      {/* What is CLS */}
      <SectionWrapper id="what-is-cls">
        <SectionTitle>{parseWithSpacing(t("cls.whatIsCls.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("cls.whatIsCls.p1"))}
          {parseWithSpacing(t("cls.whatIsCls.p2"))}
          {parseWithSpacing(t("cls.whatIsCls.p3"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* Business & Brand Impact */}
      <SectionWrapper id="business-impact">
        <SectionTitle>{parseWithSpacing(t("cls.businessImpact.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("cls.businessImpact.intro"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("cls.businessImpact.items.brand"))}
          {parseWithSpacing(t("cls.businessImpact.items.destructiveClicks"))}
          {parseWithSpacing(t("cls.businessImpact.items.accessibility"))}
          {parseWithSpacing(t("cls.businessImpact.items.seo"))}
        </SectionList>
      </SectionWrapper>

      {/* Dev vs Prod Paradox */}
      <SectionWrapper id="dev-vs-prod">
        <SectionTitle>{parseWithSpacing(t("cls.devVsProd.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("cls.devVsProd.p1"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("cls.devVsProd.items.cache"))}
          {parseWithSpacing(t("cls.devVsProd.items.apiLatency"))}
          {parseWithSpacing(t("cls.devVsProd.items.thirdParty"))}
        </SectionList>
      </SectionWrapper>

      {/* Mechanics: What Counts as a Shift */}
      <SectionWrapper id="mechanics">
        <SectionTitle>{parseWithSpacing(t("cls.mechanics.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("cls.mechanics.p1"))}
          {parseWithSpacing(t("cls.mechanics.rule"))}
          {parseWithSpacing(t("cls.mechanics.p2"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* Layout Shift Calculus & Formula */}
      <SectionWrapper id="layout-shift-calculation">
        <SectionTitle>{parseWithSpacing(t("cls.calculation.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("cls.calculation.intro"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("cls.calculation.impactFraction"))}
          {parseWithSpacing(t("cls.calculation.distanceFraction"))}
        </SectionList>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("cls.calculation.scoreExample"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* Session Windows Model */}
      <SectionWrapper id="session-windows">
        <SectionTitle>{parseWithSpacing(t("cls.sessionWindows.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("cls.sessionWindows.p1"))}
          {parseWithSpacing(t("cls.sessionWindows.p2"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("cls.sessionWindows.rules.gap"))}
          {parseWithSpacing(t("cls.sessionWindows.rules.maxDuration"))}
        </SectionList>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("cls.sessionWindows.p3"))}
        </ContentSimpleParagraph>
        <DocsImage src={`/images/tech-blog/performance/cls-breakdown-${lang}.svg`} />
      </SectionWrapper>

      {/* Scoring Thresholds */}
      <SectionWrapper id="scoring-thresholds">
        <SectionTitle>{parseWithSpacing(t("cls.scoring.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("cls.scoring.intro"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("cls.scoring.good"))}
          {parseWithSpacing(t("cls.scoring.needsImprovement"))}
          {parseWithSpacing(t("cls.scoring.poor"))}
        </SectionList>
      </SectionWrapper>

      {/* Expected vs Unexpected Shifts & hadRecentInput */}
      <SectionWrapper id="expected-vs-unexpected">
        <SectionTitle>{parseWithSpacing(t("cls.expectedVsUnexpected.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("cls.expectedVsUnexpected.p1"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("cls.expectedVsUnexpected.items.hadRecentInput"))}
          {parseWithSpacing(t("cls.expectedVsUnexpected.items.asyncAfterInput"))}
          {parseWithSpacing(t("cls.expectedVsUnexpected.items.scrollCaveat"))}
        </SectionList>
      </SectionWrapper>

      {/* Causes & Engineering Solutions */}
      <SectionWrapper id="causes-and-solutions">
        <SectionTitle>{parseWithSpacing(t("cls.commonCausesAndFixes.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("cls.commonCausesAndFixes.intro"))}
        </ContentSimpleParagraph>

        {/* Cause 1: Media Sizing */}
        <SectionTitle>{parseWithSpacing(t("cls.commonCausesAndFixes.cause1.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("cls.commonCausesAndFixes.cause1.problem"))}
          {parseWithSpacing(t("cls.commonCausesAndFixes.cause1.solution"))}
        </ContentSimpleParagraph>

        {/* Cause 2: Dynamic Ads */}
        <SectionTitle>{parseWithSpacing(t("cls.commonCausesAndFixes.cause2.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("cls.commonCausesAndFixes.cause2.problem"))}
          {parseWithSpacing(t("cls.commonCausesAndFixes.cause2.solution"))}
        </ContentSimpleParagraph>

        {/* Cause 3: Web Fonts */}
        <SectionTitle>{parseWithSpacing(t("cls.commonCausesAndFixes.cause3.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("cls.commonCausesAndFixes.cause3.problem"))}
          {parseWithSpacing(t("cls.commonCausesAndFixes.cause3.solution"))}
        </ContentSimpleParagraph>

        {/* Cause 4: CSS Animations */}
        <SectionTitle>{parseWithSpacing(t("cls.commonCausesAndFixes.cause4.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("cls.commonCausesAndFixes.cause4.problem"))}
          {parseWithSpacing(t("cls.commonCausesAndFixes.cause4.solution"))}
        </ContentSimpleParagraph>

        {/* Cause 5: Scroll Headers */}
        <SectionTitle>{parseWithSpacing(t("cls.commonCausesAndFixes.cause5.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("cls.commonCausesAndFixes.cause5.problem"))}
          {parseWithSpacing(t("cls.commonCausesAndFixes.cause5.solution"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* Measuring CLS */}
      <SectionWrapper id="measuring-cls">
        <SectionTitle>{parseWithSpacing(t("cls.measuring.title"))}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("cls.measuring.p1"))}
        </ContentSimpleParagraph>

        <CodeSpace
          language="typescript"
          codeBlocks={[t("cls.measuring.codeSnippet")]}
        />

        <ContentSimpleParagraph>
          {parseWithSpacing(t("cls.measuring.toolsIntro"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(t("cls.measuring.tool1"))}
          {parseWithSpacing(t("cls.measuring.tool2"))}
          {parseWithSpacing(t("cls.measuring.tool3"))}
          {parseWithSpacing(t("cls.measuring.tool4"))}
        </SectionList>
      </SectionWrapper>

      {/* Architecture Comparison */}
      <SectionWrapper id="summary-comparison">
        <SectionTitle>{parseWithSpacing(t("cls.comparison.title"))}</SectionTitle>

        <Comparison
          firstLabel={t("cls.comparison.slowLabel")}
          secondLabel={t("cls.comparison.fastLabel")}
        >
          {parseWithSpacing(t("cls.comparison.differences.images"))}
          {parseWithSpacing(t("cls.comparison.differences.imagesOpt"))}
          {parseWithSpacing(t("cls.comparison.differences.ads"))}
          {parseWithSpacing(t("cls.comparison.differences.adsOpt"))}
          {parseWithSpacing(t("cls.comparison.differences.fonts"))}
          {parseWithSpacing(t("cls.comparison.differences.fontsOpt"))}
          {parseWithSpacing(t("cls.comparison.differences.animations"))}
          {parseWithSpacing(t("cls.comparison.differences.animationsOpt"))}
          {parseWithSpacing(t("cls.comparison.differences.async"))}
          {parseWithSpacing(t("cls.comparison.differences.asyncOpt"))}
        </Comparison>
      </SectionWrapper>

      {/* Related Questions */}
      <RelatedQuestions
        questions={[
          t("cls.relatedQuestions.q1"),
          t("cls.relatedQuestions.q2"),
          t("cls.relatedQuestions.q3"),
          t("cls.relatedQuestions.q4"),
          t("cls.relatedQuestions.q5"),
        ]}
      />

      {/* Resources */}
      <Resources
        items={[
          {
            name: "blog",
            url: "https://web.dev/articles/cls",
          },
          {
            name: "medium",
            url: "https://www.corewebvitals.io/core-web-vitals/cumulative-layout-shift",
          },
          {
            name: "geeksforgeeks",
            url: "https://developer.mozilla.org/en-US/docs/Glossary/Cumulative_layout_shift",
          },
        ]}
      />

      {/* Date */}
      <WriterDate releaseDate={formatDateLang("October 12, 2026", lang)} />
    </>
  );
}
