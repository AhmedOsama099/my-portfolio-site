/* eslint-disable */
// Accessibility section is parked / commented out for now (hidden from the
// tech-blog landing and sitemap). Lint is disabled here so the unfinished
// content doesn't block the build; re-enable when the section goes live.
import PageHeader from "@/Components/techBlog/DocsUtils/PageHeaderWrapper";
import HeaderTitle from "@/Components/techBlog/DocsUtils/HeaderTitle";
import { getServerTranslation } from "@/utils/getServerTranslation";
import SectionWrapper from "@/Components/techBlog/DocsUtils/SectionWrapper";
import ContentSimpleParagraph from "@/Components/techBlog/DocsUtils/ContentSimpleParagraph";
import SectionTitle from "@/Components/techBlog/DocsUtils/SectionTitle";
import SectionList from "@/Components/techBlog/DocsUtils/SectionList";

export default async function GeneralTipsPage() {
  const { t } = await getServerTranslation("");
  return (
    <>
      <PageHeader>
        <HeaderTitle>نصائح عامة عن إمكانية الوصول</HeaderTitle>
      </PageHeader>
      <SectionWrapper id="getting-started">
        <ContentSimpleParagraph>
          Accessibility واللي بيطلق عليها بردو A11y وده بسبب وجود 11 حرف بين أول
          حرف في الكلمة "A" وآخر حرف في الكلمة "Y" زي بردو تسميه
          Internationalizato بـ i18n
        </ContentSimpleParagraph>
      </SectionWrapper>
      {/* What is Accessibility */}
      <SectionWrapper id="what-is-accessibility">
        <SectionTitle>ما هي الـ Accessibility؟</SectionTitle>
        <ContentSimpleParagraph>
          Accessibility هي تصميم الـ <strong>Web Sites</strong> بطريقة تضمن
          سهولة استخدامها من قبل الأشخاص ذوي الإعاقات أو أصحاب الاحتياجات
          الخاصة، الأمر اللي أصبح بيشغل اهتمام أكبر مع الوقت خصوصا في الـ{" "}
          <strong>Web Sites</strong>
          الخاصة بـ <strong>E-Commerce</strong>{" "}
          <strong>Finance & Banking</strong>{" "}
          <strong>Hospitality & Restaurants</strong> <strong>Healthcare</strong>{" "}
          وتحول من مجرد شئ يفضل الاهتمام بيه لأمر واجب مراعاته خصوصا بعد وضع
          قوانين الزامية لمراعاته في أماكن زي أوروبا وأمريكا وتوقيع غرامات فعلية
          على غير الملتزمين في بعض الحالات
        </ContentSimpleParagraph>
      </SectionWrapper>
      {/* What are types of accessibility */}
      <SectionWrapper id="what-are-types-of-accessibility">
        <SectionTitle>ما هي أنواع الإعاقات؟</SectionTitle>
        <SectionList>
          <span>
            <strong>Mobility and Physical:</strong> بعض الأشخاص مش بيقدروا
            يستخدموا الـ <strong>Mouse</strong> أو الـ <strong>Keyboard</strong>{" "}
            وبناء عليه ممكن يضطروا كمان لاستخدام تكنولوجيا تساعدهم في استخدام
            الـ <strong>Web Sites</strong>
          </span>
          <span>
            <strong>Cognitive and Nurological:</strong> الفكرة هنا في صعوبة تلقي
            كم كبير من المعلومات الموجود في الـ <strong>Web Sites</strong> أو
            صعوبة التنقل بين أجزاءه بسهولة
          </span>
          <span>
            <strong>Visual:</strong>
          </span>
          <span>
            <strong>Hearning:</strong>
          </span>
        </SectionList>
      </SectionWrapper>
      {/* What are types of accessibility */}
      <SectionWrapper id="what-are-assesstive-technology">
        <SectionTitle>
          ما هي الوسائل التكنولوجية المستخدمة في إمكانية الوصول؟
        </SectionTitle>
        <ContentSimpleParagraph>
          <span>
            على عكس الشكل الشائع لاستخدام الـ <strong>Computer</strong> والمتمثل
            في استخدام الـ <strong>Mouse</strong> أو الـ{" "}
            <strong>Keyboard</strong>، فا هنلاقي إن الأشخاص من ذوي الاحتياجات
            الخاصة ممكن يلجأو لأشكال مختلفة بحيث تكون مناسبة أكتر لحالاتهم،
            الأمر اللي بيخلي بعض الأشخاص يستخدموا أدوات مختلفة تماما عن اللي
            نعرفه أو يستخدمو بس بعض الأدوات الشائعة مش كلها وهنتعرف على ده
            دلوقتي:
          </span>
        </ContentSimpleParagraph>
      </SectionWrapper>
      <SectionList>
        <span>
          <strong>Keyboard Only:</strong> وده بيكون بسبب إن في ناس مش بتقدر
          تستخدم الـ <strong>Mouse</strong> أو مش بتفضل استخدامه الأمر اللي
          هيضطرهم يلجأو بس للـ <strong>Keyboard</strong> في تصفح الـ{" "}
          <strong>Web Sites</strong> والتنقل من خلال أجزاءه المختلفة باستخدام
          الـ <strong>Tab</strong> أو <strong>Shift + Tab</strong>
        </span>
        <span>
          <strong>Head Wand & Mouth Stick:</strong> وده بيكون عن طريق أجهزة
          بيستخدمها الشخص إما بتثبيتها في الفم أو على الرأس وتحريكها بناء على
          إدراكه البصري، بمعنى إنه بناء على إدراكه إنه المفروض يضغط على جزء معين
          من الشاشة فا بيحرك الجهاز ده إما بتحريك رأسه في حالة الـ{" "}
        </span>
        <span>
          <strong>Head Wand</strong> أو بتحريك الفم في حالة الـ{" "}
        </span>
        <span>
          <strong>Mouth Stick</strong> للجزء المطلوب الضغط عليه
        </span>
        <span>
          <strong>Single Switch</strong>:They use a binary on/off button that
          moves through rows and columns of a digital keyboard to select keys,
          first scanning rows to find the right row, then scanning columns to
          select the specific key
        </span>
        <span>
          <strong>Screen Readers:</strong> عبارة عن <strong>Software </strong>{" "}
          بيقرأ لك المحتوى الموجود على الشاشة بالإضافة لمجموعة من التسهيلات
          المرتبطة بيه اللي بتخليك تتنقل بصورة أسهل خلال الصفحة
        </span>
        <span>
          <strong> Eye Tracker Keyboard:</strong>
        </span>
      </SectionList>
      <SectionWrapper>
        <ContentSimpleParagraph>
          <span>
            الحقيقة إن مراعاة كل الأمور نتج عنها تأثير مشهور وهو{" "}
            <strong>The curb cut effect</strong> وده معناه هنا إن تسهيل الأمر
            على الأشخاص ذوي الاحتياجات الخاصة سهل كمان الأمر على المستخدمين
            العاديين اللي لقوا سهولة أكتر في استخدام الـ{" "}
            <strong>Websites</strong> باستخدام التكنولوجيا دي
          </span>
        </ContentSimpleParagraph>
      </SectionWrapper>
      {/* What are types of accessibility */}
      <SectionWrapper id="what-are-assesstive-technology">
        <SectionTitle>Screen readers</SectionTitle>
        <ContentSimpleParagraph>
          استخدام الـ <strong>Screen readers</strong> بيكون من خلال تطبيق
          بتستخدمه للغرض ده وبيختلف التطبيق ده باختلاف نظام التشغيل فهنلاقي مثلا
          إن في حالة استخدام <strong>MacOs</strong> بنستخدم{" "}
          <strong>VoiceOver</strong> وبيبقى موجود مع نظام التشغيل أتوماتيك مش
          بتحتاج أكتر من إنك تشغله بس علشان تبدأ، لكن الأمر بيختلف شوية في باقي
          الأنظمة فا هنلاقي إن <strong>Windows</strong> بيكون بحاجة لتحميل
          التطبيق وتشيغله أولا وهنا ممكن نستخدم تطبيق زي <strong>NVDA</strong>{" "}
          لأنه مجاني أو في اختيارات تانية طبعًا، في <strong>Linux</strong> ممكن
          نستخدم تطبيق زي <strong>Orca</strong> أنا بقى في حالة إنك مش عايز تنزل
          تطبيق على جهازك ممكن تكتفي بـ <strong>Browser Extension</strong> زي{" "}
          <strong>ChromeVox</strong>
        </ContentSimpleParagraph>
      </SectionWrapper>
      <SectionWrapper id="what-are-assesstive-technology">
        <SectionTitle>Standards and Guidelines</SectionTitle>
        <SectionList>
          <span>
            <strong>W3C World Wide Web Consortium:</strong> ودي طبعًا هئية
            معايير دولية، مسئولة عن معايير <strong>HTML</strong> و{" "}
            <strong>CSS</strong> و <strong>Accessibility</strong>
          </span>
          <span>
            <strong>WAI Web Accessibility Initiative:</strong> وهي مبادرة مسئولة
            عن التركيز على معايير <strong>Accessibility</strong> وتطويرها وبتكون
            تحت مظلة <strong>W3C</strong> وهم اللي أنشئوا معايير{" "}
            <strong>WCAG</strong> واللي هنتكلم عنها في النقطة الجاية{" "}
          </span>
          <span>
            <strong>WCAG Web Content Accessibility Guidelines:</strong> وهي
            عبارة عن معايير الـ <strong>Accessibility</strong> نفسها والقوانين
            الحاكمة للعمل بيها واللي مفروض المطورين يستخدموها كمرجع لشغلهم
            وطبعًا زي ما قلنا تم إنشاؤها بواسطة مباردة <strong>WAI</strong> ب
          </span>
          <span>
            <strong>WAI-ARIA</strong>ودي عبارة عن مجموعة من المعايير المستخدمة
            <strong>Accessibility</strong> واللي بيتم تطبيقها من خلال{" "}
            <strong>HTML </strong> عن طريق استخدام{" "}
            <strong>ARIA Attributes</strong> فبتعتبر بناء عليه حاجة مشتركة بين{" "}
            <strong>WAI</strong> و <strong>HTML</strong>
          </span>
          <span>WebAIM:</span> ودي منظمة مستقلة، هدفها تبسيط المعايير الموجودة
          فعليًا وتصوصيل فهمها للمستخدمين بصورة أبسط من خلال موقع الكتروني خاص
          بيهم <a href="https://webaim.org/">WebAIM.org</a> يعني بوضوح هم مش
          بيخترعوا قوانين جديدة لكن بيبسطوا الموجود فعليًا
        </SectionList>
      </SectionWrapper>
      <SectionWrapper id="what-are-assesstive-technology">
        <SectionTitle>WCAG Conformance Levels</SectionTitle>
        <SectionList>
          <span>
            <strong>A</strong> وده بيكون أقل مستوى من مطابقة المعايير
          </span>
          <span>
            <strong>AA</strong> ده المستوى المتوسط من المطابقة، واللي غالبًا
            مفروض منقلش عنه علشان منتعرضش للمسائلة القانونية الوارد حدوثها زي ما
            قلنا في المقدمة
          </span>
          <span>
            <strong>AAA</strong> أعلى متسوى للمطابقة واللي بيضمن أفضل تواصل
            للأشخاص ذوي الاحتياجات وقدرة على استخدام ال <strong>Website</strong>
          </span>
        </SectionList>
      </SectionWrapper>
      <SectionWrapper id="what-are-assesstive-technology">
        <SectionTitle>WCAG POUR principles</SectionTitle>
        <SectionList>
          <span>
            <strong>Perceivable</strong> بيعبر عن قدرة المستخدمين الحسية
            لاستخدام الـ <strong>Website</strong> عن طريق السمع أو اللمس أو
            البصر
          </span>
          <span>
            <strong>Operable</strong> بيعبر عن قدرة المستخدمين على التفاعل مع
            الـ <strong>Website</strong> والتنقل خلال أجزائة
          </span>
          <span>
            <strong>Understandable</strong> بيعبر عن قدرة المستخديمن على فهم
            المحتوى اللي بيتعرضوا ليه بسهولة
          </span>
          <span>
            <strong>Robust</strong> بيعبر عن التكامل مع ال{" "}
            <strong>Assestive Technologies</strong> المستخدمة لتحسين تجربة
            المستخدمين ذوي الاحتياجات الخاصة وبالخليط ده نقدر نضمن تجربة قوية
          </span>
        </SectionList>
      </SectionWrapper>
      <SectionWrapper id="semantic-html">
        <SectionTitle>Semantic HTML</SectionTitle>
        <SectionList>
          <span>
            <strong>Semantic Meaning:</strong> بعض الـ <strong>Tags</strong>{" "}
            بيبقى ليها معنى معبر عن استخدامها في تكوين الـ{" "}
            <strong>Website Page</strong> الأمر اللي بيساعد الـ{" "}
            <strong>Screen Readers</strong> على إنها توصل للمستخدم تقسيم الأجزاء
            المختلفة للصففحة في خلال تنقله بين أجزاءه
          </span>
          <span>
            <strong>Built-in Functionality:</strong> بعض الـ{" "}
            <strong>Tags</strong> زي{" "}
            <strong>buttons, input, textarea, list </strong> مش بس بتقدم معنى
            للعناصر بس بردو بتقدم معلومات وظيفية بمعنى إن مثلا لو مطلوب مننا
            نعمل <strong>list</strong> واستخدمنا لده{" "}
            <strong>ul, li tags</strong> فا ده هيساعد الـ{" "}
            <strong>Screen Readers</strong> على إنها توصل للمستخدم إن في{" "}
            <strong>list</strong> بس بس بيساعده على إنها توصل للمستخدم إن في{" "}
            <strong>list</strong> هنا وعدد عناصرها أد إيه.
          </span>
          <span>
            <strong>Form Labels:</strong>
          </span>
        </SectionList>
      </SectionWrapper>
      <SectionWrapper id="keyboard-only-users">
        <SectionTitle>Keyboard Only Users</SectionTitle>
        <SectionList>
          <span>
            <strong>Skip Links:</strong> كل مرة مستخدم الـ{" "}
            <strong>Keyboard</strong> بيدخل صفحة جديدة ممكن يقابل مجموعة من
            الروابط اللي بتكون موجودة عادة في الـ <strong>Header</strong> وبما
            إن الـ <strong>header</strong> عادة ما بيكون ثابت وعلشان يتجنب يعدي
            على نفس الروابط في كل صفحة من صفحات الـ <strong>website</strong>{" "}
            ممكن نزود هنا بـ <strong>skip to content link</strong> واللي بساعد
            المستخدمين يتجهوا مباشرة لمحتوى الصفحة الأساسي بعد الروابط المكررة
          </span>
          <span>
            <strong>Tab Navigation:</strong> هنا بيقدر المستخدم إنه يستخدم{" "}
            <strong>Tab</strong> علشان ينتقل من عنصر للعنصر التالي كمان يقدر
            يستخدم <strong>Shift + Tab</strong> علشان ينتقل من عنصر للعنصر
            السابق له، وده كله المفروض يكون بشرط إن العناصر اللي بيتم الانتقال
            بينها تكون <strong>tabbable</strong> وده معناه إن العناصر دي عندها
            مجموع من الخصائص اللي بتتيح الانتقال بينها باستخد الأزرار المذكورة
            والعناصر دي هي{" "}
            <strong>a, button, input, textarea, select, iframe</strong>
            كمان إحنا نقدر نخلي العناصر الأخرى غير العناصر المذكورة{" "}
            <strong>tabble</strong> وده هيتم عن طريق إضافة خصائص{" "}
            <strong>tabindex=""</strong> واللي بيكون ليها 3 قيم
            <strong>tabindex="0"</strong> أو <strong>tabindex="-1"</strong> أو
            <strong>tabindex="a Positive Integer Value"</strong> في فروق بين الـ
            3 أنواع بس الأفضل استخدام "0"
          </span>
          <span>
            <strong>Active Element:</strong> في بعض الأوقات وأثناء انتقال
            المستخدم من جزء للتاني في الصفحة ممكن يقابل <strong>Modal</strong>{" "}
            أو <strong>Popup</strong> على سبيل المثال وهنا بتكون الـ{" "}
            <strong>User Expericen</strong> الأفضل إنه لما يقفل الـ{" "}
            <strong>Modal</strong> ده إنه يرجع لنفس الـ{" "}
            <strong>Tabbed Element</strong> اللي وصله قبل، واللي بنسجله علشان
            الحالة دي كـ <strong>Active Element</strong>{" "}
          </span>
          <span>
            <strong>Tab Trapping:</strong> وده <strong>Technique</strong> بيحدد
            التنقل بين <strong>Specific Contexts</strong> زي{" "}
            <strong>Modal</strong> أو <strong>Popup</strong> في حالة عرض واحد
            منهم وده علشان يضمن <strong>User Experience</strong> مناسبة ومنطقية
            للمستخدم
          </span>
          <span>
            <strong>Focus Styles:</strong> ودي بتبقى خاصية مفيدة جدًا للمستخدمين
            إنهم يميزا هم موجودين عند أي عنصر وده بيتم عن طريق تنفيذ مجموعة من
            المتطلبات للـ <strong>Focused Element</strong> زي
          </span>
        </SectionList>
      </SectionWrapper>
      <SectionWrapper id="aria">
        <SectionTitle>ARIA</SectionTitle>
        <SectionList>
          <span>
            وهي عبارة عن <strong>API</strong> بيقدم مجموعة من الوسائل اللي نقدر
            نحقق بيها المعايير المطلوبة لتحقيق الـ{" "}
            <strong>Accessibility</strong> اللي بتنص عليها معايير{" "}
            <strong>WCAG</strong> كمان نقدر نستخدمها كـ{" "}
            <strong>Selectors</strong> في <strong>CSS</strong>
            ونقدر كمان نستخدمها مع الـ <strong>Live Apps</strong> واللي بتحتاج
            تحديثات دورية زي تطبيقات المواصلات على سبيل المثال باستخدام{" "}
            <strong>ِARIA Live Regions</strong>
          </span>
        </SectionList>
      </SectionWrapper>
      <SectionWrapper id="colors-and-contrast">
        <SectionTitle>Colors and Contrast</SectionTitle>
        <SectionList>
          <span>
            منظمة <strong>WCAG</strong> بتحدد معايير محددة ممكن بناء عليها نقدر
            نحدد مقدار التباين بين الألوان واللي نقدر لو اتبعناها نبقى{" "}
            <strong>AAA Complaint</strong> أو <strong>AA Complaint</strong> وده
            عن طريق تحديد نسبة بين الألوان الخاصة ب <strong>foreground</strong>{" "}
            و <strong>background</strong> أو خصائص الخط نفسه زي{" "}
            <strong>font-size</strong>
            أو <strong>font-weight</strong> أو <strong>font-color</strong>
            الفكرة إن في وسائل مختلفة ممكن تساعدنا علشان نحدد مدى التباين بين
            الألوان زي مثلا <strong>Chrome Dev Tools</strong> واللى بيقدر يحددلك
            الأاوان المتناسقة مع اللون اللي أنت مختار الـ <strong>tag</strong>{" "}
            الخاص بيه بالنسبة لـ <strong>AAA Complaint</strong> أو{" "}
            <strong>AA Complaint</strong> ومقدار نسبة
          </span>
        </SectionList>
      </SectionWrapper>
      <SectionWrapper id="tools-and-contrast">
        <SectionTitle>Tools</SectionTitle>
        <SectionList>
          <span>Deque AXE -- has JS library and Dev tools </span>
          <span>Google Light House</span>
          <span>Light House CI - github workflow </span>
          <span>Wave by WebAIM</span>
          <span>eslint-plugin-jsx-a11y</span>
          <span>react-spectrum - google material design</span>
        </SectionList>
      </SectionWrapper>
      //////////////////////////
      {/* Reasons to learn about Accessibility */}
      <SectionWrapper id="reasons-to-learn-about-accessibility">
        <SectionTitle>ما هي أسباب تعلم الـ Accessibility؟</SectionTitle>
        <SectionTitle>
          What are some recommended methods to stay web accessibility compliant?
        </SectionTitle>
        <SectionTitle>Color Contrast</SectionTitle>
      </SectionWrapper>
      //////////////////////////
      <SectionWrapper id="reasons-to-learn-about-accessibility">
        <SectionTitle>Web Performance</SectionTitle>
        <SectionTitle>
          Waterfall Charts
          <span></span>
          Old Metrices
          <span></span>
          *-- DCL Dom Content Loaded: the HTML document has been fully
          downloaded, parsed, and any scripts within it have been executed. The
          page structure is complete, though images may not have finished
          loading.
          <span></span>
          *-- Load:The load event occurs when the HTML and all known resources
          (such as images) have been downloaded and rendered. Unlike
          DOMContentLoaded, it waits for all resources to complete loading.
          <span></span>
          -- How did client-side rendering change the meaning of traditional
          performance metrics like DOM content loaded and load events? These
          events happened almost instantly, losing their meaningful connection
          to actual user experience and perceived performance
          <span></span>
          Web Vitals: - How Fast:LCP Large COntentful Paint, how fast your site
          load the most important elements img, video, css:background-image,
          text elements // opacity morethan 0 // size less than 100% // low
          entory images less than 0.05
          <span></span>
          How Smooth: CLS Cumulative Layout Shift, how sommth and predictably
          elements load into the page specifically tracking whether things are
          moving around or reorganizing during the initial loading sequence,
          which affects user interaction and perception of page stability.
          calculated by multiplying the impact of fraction by the distance of
          fraction
          <span></span>
          When to interact: INP : An interaction is a click, drag, touch, or key
          press, but NOT a scroll. These interactions are measured for their
          responsiveness and performance. An INP event measures the total time
          from user interaction to the next paint, including input delay, event
          handler execution, JavaScript processing, and rendering of the updated
          frame.
          <span></span>
          FID: Fisrt Input Delay == not any more 2020:2024 :The time and
          responsiveness of the first user interaction, especially when
          JavaScript was still running and the main thread was busy
          <span></span>
          TTFB: Time to First Byte : TTFB measures how quickly a host responds
          to a request, focusing on server and network performance, and is
          measured from the moment the first byte is received from the server.
          <span></span>
          Performance API:
          <span></span>
          performance.now(): provides a high-resolution timestamp with
          microsecond precision, measuring time since the page started,
          <span></span>
          performance.getEntries(): It returns detailed timing information about
          the page, including network events like DNS time, SSL time, TCP
          handshake time, resource download times, and custom performance
          events.
          <span></span>
          PerformanceNavigationTiming: It provides detailed timing information
          about the initial navigation event, including when TCP connections
          started and completed, when domContentLoaded fired, and when
          associated JavaScript callbacks finished.
          <span></span>
          PerformanceObserver: lets you get information about page performance
          when the browser is idle, without interfering with the browser's
          current tasks, and can retrieve performance data that occurred before
          the observer was set up.
        </SectionTitle>
        performance.timeOrigin: which provides a high-resolution timestamp
        representing when the page first started or navigation began.
        <SectionTitle>Testing Tools</SectionTitle>
        Chrome User Experience Report.
        <span> </span>
        Web Vitals Extensions.
        <span></span>
        Page Speed Insights
        <span></span>
        WebPageTest.org
        <span></span>
        Real user Data RUM
        <span></span>
        <span></span>
        <SectionTitle>Improve Time to first Byte </SectionTitle>
        Time to first Byte: How quicly your host responds to a request
        <span></span>
        Why does TTFB matter even if your goal is to improve LCP? TTFB is part
        of FCP, which is part of LCP. A slow TTFB is a contributing factor to
        slow LCP, and improving it makes everything else faster along the way.
        <span></span>
        1- Compress HTTP Response: We have 2 main compression protocols Gzip &
        Brotli We do this by sending an 'Accept-Encoding' header with supported
        compression formats like gzip, deflate, or brotli and if its compressed
        we have Content-Encoding header in response.
        <span></span>
        hint abour Brotli: Brotli is most effective with larger file sizes, and
        may be less efficient with very small files.
        <span></span>
        2- Using HTTP/2 Http/3:
        <span></span>
        HTTP/1.1 uses multiple separate connections for requests, HTTP/2 uses a
        single TCP connection to stream requests, and HTTP/3 uses UDP (QUIC
        protocol) to reduce connection setup overhead and improve speed. ---Cady
        proxy ---
        <span></span>
        3- Host Capacity - Host Proximity:
        <SectionTitle>Improve First Contentful Paint (FCP)</SectionTitle>
        First Contentful Paint: how quickly a website visibly loads any content
        on the screen, measuring the time from navigation to when the first
        piece of content appears. The recommended benchmark is 1.8 seconds, and
        any site performing faster than this is considered good.
        <span></span>
        1- Remove Sequence Chains:Sequential resource loading delays FCP because
        each dependent resource must be downloaded and processed before
        rendering can occur so we Use a bundler like Webpack, Rollup, or Vite to
        prepackage and merge dependencies at build time, preventing runtime
        sequential loading
        <span></span>
        2- Preloading Resources: preconnect: To start up connections to specific
        domains early, performing DNS lookup and connection setup before
        resources are needed, reducing overhead when those resources are
        actually requested --- preload: instructs the browser to actually fetch
        a specific resource earlier than it would normally be discovered
        <span></span>
        3- Lazy Loading Resources : the problem is JavaScript is parser
        blocking. When a browser encounters a script tag, it immediately
        downloads and executes the script, stopping HTML parsing, rendering, and
        main execution.
        -------------------------------------------------------------------------
        async vs defer: async: starts downloading a script when ready but
        executes immediately after download, potentially creating a race
        condition. defer: downloads a script but waits to execute until just
        before DOMContentLoaded, maintaining script execution order.
        -------------------------------------------------------------------------
        Deferred scripts are executed in the order they were discovered in the
        document, even if they download in a different sequence. The first
        script will execute first, followed by subsequent deferred scripts in
        document order.
        <SectionTitle>Improve Largest Contentful Paint (LCP)</SectionTitle>
        time to load largest element : images, videos, mostly images... and the
        recommended LCP threshold for good web performance: Less than 2.5
        seconds.
        -------------------------------------------------------------------------
        The three main components of Largest Contentful Paint (LCP): Resource
        delay, resource duration, and render delay
        <span></span>
        1- Lazy Loading: if images is above the fold its shouldnt be lazy
        loaded, but if below it it should be lazy loaded
        <span></span>
        2- Eager Loading: Preload key assets like hero images, background
        images, and critical resources. we can also add fetchpriority="high" to
        the image tag to prioritize its loading. and we can use prelaod hint
        <span></span>
        3- Image Formats: WebP and AVIF provide significantly smaller file sizes
        compared to traditional JPG and PNG formats, typically reducing image
        size by at least half while maintaining visual quality
        -----------------------------------------------------------
        --------------- the purpose of that: To send fewer bytes while
        maintaining image quality, which helps improve page load speed and
        overall performance
        <span></span>
        4- Responisve Images: Responsive images involve serving different image
        sizes based on device screen size and pixel density, which helps reduce
        unnecessary data transfer and improves performance across different
        devices, The picture element supports specifying different image sources
        based on media query-like conditions and screen sizes, The source
        element allows specifying different image files for specific screen
        widths, enabling the browser to automatically select the most
        appropriate image based on the current display size, The srcset
        attribute is used in source element to specify rules for selecting
        different images based on screen width
        <span></span>
        5- Optimize Images: Resizing images to multiple smaller versions, 2.
        Using PNG optimization with Imagemin, 3. Converting images to WebP
        format
        <span></span>
        6- Cashing: Etag header and Last-Modified header are used to cache
        resources Request is sendedingb Etag and last-modified headers and next
        request you have them with you so server checks and if they haven't
        changed you get 304 Not Modified response and have your images and other
        resources in cache
        <span></span>
        <SectionTitle>
          Improve (CLS) Cmulative Layout Shift and (INP) Interaction to Next
          Paint
        </SectionTitle>
        Cmulative Layout Shift: measures how smoothly and predictably elements
        load onto a webpage, tracking how much page elements move during the
        loading process --- we can solve that by: Give layout size hints by
        specifying height and width for images and elements, telling the browser
        the expected dimensions before the content actually loads or Position
        the element absolutely so it overlays existing content without pushing
        other elements around
        <span></span>
        Improving INP:INP measures how quickly users can interact with a
        website, tracking the time between a user interaction (like a click) and
        the next visual update. It is typically measured by generating an
        interaction profile and analyzing the processing duration between the
        event and the paint.
        ---------------------------------------------------------------------------
        Solutions: Yielding to the main thread means preventing long-running
        tasks from blocking the browser's main thread, which handles JavaScript
        events, layouts, and rendering. This can be achieved using techniques
        like setTimeout or requestAnimationFrame to schedule work later and
        allow other tasks to run.
        ---------------------------------------------------------------------------
        What is the purpose of using requestAnimationFrame() in event handling?
        To yield to the main thread and wait until the browser is ready to paint
        a frame, allowing for efficient rendering and user feedback before
        performing heavy tasks //////////////////////////
        ////////////////////////// //////////////////////////
        ////////////////////////// //////////////////////////
        ////////////////////////// //////////////////////////
        <SectionWrapper id="JavaScript Performance">
          JavaScript Performance
        </SectionWrapper>
        What are the three types of web performance that should be considered?
        The three types are: 1) Network load performance - getting the
        application code to the user, 2) Parsing and JavaScript compilation
        performance - how quickly the browser can parse and compile the code,
        and 3) Rendering performance - how the JavaScript manipulates the DOM
        and displays the user interface.
        <SectionWrapper>JavaScript Performance</SectionWrapper>
        1- Parsing:
      </SectionWrapper>
    </>
  );
}
