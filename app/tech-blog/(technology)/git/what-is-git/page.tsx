import MotionPageWrapper from "@/Components/motionPageWrapper";
import ContentSimpleParagraph from "@/Components/techBlog/DocsUtils/ContentSimpleParagraph";
import DocsImage from "@/Components/techBlog/DocsUtils/DocsImage";
import HeaderTitle from "@/Components/techBlog/DocsUtils/HeaderTitle";
import PageHeader from "@/Components/techBlog/DocsUtils/PageHeaderWrapper";
import Resources from "@/Components/techBlog/DocsUtils/Resources";
import SectionList from "@/Components/techBlog/DocsUtils/SectionList";
import SectionTitle from "@/Components/techBlog/DocsUtils/SectionTitle";
import SectionWrapper from "@/Components/techBlog/DocsUtils/SectionWrapper";

export default async function TechnologyDocsPage() {
  return (
    <MotionPageWrapper className="max-w-4xl mx-auto relative max-[980px]:mt-16 px-2">
      {/* Page Header */}
      <PageHeader>
        <HeaderTitle>ما هو GIT</HeaderTitle>
      </PageHeader>

      {/* Getting Started Section */}
      <SectionWrapper id="getting-started">
        {/* What is git? */}
        <ContentSimpleParagraph>
          <span>
            <strong>Git</strong> هو أشهر نظام مفتوح المصدر للتحكّم في الإصدارات
            <strong>Distributed Version Control System</strong> في الوقت الحالي،
            واللي بيساعد فرق العمل على إدارة مشاريعهم على اختلاف أحجامها بسهولة
            وسرعة، مع الحفاظ على تناسق العمل بين أعضاء الفريق.
          </span>
          <span>
            وده بيتم عن طريق تتبّع جميع التعديلات اللي بتطرأ على الملفات
            وتسجيلها، وتمكين المطوّرين، من خلال وسائل الدمج المختلفة، من توفيق
            التعديلات دي مع بعض دون فقدان أي جزء منها، بحيث يمتلك كل عضو في
            الفريق نسخة كاملة من المشروع.
          </span>
          <DocsImage src="/images/tech-blog/git/what-is-git-ar-1.svg" />
        </ContentSimpleParagraph>
        {/* Why git is a Version Control? */}
        <SectionTitle>ليه GIT يعتبر Version Control</SectionTitle>
        <ContentSimpleParagraph>
          <span>
            لكل مطوّر دور ومهام مطلوبة منه في المشروع، الأمر اللي بيتطلّب إنه
            يكتب السطور البرمجية المناسبة في الملفات المختلفة، ويدمجها مع باقي
            المطوّرين، ويرجع يعدّل في نفس الملفات أو يضيف سطور جديدة في ملفات
            جديدة حسب تسلسل المهام المطلوبة.
          </span>
          <span>
            ده معناه إنه لما بينشئ الملف ويعمل فيه أول تعديلات، بيكون كده أنشأ
            أول نسخة من الملف ده، ولما يرجع يعدّل مرة تانية، بتكون دي نسخة
            تانية، وهكذا مع استمرار التعديلات.
          </span>
          <span>
            هنا يظهر دور <strong>Git</strong>كـ نظام تحكّم في الإصدارات
            <strong>Version Control</strong>، عن طريق إنه بينظّم الاختلافات بين
            النسخ ويحافظ على تسلسلها الزمني. ومن خلال ده، يقدر المطوّر يعدّل أو
            يضيف بسهولة، ويقارن الاختلافات، ويرجع لنسخة قديمة لو احتاج.
          </span>
          <span>
            أنظمة التحكم في الإصدارات، ومنها Git، تقدر تعمل ده لأي نوع من
            الملفات، سواء كانت برمجية، صور، أو بيانات أخرى.
          </span>
          <DocsImage src="/images/tech-blog/git/what-is-git-ar-2.svg" />
        </ContentSimpleParagraph>

        {/* Why git is a Distributed? */}
        <SectionTitle>ليه GIT يعتبر Distributed</SectionTitle>
        <ContentSimpleParagraph>
          <span>
            كل مشروع بيكون له نوعين من أماكن حفظ النسخ البرمجية: أول مكان على
            الخادم <strong>Server</strong>، وثاني مكان هو الحاسب الآلي الخاص بكل
            مطوّر، وبينهم بتتم العمليات المختلفة من دمج ومزامنة للملفات.
          </span>
          <span>
            نفهم من كده أن <strong>GIT</strong> يعتبر نظام مٌوزَّع{" "}
            <strong>Distributed System</strong>
            لأنه ببساطة بيوفّر كذا نسخة من المشروع الواحد في أماكن متعددة، بدءًا
            من الخادم <strong>Server</strong> وانتهاءًا بالنسخ الموجودة على جهاز
            كل مطوّر، واللي بتكون نسخ كاملة طالما استمرت المزامنة بينها وبين{" "}
            <strong>Server</strong>.
          </span>
          <span>
            وده يخلينا ندرك مجموعة مميزات أساسية ومهمة في الأنظمة المُوزَّعة{" "}
            <strong>Distributed Systems</strong>، وهي:
            <SectionList>
              <span>
                <strong>السرعة:</strong> كل مطوّر لديه نسخة خاصة يمكنه تعديلها
                على جهازه مباشرة.
              </span>
              <span>
                <strong>الاعتمادية:</strong> يمكن بسهولة استبدال نسخة أحد
                المطوّرين المحتوية على آخر التعديلات بنسخة الخادم{" "}
                <strong>Server</strong> لو حصل خلل في نسخة الخادم{" "}
                <strong>Server</strong>.
              </span>
              <span>
                <strong>التعاونية:</strong> يقدر المطوّرون التعاون عبر العمل على
                نسخهم الخاصة ودمجها معًا عند الحاجة.
              </span>
            </SectionList>
          </span>
          <DocsImage src="/images/tech-blog/git/what-is-git-ar-3.svg" />
        </ContentSimpleParagraph>
      </SectionWrapper>

      <Resources
        items={[
          {
            name: "git",
            url: "https://git-scm.com/book/ms/v2/Getting-Started-About-Version-Control",
          },

          {
            name: "freeCodeCamp",
            url: "https://www.freecodecamp.org/news/what-is-git-and-how-to-use-it-c341b049ae61",
          },
          {
            name: "gitLab",
            url: "https://about.gitlab.com/topics/version-control/what-is-git-version-control/?utm_source=chatgpt.com",
          },
        ]}
      />
    </MotionPageWrapper>
  );
}
