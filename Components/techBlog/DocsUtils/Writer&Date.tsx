import { getServerTranslation } from "@/utils/getServerTranslation";

interface WriterDateProps {
  writer?: string;
  releaseDate: string;
}

const WriterDate: React.FC<WriterDateProps> = async ({
  writer,
  releaseDate,
}) => {
  const { t } = await getServerTranslation();

  return (
    <footer className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-[15px] tracking-wide mb-8 border-t pt-4 dark:border-gray-800">
      <address className="not-italic flex items-center gap-2">
        <span className="font-medium text-gray-500 dark:text-gray-400">
          {t("preparedBy")}:
        </span>
        <span className="text-gray-400 dark:text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200">
          {writer ?? t("myName")}
        </span>
      </address>
      <span>-</span>
      <div className="flex items-center gap-2">
        <span className="font-medium text-gray-500 dark:text-gray-400">
          {t("releaseDate")}:
        </span>
        <time
          dateTime={releaseDate}
          className="text-gray-400 dark:text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
        >
          {releaseDate}
        </time>
      </div>
    </footer>
  );
};

export default WriterDate;
