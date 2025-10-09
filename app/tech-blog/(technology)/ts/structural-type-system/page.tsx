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
import { formatDateLang } from "@/utils/formatDateLang";
import { getServerTranslation } from "@/utils/getServerTranslation";

export default async function StructuralTypeSystemPage() {
  const { t, lang } = await getServerTranslation("structural-type-system");

  return (
    <>
      {/* Page Header */}
      <PageHeader>
        <HeaderTitle>Structural Type System</HeaderTitle>
      </PageHeader>
      {/* Getting Started Section */}
      <SectionWrapper id="getting-started">
        <ContentSimpleParagraph>
          <span>
            لو قابلت أكتر من لغة برمجة في حياتك البرمجية، ومن ضمنهم JavaScript،
            فغالبًا هتلاحظ الاختلاف الكبير بينها وبين اللغات التانية. فهي أكثر
            مرونة Flexibility وديناميكية Dynamic، ومش يتقيّدك بنفس الكم من
            القوانين والمحددات الموجودة في لغات برمجة تانية.
          </span>
          <span>
            لكن المرونة الكبيرة دي بتفتح الباب أمام احتمالات أكبر للأخطاء، وسلوك
            غير متوقع للكود. حتى إن بعض المبرمجين في بدايات تعاملهم مع
            JavaScript بيشكوا إن الكود بيتصرف بطريقة غريبة، وقد يطنوا إن المشكلة
            في اللغة نفسها، لكن في الحقيقة السبب هو القواعد الديناميكية Dynamic
            Rules الموجودة داخل اللغة، واللي قد لا يكونوا مدركينها بعد.
          </span>
          <span>
            وبناءً عليه ظهرت الحاجة لنظام أكثر صرامة في التعامل مع الأنواع
            Stricter Type Control في JavaScript، ليتيح التحقق من أنواع المتغيرات
            Type Checking قبل تشغيل الكود. ومن هنا ظهر TypeScript ليقدّم نظام
            أنواع Type System أقوى ومبني فوق JavaScript نفسها.
          </span>
          <span>لكن قبل ما نتعمق أكتر، خلينا نسأل بعض الأسئلة المتعلقة:</span>
          <SectionList>
            <span>ما هو النوع Type أصلًا؟</span>
            <span>وما المقصود بوجود نظام أنواع Type System، وما دوره؟</span>
            <span>
              وليه اختارت TypeScript تحديدًا النظام الهيكلي Structural Type
              System ليكون الأساس اللي تعتمد عليه في التحقق من الأنواع داخل
              JavaScript؟
            </span>
            <span>
              وإزاي بترتبط طبيعة JavaScript الديناميكية بالأفكار اللي خلت البعض
              يظن أن سلوك الكود فيها غير منطقي أحيانًا؟
            </span>
          </SectionList>
        </ContentSimpleParagraph>
        <DocsImage src={`/images/tech-blog/ts/structural-type-1.svg`} />
      </SectionWrapper>

      {/* What is a Type? */}
      <SectionWrapper id="what-is-a-type">
        <SectionTitle>ما هو النوع Type؟</SectionTitle>
        <ContentSimpleParagraph>
          <span>
            الـ Type في لغة البرمجة هو ببساطة دلالة بتوضح نوع البيانات اللي
            بيتعامل معاها المتغير.
          </span>
          <span>
            يعني لو اتفقنا إن في متغير رقمي من نوع Number، فده معناه إننا متفقين
            ضمنيًا إنه هيخزن أرقام فقط، ومش ممكن يبقى نصّي String مثلًا، والعكس
            صحيح.
          </span>
          <span>
            ومع اختلاف لغات البرمجة، ممكن نلاقي أنواع بيانات مختلفة أو تسميات
            أكتر للـ Types اللي بتدعمها كل لغة، وفي لغات تانية بتسمح كمان إنك
            تعرّف أنواعك الخاصة Custom Types اللي بتجمع أكتر من نوع أو شكل
            للبيانات في Type واحد.
          </span>
          <b>
            ومن هنا بييجي دور نظام الأنواع Type System، اللي بينظّم العلاقة بين
            الأنواع المختلفة وهنتكلم عنه في الفقرة الجاية:
          </b>
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* What is a Type System? */}
      <SectionWrapper id="what-is-a-type-system">
        <SectionTitle>ما هو نظام الأنواع Type System؟</SectionTitle>
        <ContentSimpleParagraph>
          <span>
            كل لغة برمجة بيكون عندها مجموعة من الأنواع Types الخاصة بيها، وبتحط
            كمان قواعد بتحدّد إزاي الأنواع دي تتفاعل مع بعض، وإيه العمليات اللي
            ممكن تتم على كل نوع من غير ما يحصل خطأ.
          </span>
          <span>
            القواعد دي هي اللي بتخلي اللغة تمنع عمليات غير منطقية على أنواع
            معينة، فلو حاولنا نجمع رقم مع نص مثلًا، ممكن نواجه Code Error بيقول
            إن العملية دي غير مسموحة.
          </span>
          <span>
            لكن مش كل اللغات بتتعامل بنفس الصرامة دي. في لغات مرنة زي
            JavaScript، ممكن تجمع متغيرين من نوعين مختلفين، وده بيحصل من خلال
            خاصية اسمها Coercion التحويل التلقائي للأنواع، واللي بتحاول فيها
            JavaScript تغيّر نوع أحد الأطراف علشان العملية تبقى منطقية — يعني
            مثلًا لما تجمع رقم مع نص، بتحوّل الرقم لنص وتكمّل العملية عادي.
          </span>
          <span>
            أما لغات تانية زي Python، فهي أكتر صرامة، ومش هتسمح بالعملية دي إلا
            لما تحوّل كل المتغيرات يدويًا للأرقام، وإلا هتواجه Code Error واضح
            بيقولك إن الأنواع غير متوافقة.
          </span>
          <b>
            وده ياخدنا للنقطة اللي بعد كده واللي تقريبًا بدأنا نتكلم عنها في
            السطور اللي فاتت: ليه بنقول إن JavaScript Weekly Dynamic Language
            لغة ديناميكية وضعيفة الأنواع؟
          </b>
        </ContentSimpleParagraph>
        <DocsImage src={`/images/tech-blog/ts/JSvsTS.svg`} />
      </SectionWrapper>

      {/* Why JS Weekly Dynamic Language? */}

      <SectionWrapper id="what-js-dynamic-week-language">
        <SectionTitle>
          ليه بنقول إن JavaScript لغة ديناميكية وضعيفة الأنواع Weekly Dynamic
          Language؟
        </SectionTitle>
        <ContentSimpleParagraph>
          <span>
            لغة JavaScript تعتبر ديناميكية Dynamic Language، وده معناه إن
            المتغيرات Variables فيها ممكن تحتوي على قيم من أنواع مختلفة أثناء
            التشغيل Run Time. بالتالي، نفس المتغير اللي بدأ مثلًا بقيمة رقمية
            Number، ممكن ياخد بعد كده قيمة نصية String أو حتى نوع تاني تمامًا.
          </span>
          <CodeSpace
            language="bash"
            codeBlocks={[
              `let x = 5; // قيمة رقمية`,
              ` x = "Hello"; // قيمة نصية`,
              `let x = [1,2]; // Array`,
            ]}
          />
          <span>
            أما عن كونها ضعيفة الأنواع Weakly Typed Language، فده لأن نظام
            الأنواع فيها Type System بيسمحلك كمطوّر إنك تنفّذ عمليات بين متغيرات
            من أنواع مختلفة، من غير ما تكون مضطر تغيّر الأنواع بنفسك. اللغة
            نفسها بتقوم بالتحويل تلقائيًا علشان تخلي الأنواع متوافقة مع العملية
            المطلوبة، وده بيتم ضمنيًا من خلال خاصية اسمها Coercion التحويل
            الضمني للأنواع. التحويل ده بيتم وفقًا لمجموعة من القواعد والأولويات
            اللي محددها محرك JavaScript نفسه.
          </span>
          <CodeSpace
            language="bash"
            codeBlocks={[
              `let num = 5; // قيمة رقمية`,
              `let str = "10" // قيمة نصية`,
              `let result = num + str; // Implicit Coercion تحويل ضمني`,
              `console.log(result); // Output: "510"`,
            ]}
          />
          <CodeSpace
            language="bash"
            codeBlocks={[
              `let num = 2; // قيمة رقمية`,
              `let bool = true; //   Logical قيمة منطقية`,
              `let result = bool + num; // Implicit Coercion تحويل ضمني`,
              `console.log(result); // Output: 3`,
            ]}
          />
          <span>
            ومع كل المرونة دي في JavaScript، بدأ يظهر جانب تاني من القصة — اللي
            هو صعوبة التنبؤ بسلوك الكود وارتفاع احتمالية الأخطاء الناتجة عن ضعف
            نظام الأنواع فيها. ومن هنا بدأت الحاجة لأداة تساعد المطورين يسيطروا
            أكتر على الأنواع Types، ويكتشفوا الأخطاء مبكرًا قبل ما الكود يتشغّل.
          </span>
          <b>
            وده بالضبط الهدف اللي ظهرت TypeScript علشانه، بل واختارت كمان إنها
            تستخدم نظام أنواع خاص اسمه Structural Type System، علشان توازن بين
            مرونة JavaScript ودقّة التحقق من الأنواع.
          </b>
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* What is a Structural Typed System? */}
      <SectionWrapper id="what-is-a-structural-typed-system">
        <SectionTitle>
          يعني إيه Structural Type System وليه TypeScript بتستخدمه؟
        </SectionTitle>
        <ContentSimpleParagraph>
          <span>
            الـ Structural Type System هو نظام بيحدّد تطابق الأنواع بناءً على
            البنية أو الشكل مش على الاسم أو الوراثة. بمعنى إن لو عندنا نوعين
            مختلفين، لكن الخصائص properties والأنواع الداخلية ليهم متطابقة،
            فوقتها بيعتبرهم النظام من نفس النوع — حتى لو مش بيشاركوا نفس الـ
            Type أو الـ Interface أو مش متكوّنين من نفس الـ Class.
          </span>
          <b>ببساطة، الحكم هنا بيكون على التركيب structure مش الاسم name.</b>
          <span>
            اختارت TypeScript النظام ده لأنها مصممة أصلاً علشان تشتغل بانسيابية
            مع JavaScript، اللي بتعتمد بشكل كبير على الكائنات المجهولة Anonymous
            Objects زي Function Expressions وObject Literals، فكان لازم يكون
            عندها نظام مرن كفاية يتعامل مع الحالات دي بدون تعقيد.
          </span>
          <b>
            الأمثلة الجاية هتوضّح أكتر المبادئ الأساسية للـ Structural Typing،
            لكن نقدر نلخّصها مبدئيًا في ٣ نقاط رئيسية:
          </b>
          <SectionList>
            <span>
              <strong>التطابق الشكلي Shape Compatibility:</strong>
              لو نوعين مختلفين ليهم نفس شكل الخصائص، فبيُعتبروا متوافقين.
            </span>

            <span>
              <strong>
                السماح بالخصائص الإضافية Extra Properties Are Allowed:
              </strong>
              ممكن كائن Object من نوع معين يحتوي على خصائص إضافية مش مذكورة في
              الـ Type الأصلي، وبرضو يُعتبر من نفس النوع طالما الخصائص المطلوبة
              الأساسية موجودة.
            </span>

            <span>
              <strong>مرونة معاملات الدوال Parameter Bivariance:</strong>
              بالنسبة للدوال Functions، النظام الهيكلي بيسمح بمرونة في مطابقة
              أنواع Parameters، بحيث ممكن دالتين يُعتبروا متوافقين حتى لو أنواع
              المعاملات مختلفة شوية — سواء كانت أعمّ أو أخصّ — طالما باقي أجزاء
              التوقيع function signature متوافقة.
            </span>
          </SectionList>
          <CodeSpace
            language="bash"
            codeBlocks={[
              `"// Example1: نفس الخصائص"`,
              ``,
              `interface Point {
      x: number;
      y: number;
}`,
              ``,
              `interface Coordinates {
      x: number;
      y: number;
}`,
              ``,
              `let p: Point = { x: 10, y: 20 };`,
              `let c: Coordinates = p;`,
              ``,
            ]}
          />
          <b> تطابق X و Y مسموح لأن الشكل متطابق.</b>

          <CodeSpace
            language="bash"
            codeBlocks={[
              `"//- Example2: إضافة خصائص زائدة"`,
              ``,
              `interface Person {
  name: string;
}`,
              ``,
              `let user = { name: "Ahmed", age: 25 };`,
              ``,
              `let p: Person = user;`,
              ``,
            ]}
          />
          <b>
            user عنده خاصية زيادة عن age، بس الـ structural typing بيهتم بالحد
            الأدنى المطلوب (الـ shape الأساسي).
          </b>

          <CodeSpace
            language="bash"
            codeBlocks={[
              `"//- Example 3: التوافق مع الدوال"`,
              ``,
              `type Logger = (msg: string) => void;`,
              ``,
              `function logMessage(fn: Logger) {
  fn("Hello");
}
`,
              `function customLogger(message: string) {
  console.log("Log:", message);
}`,
              ``,
              `logMessage(customLogger); // ✅`,
              ``,
            ]}
          />
        </ContentSimpleParagraph>
        <b>
          الدالة customLogger لها نفس signature زي Logger، حتى لو اسم البراميتر
          مختلف → عادي، المهم الشكل متطابق.
        </b>
        <CodeSpace
          language="bash"
          codeBlocks={[
            `"//- Example 4: Partial Matching"`,
            ``,
            `interface Animal {
  name: string;
}`,
            ``,
            `let dog = { name: "Rex", breed: "German Shepherd" };`,
            ``,
            `let a: Animal = dog; // ✅ شغال`,
          ]}
        />
        <strong>
          هنا dog فيه خصائص أكتر (breed)، لكن لأنه بيحتوي على name فبيمشي مع
          Animal.
        </strong>
      </SectionWrapper>

      {/* Nominal type and structural type? */}
      <SectionWrapper id="nominal-vs-structural-types">
        <SectionTitle>مقارنة بين Structural و Nominal Typing</SectionTitle>
        <ContentSimpleParagraph>
          <span>
            زي ما اتعرفنا على النظام الهيكلي Structural Typing وفهمنا قد إيه هو
            مناسب لطبيعة العمل في TypeScript، لازم نعرف إنه مش النظام الوحيد،
            وإن في أنظمة أنواع تانية مستخدمة في لغات برمجة مختلفة، كل نظام منها
            بيتناسب مع فلسفة اللغة وطبيعة استخدامها.
          </span>
          <span>
            ومن أشهر الأنظمة دي نظام الأنواع الاسمي Nominal Type System، واللي
            بيعتمد على الاسم والتعريف لتحديد تطابق الأنواع. بمعنى إن نوعين حتى
            لو عندهم نفس الخصائص ونفس البنية، مش هيُعتبروا من نفس النوع إلا لو
            بيشاركوا نفس الاسم أو فيه علاقة وراثة صريحة بينهم. الأسلوب ده بيزوّد
            الأمان والدقّة في فحص الأنواع، لكنه بيقلل من المرونة مقارنة بالنظام
            الهيكلي.
          </span>

          <CodeSpace
            language="bash"
            codeBlocks={[
              `type USD = { __brand: "USD"; value: number };`,
              `type EGP = { __brand: "EGP"; value: number };`,
              ``,
              `"// متغير من نوع USD"`,
              `const amountInUSD: USD = { __brand: "USD", value: 100 };`,
              ``,
              `"// متغير من نوع EGP"`,
              `const amountInEGP: EGP = { __brand: "EGP", value: 100 };`,
              ``,
              `"// ✅ ده منطقي ومسموح"`,
              `const totalUSD: USD = amountInUSD;`,
              ``,
              `"// ❌ رغم إن البنية واحدة (نفس الخصائص)، ده مش مسموح"`,
              `"// لأن النوعين مختلفين "اسميًا"`,
              `const invalid: USD = amountInEGP; // Error`,
            ]}
          />

          <span>
            وبناء عليه فا النظام الهيكلي Structural Typing بيدّي قدر كبير من
            المرونة في التعامل مع الأنواع داخل TypeScript، وبيخلي الكود أقرب في
            طبيعته لـ JavaScript بس بشكل أكثر أمان وتنظيم.
          </span>
          <b>
            لكن زي أي نظام، ليه جوانب قوة بتميزه، وليه كمان شوية تحديات أو قيود
            لازم نكون عارفينها علشان نستخدمه صح. وده اللي هنتكلم عنه بالتفصيل في
            الجزء الجاي:
          </b>
        </ContentSimpleParagraph>
      </SectionWrapper>

      {/* What is advantages of Structural Typed System? */}
      <SectionWrapper id="what-is-advantages-of-structural-type-system">
        <DocsImage src={`/images/tech-blog/ts/ProsVSCons.svg`} />

        <SectionTitle>ما هي مميزات الـ Structural Type System</SectionTitle>
        <SectionList>
          <span>
            <strong>المرونة Flexibility:</strong>بيسمح بالتعامل بانسيابية ومرونة
            مع أنواع Types مختلفة تشترك في نفس البنية Structure بدون الحاجة
            لتطابق أسماء الأنواع.
          </span>
          <span>
            <strong>تقليل الكود المتكرر Boilerplate Reduction:</strong>
            لأن التوافق بيتم بناءً على الشكل والبنية فقط، مش لازم نعرف أنواع
            جديدة أو نكرر تعريفات — وده يقلل الكود المكرر بشكل ملحوظ.
          </span>
          <span>
            <strong>سهولة إعادة الاستخدام Resuability:</strong>
            بما إن الحكم على النوع بيكون بناءً على البنية، نقدر نعيد استخدام نفس
            الـ Types في أماكن مختلفة طالما شكلها متشابه.
          </span>
          <span>
            <strong>التوافق مع Java Script:</strong>
            النظام متوافق جدًا مع طبيعة JavaScript الديناميكية، وده بيخلي
            TypeScript تندمج بسهولة مع مشاريع JavaScript القائمة بالفعل.
          </span>
        </SectionList>
        <span>
          رغم إن النظام الهيكلي في TypeScript بيوفّر مرونة كبيرة في التعامل مع
          الأنواع، إلا إن ليه بعض القيود والتحديات اللي لازم نكون على وعي بيها
          علشان نستخدمه بشكل آمن وفعّال.
        </span>
      </SectionWrapper>

      {/* What is Stricts of Structural Typed System? */}
      <SectionWrapper id="what-is-stricts-of-structural-type-system">
        <SectionTitle>
          ما هي محددات وقيود الـ Structural Type System؟
        </SectionTitle>
        <SectionList>
          <span>
            <strong>
              احتمال التوافق غير المقصود Unintended Compatibility:
            </strong>
            أحيانًا نوعين ممكن يتطابقوا في الشكل (structure) لكن يختلفوا في
            المعنى أو الغرض. وده ممكن يسبب أخطاء في المنطق لو تم الاعتماد على
            التطابق الشكلي فقط بدون النظر للنية التصميمية وراء كل نوع.
          </span>
          <span>
            <strong>التوازن بين الأمان والمرونة Safety vs. Flexibility:</strong>
            النظام ده بيقدم مرونة كبيرة، لكنه ممكن يقلل من مستوى الأمان لو
            المطوّر مش مدرك حدود استخدامه للأنواع المختلفة. بمعنى آخر، سهولة
            التوافق بين الأنواع ممكن تخلي TypeScript تتساهل في قبول أشياء مش
            مقصودة فعليًا.
          </span>
          <span>
            <strong>غياب الانعكاس Lack of Reflection:</strong>
            فحص الأنواع في TypeScript بيتم أثناء وقت الترجمة Compile Time فقط،
            مش وقت التشغيل Run Time. بالتالي، مفيش طريقة مباشرة لفحص أو التأكد
            من الـ Type أثناء تنفيذ الكود، وده بيحدّ من إمكانيات بعض العمليات
            الديناميكية.
          </span>

          <span>
            <strong>صعوبة تتبّع الأخطاء Debugging Difficulty</strong>
            لأن التوافق بين الأنواع بيحصل ضمنيًا، فـ TypeScript مش هتعتبر وجود
            خطأ طالما الشكل الخارجي للنوع صحيح. وده ممكن يصعّب تتبّع الأخطاء
            المنطقية أو حالات سوء الاستخدام — خصوصًا لما تكون الأنواع مختلفة في
            المعنى لكن متشابهة في الشكل.
          </span>
        </SectionList>
      </SectionWrapper>

      <RelatedQuestions
        questions={[
          "إزاي بتتعامل لغات البرمجة المختلفة مع الـ Custom Types؟",
          "هل ممكن JavaScript في المستقبل تدعم نوع من أنواع الـ Static Typing بنفسها بدون TypeScript؟",
          "ماهي كل قواعدالـ Coercion في JavaScript؟",
          "هل ممكن نخلط بين النظامين (Structural + Nominal) في مشروع واحد؟",
          "هل في لغات بتستخدم مزيج بين Nomnial و Structural Typing؟",
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

// 1- what is structural types system?
// 2- Nominal Type System.
// 3- Nominal vs Structural.

// 4- usability in ts.
//

// https://www.geeksforgeeks.org/typescript/typescript-structural-typing/?utm_source=chatgpt.com
// https://code-and-cozy.medium.com/javascript-fundamentals-understanding-why-it-is-a-dynamic-and-weak-language-7e31b06b3794

/**
نوع جافا سكريبت 
وبناء عليه نوع تايب سكريبت والفرق بينه وبين نومينال تايب
محددات ستراكشرال تايب
مميزات ستراكشرال تايب



 */
