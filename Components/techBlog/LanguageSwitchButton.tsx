import { useAppTranslation } from "@/hooks/useAppTranslation";

export default function LanguageSwitchButton() {
  const { changeLanguage, currentLanguage } = useAppTranslation();

  return (
    <button
      onClick={changeLanguage}
      className="fixed h-11 top-32 end-0 z-10 p-2 bg-[#EE3E54] text-white rounded-s-lg  shadow hover:bg-gray-700 transition"
    >
      {currentLanguage === "ar" ? "English" : "العربية"}
    </button>
  );
}
