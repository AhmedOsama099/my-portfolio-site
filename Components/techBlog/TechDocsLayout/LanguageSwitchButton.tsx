import { useAppTranslation } from "@/hooks/useAppTranslation";
import { useRouter } from "next/navigation";

export default function LanguageSwitchButton() {
  const { changeLanguage, currentLanguage } = useAppTranslation();
  const router = useRouter();
  return (
    <button
      onClick={() => {
        changeLanguage();
        router.refresh(); // re-fetch SSR page with new lang
      }}
      className="fixed h-11 top-32 end-0 z-10 p-2 bg-[#EE3E54] text-white rounded-s-lg  shadow hover:bg-[#B12343] transition"
    >
      {currentLanguage === "ar" ? "English" : "العربية"}
    </button>
  );
}
