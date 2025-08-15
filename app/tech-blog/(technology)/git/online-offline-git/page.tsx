import ContentSimpleParagraph from "@/Components/techBlog/DocsUtils/ContentSimpleParagraph";
import HeaderTitle from "@/Components/techBlog/DocsUtils/HeaderTitle";
import PageHeader from "@/Components/techBlog/DocsUtils/PageHeaderWrapper";
import SectionWrapper from "@/Components/techBlog/DocsUtils/SectionWrapper";
// import { getServerTranslation } from "@/utils/getServerTranslation";
// import parse from "html-react-parser";

export default async function OnlineOfflineGITPage() {
  //   const { t, lang } = await getServerTranslation("online-offline-git");

  return (
    <>
      {/* Page Header */}
      <PageHeader>
        <HeaderTitle>ahmed</HeaderTitle>
      </PageHeader>

      {/* Getting Started Section */}
      <SectionWrapper id="">
        {/* What is git? */}
        <ContentSimpleParagraph>ahmed</ContentSimpleParagraph>
      </SectionWrapper>
    </>
  );
}
