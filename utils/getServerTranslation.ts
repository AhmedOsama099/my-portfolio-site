import { initServerI18n } from "@/lib/i18n/server-i18n";
import { cookies, headers } from "next/headers";

export async function getServerTranslation(ns: string = "common") {
  const cookieStore = await cookies();
  const requestHeaders = headers();

  // Use your custom header (x-invoke-path) set by middleware
  const pathname = (await requestHeaders).get("x-invoke-path") || "";

  // Use cookie language preference or fallback to English
  const lang = cookieStore.get("i18next")?.value || "ar";

  const i18n = await initServerI18n(lang, ns);
  const t = i18n.getFixedT(lang, ns);

  return { t, lang };
}
