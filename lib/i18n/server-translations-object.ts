// Import your translations directly
import commonEn from "../../server-locales/en/common.json";
import commonAr from "../../server-locales//ar/common.json";
import whatIsGitEn from "../../server-locales/en/what-is-git.json";
import whatIsGitAr from "../../server-locales//ar/what-is-git.json";
import onlineOfflineGitEn from "../../server-locales/en/online-offline-git.json";
import onlineOfflineGitAr from "../../server-locales/ar/online-offline-git.json";

export const translations: Record<string, Record<string, unknown>> = {
  en: {
    common: commonEn,
    "what-is-git": whatIsGitEn,
    "online-offline-git": onlineOfflineGitEn,
  },
  ar: {
    common: commonAr,
    "what-is-git": whatIsGitAr,
    "online-offline-git": onlineOfflineGitAr,
  },
};
