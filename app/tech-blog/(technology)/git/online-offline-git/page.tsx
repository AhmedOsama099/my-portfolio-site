import ContentSimpleParagraph from "@/Components/techBlog/DocsUtils/ContentSimpleParagraph";
import HeaderTitle from "@/Components/techBlog/DocsUtils/HeaderTitle";
import PageHeader from "@/Components/techBlog/DocsUtils/PageHeaderWrapper";
import Resources from "@/Components/techBlog/DocsUtils/Resources";
import SectionTitle from "@/Components/techBlog/DocsUtils/SectionTitle";
import SectionWrapper from "@/Components/techBlog/DocsUtils/SectionWrapper";
// import { getServerTranslation } from "@/utils/getServerTranslation";
// import parse from "html-react-parser";

export default async function OnlineOfflineGITPage() {
  //   const { t, lang } = await getServerTranslation("online-offline-git");

  return (
    <>
      {/* Page Header */}
      <PageHeader>
        <HeaderTitle>هل يحتاج Git إلى إنترنت</HeaderTitle>
      </PageHeader>

      {/* Online Offline Git */}
      <SectionWrapper id="conflict-between-git-and-github">
        {/* What is git? */}
        <ContentSimpleParagraph>
          <span>
            ناس كتير بتخلط بين GIT و GIT Hub باعتبار الإتنين حاجة واحدة أو
            مرتبطين ببعض بالضرورة، وبيغيب عنهم فكرة إن GIT Hub ماهو إلا تبني
            لتكنولوجيا GIT من خلال تطبيق اسمه GIT Hub، وهنا يظهر السؤال:
          </span>
        </ContentSimpleParagraph>
      </SectionWrapper>
      <SectionWrapper id="does-git-need-the-internet">
        {/* What is git? */}
        <ContentSimpleParagraph>
          <SectionTitle>
            هل GIT لازم يشتغل Online من خلال تطبيق على الإنترنت؟
          </SectionTitle>
          <span>
            الإجابة باختصار هي لأ، فا بالإضافة لإدارة GIT من خلال خادم متصل
            بالإنترنت Online Server. نقدر نستخدمه بصورة محلية Local على الجهاز
            الخاص بينا فقط، أو بين مجموعة من الأجهزة مرتبطة بشبكة Network من
            خلال بروتوكول خاص بـ GIT اسمه Local بطرق زي استخدام بوتوكول نظام
            ملفات الشبكة Network File System NFS، الأمر اللي يخلينا نسأل سؤال
            تاني:
          </span>
        </ContentSimpleParagraph>
      </SectionWrapper>

      <SectionWrapper id="what-protocols-does-git-work-on">
        <SectionTitle>ما هي البروتوكولات اللي بيعمل عليها GIT؟</SectionTitle>
      </SectionWrapper>

      <Resources
        items={[
          {
            name: "git",
            url: "https://git-scm.com/book/ms/v2/Git-on-the-Server-The-Protocols",
          },
        ]}
      />
    </>
  );
}
