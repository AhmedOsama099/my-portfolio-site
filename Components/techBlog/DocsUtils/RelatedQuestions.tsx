import { cn } from "@/lib/tailwind";
import { getServerTranslation } from "@/utils/getServerTranslation";

interface RelatedQuestionsProps {
  title?: string;
  questions: string[];
  className?: string;
}

export default async function RelatedQuestions({
  title = "Related Questions",
  questions,
  className,
}: RelatedQuestionsProps) {
  const { t } = await getServerTranslation("online-offline-git");

  return (
    <aside className={cn("related-questions my-8", className)}>
      <h2 className="text-2xl font-bold">{t(title)}</h2>

      <ul>
        {questions.map((ele, index) => (
          <li key={index} className="text-[#B12343] text-lg list-disc ms-6">
            {t(ele)}
          </li>
        ))}
      </ul>
    </aside>
  );
}
