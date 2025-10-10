import CodeSpace from "@/Components/techBlog/DocsUtils/CodeSpace";
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
  const title = "TypeScript Structural Type System";
  const description =
    "Explore how TypeScript’s Structural Type System works — its logic, benefits, and how it differs from Nominal Typing with real examples.";
  const url =
    "https://my-portfolio-site.ahmedeng099.workers.dev/tech-blog/ts/structural-type-system";
  const image =
    "https://my-portfolio-site.ahmedeng099.workers.dev/images/tech-blog/ts/preview.png";

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
          url: image,
          width: 1200,
          height: 630,
          alt: "Structural Type System in TypeScript",
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

export default async function StructuralTypeSystemPage() {
  const { t, lang } = await getServerTranslation("structural-type-system");

  return (
    <>
      {/* Page Header */}
      <PageHeader>
        <HeaderTitle>{t("structuralTypeSystem.title")}</HeaderTitle>
      </PageHeader>
      {/* Getting Started Section */}
      <SectionWrapper id="getting-started">
        <ContentSimpleParagraph>
          {parseWithSpacing(t("structuralTypeSystem.gettingStarted.p1"))}
          {parseWithSpacing(t("structuralTypeSystem.gettingStarted.p2"))}
          {parseWithSpacing(t("structuralTypeSystem.gettingStarted.p3"))}
          {parseWithSpacing(t("structuralTypeSystem.gettingStarted.p4"))}
        </ContentSimpleParagraph>
        <SectionList>
          {parseWithSpacing(
            t("structuralTypeSystem.gettingStarted.questions.q1")
          )}
          {parseWithSpacing(
            t("structuralTypeSystem.gettingStarted.questions.q2")
          )}
          {parseWithSpacing(
            t("structuralTypeSystem.gettingStarted.questions.q3")
          )}
          {parseWithSpacing(
            t("structuralTypeSystem.gettingStarted.questions.q4")
          )}
        </SectionList>
        <DocsImage src={`/images/tech-blog/ts/structural-type-1.svg`} />
      </SectionWrapper>

      {/* What is a Type? */}
      <SectionWrapper id="what-is-a-type">
        <SectionTitle>
          {parseWithSpacing(t("structuralTypeSystem.whatIsType.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("structuralTypeSystem.whatIsType.p1"))}
          {parseWithSpacing(t("structuralTypeSystem.whatIsType.p2"))}
          {parseWithSpacing(t("structuralTypeSystem.whatIsType.p3"))}
          {parseWithSpacing(t("structuralTypeSystem.whatIsType.p4"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* What is a Type System? */}
      <SectionWrapper id="what-is-a-type-system">
        <SectionTitle>
          {parseWithSpacing(t("structuralTypeSystem.whatIsTypeSystem.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("structuralTypeSystem.whatIsTypeSystem.p1"))}
          {parseWithSpacing(t("structuralTypeSystem.whatIsTypeSystem.p2"))}
          {parseWithSpacing(t("structuralTypeSystem.whatIsTypeSystem.p3"))}
          {parseWithSpacing(t("structuralTypeSystem.whatIsTypeSystem.p4"))}
          {parseWithSpacing(t("structuralTypeSystem.whatIsTypeSystem.p5"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* Why JS Weekly Dynamic Language? */}
      <SectionWrapper id="what-js-dynamic-week-language">
        <SectionTitle>
          {parseWithSpacing(t("structuralTypeSystem.whyJsDynamic.title"))}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("structuralTypeSystem.whyJsDynamic.p1"))}
        </ContentSimpleParagraph>

        <CodeSpace
          language="bash"
          codeBlocks={[
            t("structuralTypeSystem.whyJsDynamic.code1.line1"),
            t("structuralTypeSystem.whyJsDynamic.code1.line2"),
            t("structuralTypeSystem.whyJsDynamic.code1.line3"),
          ]}
        />
        <ContentSimpleParagraph>
          {parseWithSpacing(t("structuralTypeSystem.whyJsDynamic.p2"))}
        </ContentSimpleParagraph>

        <CodeSpace
          language="bash"
          codeBlocks={[
            t("structuralTypeSystem.whyJsDynamic.code2.line1"),
            t("structuralTypeSystem.whyJsDynamic.code2.line2"),
            t("structuralTypeSystem.whyJsDynamic.code2.line3"),
            t("structuralTypeSystem.whyJsDynamic.code2.line4"),
          ]}
        />
        <CodeSpace
          language="bash"
          codeBlocks={[
            t("structuralTypeSystem.whyJsDynamic.code3.line1"),
            t("structuralTypeSystem.whyJsDynamic.code3.line2"),
            t("structuralTypeSystem.whyJsDynamic.code3.line3"),
            t("structuralTypeSystem.whyJsDynamic.code3.line4"),
          ]}
        />
        <ContentSimpleParagraph>
          {parseWithSpacing(t("structuralTypeSystem.whyJsDynamic.p3"))}
          {parseWithSpacing(t("structuralTypeSystem.whyJsDynamic.p4"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      <DocsImage src={`/images/tech-blog/ts/JSvsTS.svg`} />

      {/* What is a Structural Typed System? */}
      <SectionWrapper id="what-is-a-structural-typed-system">
        <SectionTitle>
          {t("structuralTypeSystem.whatIsStructuralTypeSystem.title")}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(
            t("structuralTypeSystem.whatIsStructuralTypeSystem.p1")
          )}
          {parseWithSpacing(
            t("structuralTypeSystem.whatIsStructuralTypeSystem.p2")
          )}
          {parseWithSpacing(
            t("structuralTypeSystem.whatIsStructuralTypeSystem.p3")
          )}
          {parseWithSpacing(
            t("structuralTypeSystem.whatIsStructuralTypeSystem.p4")
          )}
        </ContentSimpleParagraph>

        <SectionList>
          {parseWithSpacing(
            t(
              "structuralTypeSystem.whatIsStructuralTypeSystem.principles.shape"
            )
          )}
          {parseWithSpacing(
            t(
              "structuralTypeSystem.whatIsStructuralTypeSystem.principles.extra"
            )
          )}
          {parseWithSpacing(
            t(
              "structuralTypeSystem.whatIsStructuralTypeSystem.principles.functions"
            )
          )}
        </SectionList>
        <CodeSpace
          language="bash"
          codeBlocks={[
            `"// ${t(
              "structuralTypeSystem.whatIsStructuralTypeSystem.example1.title"
            )}"`,
            ``,
            t("structuralTypeSystem.whatIsStructuralTypeSystem.example1.code"),
          ]}
        />
        <b>
          {t(
            "structuralTypeSystem.whatIsStructuralTypeSystem.example1.explanation"
          )}
        </b>
        <CodeSpace
          language="bash"
          codeBlocks={[
            `"//- ${t(
              "structuralTypeSystem.whatIsStructuralTypeSystem.example2.title"
            )}"`,
            ``,
            t("structuralTypeSystem.whatIsStructuralTypeSystem.example2.code"),
          ]}
        />
        <b>
          {t(
            "structuralTypeSystem.whatIsStructuralTypeSystem.example2.explanation"
          )}
        </b>
        <CodeSpace
          language="bash"
          codeBlocks={[
            `"//- ${t(
              "structuralTypeSystem.whatIsStructuralTypeSystem.example3.title"
            )}"`,
            ``,
            t("structuralTypeSystem.whatIsStructuralTypeSystem.example3.code"),
          ]}
        />
        <b>
          {t(
            "structuralTypeSystem.whatIsStructuralTypeSystem.example3.explanation"
          )}
        </b>
      </SectionWrapper>

      {/* Nominal type and structural type? */}
      <SectionWrapper id="nominal-vs-structural-types">
        <SectionTitle>
          {t("structuralTypeSystem.nominalVsStructural.title")}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("structuralTypeSystem.nominalVsStructural.p1"))}
          {parseWithSpacing(t("structuralTypeSystem.nominalVsStructural.p2"))}
        </ContentSimpleParagraph>

        <CodeSpace
          language="bash"
          codeBlocks={[t("structuralTypeSystem.nominalVsStructural.code")]}
        />
        <ContentSimpleParagraph>
          {parseWithSpacing(t("structuralTypeSystem.nominalVsStructural.p3"))}
          {parseWithSpacing(t("structuralTypeSystem.nominalVsStructural.p4"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* What is advantages of Structural Typed System? */}
      <SectionWrapper id="what-is-advantages-of-structural-type-system">
        <DocsImage src={`/images/tech-blog/ts/ProsVSCons.svg`} />

        <SectionTitle>
          {t("structuralTypeSystem.advantages.title")}
        </SectionTitle>
        <SectionList>
          {parseWithSpacing(t("structuralTypeSystem.advantages.flexibility"))}
          {parseWithSpacing(t("structuralTypeSystem.advantages.boilerplate"))}
          {parseWithSpacing(t("structuralTypeSystem.advantages.reusability"))}
          {parseWithSpacing(t("structuralTypeSystem.advantages.compatibility"))}
        </SectionList>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("structuralTypeSystem.advantages.note"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* What is Strict of Structural Typed System? */}
      <SectionWrapper id="what-is-strict-of-structural-type-system">
        <SectionTitle>
          {t("structuralTypeSystem.limitations.title")}
        </SectionTitle>
        <SectionList>
          {parseWithSpacing(t("structuralTypeSystem.limitations.unintended"))}
          {parseWithSpacing(t("structuralTypeSystem.limitations.safety"))}
          {parseWithSpacing(t("structuralTypeSystem.limitations.reflection"))}
          {parseWithSpacing(t("structuralTypeSystem.limitations.debugging"))}
        </SectionList>
      </SectionWrapper>

      <RelatedQuestions
        questions={[
          t("structuralTypeSystem.relatedQuestions.q1"),
          t("structuralTypeSystem.relatedQuestions.q2"),
          t("structuralTypeSystem.relatedQuestions.q3"),
          t("structuralTypeSystem.relatedQuestions.q4"),
          t("structuralTypeSystem.relatedQuestions.q5"),
          t("structuralTypeSystem.relatedQuestions.q6"),
        ]}
      />

      <Resources
        items={[
          {
            name: "adabeat",
            url: "https://adabeat.com/fp/introduction-to-type-systems/?utm_source=chatgpt.com",
          },
          {
            name: "gilbertGhost",
            url: "https://gilbert.ghost.io/type-systems-for-beginners-an-introduction/?utm_source=chatgpt.com",
          },
          {
            name: "typescript",
            url: "https://www.typescriptlang.org/play/?#code/PTAEBUE8AcFMGUDGAnAltALqVBnUBDUeDZAV0Q1OXwBsIZYjIcNYBbAOlAEFQWyKVWqAwMAUCD7NWbUG1j4AdngwALfFgDuq2ItCIA9m2j40igOYiGOADT04SNJlAHFNSBLAZ8Aa1h5URQwDAkRDUiCRHTl2ACNYZDxXKMZROA4xTwhVXGwAvUMg6hYREMUjQOE0xhxpdltQbQTGSANSLPCaABN9ZAVWEU0Q6rxY0ixOnvKsfBwcVHM9NXZS0AVEVSyDZeQueFhGWAAPfGMaWAAucrZKmgBaNMDzTMkAMQNkNZOz2DtlnFSQ2wQQSADN8Ih-AQ+vojNBzqx3FkSEocKCEtRYudgQQ+CRyJRqHRqlIWOwLplAqxkODIaAAEK0OgAbzEoFAXVQp1g1IuoEUpDY8WQAG4xABfMRUsEQxjwaA6GGs9mc7m8-mC4ViyViBGgWJMvmMmh0AC8oGZHK58nVAEYAAygcVivU4BXNPnyxWMc2W1U2hJ8gBMjudmTd3tA5oNJrFMbNfHdfTFWQAkqDGox8F0eoFcSTtKgNniBISmZBYUF8IE8EyXKDkdF5EKEkkM8a6Eoel7mn8dHpUDMaDgQoglPrYFkAVhghPcfGXJ8I80MlKQTTZRBSPELWyrWrAxqW6K9+cLGo+QLj9rMnrKPE+eBtz6LfuA8g+bag3Yz+YL6AAGYnRTe8X3jOM63NUCU0kelYDHUgAXnOsugMKFplAdQADcs1AX81D7XRsAmJQMPiLJZnmRZYB6WdlhEZ9QCw0wuSxWAuAACQMTRYBw5A7DrAwM3o5thRwLZ2zrUxGBrVAulSZ8BMUHoR2I-Rxx3SiFkUGjV0kKAHBQdAsFyQxjBYiw1ghVQYmPHF6JJfBzGrZQMCydYbO2RVVj41BQQrZZUE+WAAEdSFoQdID0sBeFBCIKFQZJcnHAxYgAK3gky9AAKXwZjHGMghlLU0y4WkrosjzQh5huGhTFAcEcByVwuAAdUHTydNARDYDiuhjhREQ0EQHxoTaZTG0YExqDYHAKV1Hlen6WAOyjUAAAp-R5Q8r2FABKKMAD4Nr9a1ts+cU9pdRaUGWnsYXNTazvVXaEjsHrU0UDZ-D5WIDAMc4lAO01juVUA+kJPRToPD9uoBT7vrwAB+N9ztAAAqUB7Q4ACAE5QD5LbqWAiUU1ujQECTF9ydYDsxRplbIKWin7tgGCwAMhAjOcTRUBNAgTW4jbXuQA7Z1C8K6HWkW7D+gGFEUPbKqWaJpphhoxiwDDpc1N79X+wHFdAO5jp148layTmCp5vm6E5HAx2QWjojlw37OiUEgpKLTFnkIIsniBCkMHAByPA+IrMy2GSUEPlAXL8u5iYDHk1YcB8dBQBMOYniyNXZsafsUkgEOYQwnSaN0l4wHeYLvnhVJolMagS7wWPkAAUWssP1JNA0Rsw2Yoj6KbTFOWwsmYmhSF+YF5KOIrncYPrO2QFvjewDMraTq0ukUEO3MkHBSGgaAPiwe3Hc5Sz8-Ohplj0VpSEaNpukHnDSmVxBp9T3iEgrAwmBEpLBCGwXwjdl7xQwMAvAYCMDFhPvNAA2gzDs61bR7TsKgpk60gx7QALocHbl3DY611rxjsAAfUCPPKh8YcDA1BnuQoI5zgcBoAYcw5CmRXQlLwrIAA5EIrhGAVy6CodQGBoqgAAEo8ioEsaw0JUh9Apj0GgqA-AuHSplBoXYioVk5KCdEfQvr+AojCMy00aKNA6ikPg3JtEZQoGsMKEVRDg1IOcWsf0cKrj1AzORXRVqPSJjtXWosjonVRtSLBAMPh8gAER9C6Ikp0-DsH83NIEmidMxA5OCUzTJNB2agFapGeintEgzBzr7XQWgPg+DwOtZYFY-pqHfowMJosA7jHsQCQoPRUL+H3lgFpLsUJoRwKMzpuJDAcNFhkIAA",
          },
          {
            name: "typescript",
            url: "https://www.typescriptlang.org/docs/handbook/type-compatibility.html?utm_source=chatgpt.com",
          },
          {
            name: "geeksforgeeks",
            url: "https://www.geeksforgeeks.org/typescript/typescript-structural-typing/?utm_source=chatgpt.com",
          },
          {
            name: "medium",
            url: "https://code-and-cozy.medium.com/javascript-fundamentals-understanding-why-it-is-a-dynamic-and-weak-language-7e31b06b3794",
          },
        ]}
      />
      <WriterDate releaseDate={formatDateLang("October 09, 2025", lang)} />
    </>
  );
}
