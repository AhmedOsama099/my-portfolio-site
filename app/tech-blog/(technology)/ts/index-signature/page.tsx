import CodeSpace from "@/Components/techBlog/DocsUtils/CodeSpace";
import Comparison from "@/Components/techBlog/DocsUtils/Comparison";
import ContentSimpleParagraph from "@/Components/techBlog/DocsUtils/ContentSimpleParagraph";
import DocsImage from "@/Components/techBlog/DocsUtils/DocsImage";
import HeaderTitle from "@/Components/techBlog/DocsUtils/HeaderTitle";
import PageHeader from "@/Components/techBlog/DocsUtils/PageHeaderWrapper";
import Resources from "@/Components/techBlog/DocsUtils/Resources";
import SectionList from "@/Components/techBlog/DocsUtils/SectionList";
import SectionTitle from "@/Components/techBlog/DocsUtils/SectionTitle";
import SectionWrapper from "@/Components/techBlog/DocsUtils/SectionWrapper";
import WriterDate from "@/Components/techBlog/DocsUtils/Writer&Date";
import { parseWithSpacing } from "@/utils/fixPunctuationSpacing";
import { formatDateLang } from "@/utils/formatDateLang";
import { getServerTranslation } from "@/utils/getServerTranslation";

export async function generateMetadata() {
  const title = "TypeScript Index Signatures - الدليل الشامل";
  const description =
    "تعرف على TypeScript Index Signatures وكيف تمكنك من التعامل مع الكائنات ذات الهياكل الديناميكية والمفاتيح غير المعروفة مسبقًا";
  const url =
    "https://my-portfolio-site.ahmedeng099.workers.dev/tech-blog/ts/index-signatures";
  const image = "https://iili.io/KNj018g.png?preview=2";

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
          height: 627,
          alt: "TypeScript Index Signatures Guide",
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

export default async function IndexSignaturePage() {
  const { t, lang } = await getServerTranslation("index-signature");

  return (
    <>
      <PageHeader>
        <HeaderTitle>{t("indexSignature.title")}</HeaderTitle>
      </PageHeader>
      <DocsImage src={`/images/tech-blog/ts/index-signature-header.svg`} />

      {/* Getting Started Section */}
      <SectionWrapper id="getting-started">
        <ContentSimpleParagraph>
          {parseWithSpacing(t("indexSignature.gettingStarted.p1"))}
          {parseWithSpacing(t("indexSignature.gettingStarted.p2"))}
          {parseWithSpacing(t("indexSignature.gettingStarted.b1"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* Definition and Syntax Section */}
      <SectionWrapper id="definition-and-syntax">
        <SectionTitle>{t("indexSignature.definition.title")}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("indexSignature.definition.p1"))}
        </ContentSimpleParagraph>

        <CodeSpace
          language="typescript"
          codeBlocks={[
            t("indexSignature.definition.code1.comment"),
            t("indexSignature.definition.code1.line1"),
            t("indexSignature.definition.code1.line2"),
            t("indexSignature.definition.code1.line3"),
            "",
            t("indexSignature.definition.code2.comment"),
            t("indexSignature.definition.code2.line1"),
            t("indexSignature.definition.code2.line2"),
            t("indexSignature.definition.code2.line3"),
          ]}
        />

        <ContentSimpleParagraph>
          {parseWithSpacing(t("indexSignature.definition.p2"))}
        </ContentSimpleParagraph>

        <CodeSpace
          language="typescript"
          codeBlocks={[
            t("indexSignature.definition.readonlyExample.line1"),
            t("indexSignature.definition.readonlyExample.line2"),
            t("indexSignature.definition.readonlyExample.line3"),
            "",
            t("indexSignature.definition.readonlyExample.line4"),
            t("indexSignature.definition.readonlyExample.line5"),
            t("indexSignature.definition.readonlyExample.line6"),
            "",
            t("indexSignature.definition.readonlyExample.line7"),
            t("indexSignature.definition.readonlyExample.line8"),
            "",
            t("indexSignature.definition.readonlyExample.line9"),
            t("indexSignature.definition.readonlyExample.line10"),
          ]}
        />
      </SectionWrapper>

      {/* Limitations Section */}
      <SectionWrapper id="limitations">
        <SectionTitle>{t("indexSignature.limitations.title")}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("indexSignature.limitations.intro"))}
        </ContentSimpleParagraph>

        <SectionList>
          {/* {parseWithSpacing(t("indexSignature.limitations.keyTypes.title"))} */}
          {parseWithSpacing(
            t("indexSignature.limitations.keyTypes.description")
          )}

          {/* {parseWithSpacing(t("indexSignature.limitations.valueTypes.title"))} */}

          {parseWithSpacing(
            t("indexSignature.limitations.valueTypes.description")
          )}

          {/* {parseWithSpacing(t("indexSignature.limitations.constants.title"))} */}
          {parseWithSpacing(
            t("indexSignature.limitations.constants.description")
          )}
        </SectionList>

        <CodeSpace
          language="typescript"
          codeBlocks={[
            t("indexSignature.limitations.constants.invalidExample.line1"),
            t("indexSignature.limitations.constants.invalidExample.line2"),
            t("indexSignature.limitations.constants.invalidExample.line3"),
            t("indexSignature.limitations.constants.invalidExample.line4"),
            "",
            t("indexSignature.limitations.constants.validExample.line1"),
            t("indexSignature.limitations.constants.validExample.line2"),
            t("indexSignature.limitations.constants.validExample.line3"),
            t("indexSignature.limitations.constants.validExample.line4"),
            "",
            t("indexSignature.limitations.constants.validExample2.line1"),
            t("indexSignature.limitations.constants.validExample2.line2"),
            t("indexSignature.limitations.constants.validExample2.line3"),
          ]}
        />
        <SectionList>
          {parseWithSpacing(
            t("indexSignature.limitations.missingProperties.description1")
          )}
        </SectionList>

        <CodeSpace
          language="typescript"
          codeBlocks={[
            t("indexSignature.limitations.missingProperties.example1.line1"),
            t("indexSignature.limitations.missingProperties.example1.line2"),
            t("indexSignature.limitations.missingProperties.example1.line3"),
          ]}
        />

        <ContentSimpleParagraph>
          {parseWithSpacing(
            t("indexSignature.limitations.missingProperties.description2")
          )}
        </ContentSimpleParagraph>

        <CodeSpace
          language="typescript"
          codeBlocks={[
            t("indexSignature.limitations.missingProperties.example2.line1"),
            t("indexSignature.limitations.missingProperties.example2.line2"),
            t("indexSignature.limitations.missingProperties.example2.line3"),
            t("indexSignature.limitations.missingProperties.example2.line4"),
            t("indexSignature.limitations.missingProperties.example2.line5"),
          ]}
        />

        <ContentSimpleParagraph>
          {parseWithSpacing(
            t("indexSignature.limitations.missingProperties.description3")
          )}
        </ContentSimpleParagraph>

        <CodeSpace
          language="typescript"
          codeBlocks={[
            t("indexSignature.limitations.missingProperties.example3.line1"),
            t("indexSignature.limitations.missingProperties.example3.line2"),
            t("indexSignature.limitations.missingProperties.example3.line3"),
          ]}
        />
      </SectionWrapper>

      {/* Index Signature vs Record Type */}
      <SectionWrapper id="index-signature-vs-record">
        <SectionTitle>{t("indexSignature.comparison.title")}</SectionTitle>

        <ContentSimpleParagraph>
          {/* {parseWithSpacing(t("indexSignature.comparison.intro"))} */}
          {/* "intro": "<span>In TypeScript, we can use different methods to deal with objects with dynamic structures like what we have mentioned.</span>", */}
          {/* "intro": "<span>في <strong>TypeScript</strong> ممكن نستخدم طرق مختلفة للتعامل مع <strong>الكائنات ذات الهياكل الديناميكية  Dynamic Objects</strong> زي ما ذكرنا.</span>", */}

          {parseWithSpacing(t("indexSignature.comparison.question"))}
          {parseWithSpacing(t("indexSignature.comparison.answer"))}
        </ContentSimpleParagraph>

        <CodeSpace
          language="typescript"
          codeBlocks={[t("indexSignature.comparison.recordExample")]}
        />

        <ContentSimpleParagraph>
          {parseWithSpacing(t("indexSignature.comparison.differenceQuestion"))}
        </ContentSimpleParagraph>

        <Comparison
          firstLabel={t("indexSignature.comparison.indexSignature")}
          secondLabel={t("indexSignature.comparison.recordType")}
        >
          {parseWithSpacing(
            t("indexSignature.comparison.differences.keyTypes")
          )}

          {parseWithSpacing(
            t("indexSignature.comparison.differences.keyTypesRecord")
          )}

          {parseWithSpacing(
            t("indexSignature.comparison.differences.additionalProperties")
          )}

          {parseWithSpacing(
            t(
              "indexSignature.comparison.differences.additionalPropertiesRecord"
            )
          )}
        </Comparison>
      </SectionWrapper>

      <Resources
        items={[
          {
            name: "frontendMasters",
            url: "https://frontendmasters.com/courses/typescript-v4/index-signatures/",
          },
          {
            name: "typescript",
            url: "https://www.typescriptlang.org/docs/handbook/2/objects.html?utm_source=chatgpt.com#index-signatures",
          },
          // {
          //   name: "blog",
          //   url: "https://dmitripavlutin.com/typescript-index-signatures",
          // },
          {
            name: "typescriptDeepDive",
            url: "https://basarat.gitbook.io/typescript/type-system/index-signatures",
          },
          // {
          //   name: "velopen",
          //   url: "https://www.velopen.com/blog/typescript-index-signatures",
          // },
        ]}
      />
      <WriterDate releaseDate={formatDateLang("October 09, 2025", lang)} />
    </>
  );
}
