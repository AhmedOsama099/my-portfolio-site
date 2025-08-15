import { initServerI18n } from "@/lib/i18n/server-i18n";
import { cookies } from "next/headers";

export async function getServerTranslation(ns: string = "common") {
  const cookieStore = await cookies();
  const lang = cookieStore.get("i18next")?.value || "en";

  const i18n = await initServerI18n(lang, ns);
  const t = i18n.getFixedT(lang, ns);

  return { t, lang };
}
