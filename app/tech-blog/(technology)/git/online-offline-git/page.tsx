import CodeSpace from "@/Components/techBlog/DocsUtils/CodeSpace";
import ContentSimpleParagraph from "@/Components/techBlog/DocsUtils/ContentSimpleParagraph";
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

export default async function OnlineOfflineGITPage() {
  const { t, lang } = await getServerTranslation("online-offline-git");

  return (
    <>
      {/* Page Header */}
      <PageHeader>
        <HeaderTitle>{t("doesGitNeedInternet.title")}</HeaderTitle>
      </PageHeader>

      {/* Intro */}
      <SectionWrapper id="conflict-between-git-and-github">
        <ContentSimpleParagraph>
          {parseWithSpacing(t("doesGitNeedInternet.intro.p1"))}
          {parseWithSpacing(t("doesGitNeedInternet.intro.p2"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* Question */}
      <SectionWrapper id="does-git-need-the-internet">
        <SectionTitle>{t("doesGitNeedInternet.question.title")}</SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("doesGitNeedInternet.question.p1"))}
          {parseWithSpacing(t("doesGitNeedInternet.question.p2"))}
          {parseWithSpacing(t("doesGitNeedInternet.question.p3"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* Protocols Definition */}
      <SectionWrapper id="what-are-protocols">
        <SectionTitle>
          {t("doesGitNeedInternet.protocolsDefinition.title")}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("doesGitNeedInternet.protocolsDefinition.p1"))}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* Protocols Types */}
      <SectionWrapper id="what-protocols-does-git-work-on">
        <SectionTitle>
          {t("doesGitNeedInternet.protocolsTypes.title")}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("doesGitNeedInternet.protocolsTypes.p1"))}
          {parseWithSpacing(
            t("doesGitNeedInternet.protocolsTypes.list.group1")
          )}
          {parseWithSpacing(
            t("doesGitNeedInternet.protocolsTypes.list.group2")
          )}
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* Protocols Difference */}
      <SectionWrapper id="difference-between-protocols">
        <SectionTitle>
          {t("doesGitNeedInternet.protocolsDifference.title")}
        </SectionTitle>
        <ContentSimpleParagraph>
          {parseWithSpacing(t("doesGitNeedInternet.protocolsDifference.p1"))}
        </ContentSimpleParagraph>

        <SectionList>
          {parseWithSpacing(
            t("doesGitNeedInternet.protocolsDifference.list.local")
          )}
        </SectionList>
        <CodeSpace
          language="bash"
          codeBlocks={[
            `git clone "path"`,
            `git remote add origin "path"`,
            `git push "path"`,
          ]}
        />
        <SectionList>
          {parseWithSpacing(
            t("doesGitNeedInternet.protocolsDifference.list.others")
          )}
        </SectionList>
        <CodeSpace
          language="bash"
          codeBlocks={[
            `git clone "url"`,
            `git remote add origin "url"`,
            `git push "url"`,
          ]}
        />
      </SectionWrapper>

      <RelatedQuestions
        questions={[
          "doesGitNeedInternet.relatedQuestions.q1",
          "doesGitNeedInternet.relatedQuestions.q2",
        ]}
      />

      <Resources
        items={[
          {
            name: "git",
            url: "https://git-scm.com/book/ms/v2/Git-on-the-Server-The-Protocols",
          },
          {
            name: "tutorialsPoint",
            url: "https://www.tutorialspoint.com/git/git-local-protocol.htm",
          },
          {
            name: "gitScripts",
            url: "https://gitscripts.com/git-protocol",
          },
        ]}
      />
      <WriterDate releaseDate={formatDateLang("August 18, 2025", lang)} />
    </>
  );
}
