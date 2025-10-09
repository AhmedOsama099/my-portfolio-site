// Import your translations directly
import commonEn from "../../server-locales/en/common.json";
import commonAr from "../../server-locales//ar/common.json";
import whatIsGitEn from "../../server-locales/en/what-is-git.json";
import whatIsGitAr from "../../server-locales//ar/what-is-git.json";
import onlineOfflineGitEn from "../../server-locales/en/online-offline-git.json";
import onlineOfflineGitAr from "../../server-locales/ar/online-offline-git.json";
import excessTypeCheckingEn from "../../server-locales/en/ts/excess-type-checking.json";
import excessTypeCheckingAr from "../../server-locales/ar/ts/excess-type-checking.json";
import structuralTypeSystemEn from "../../server-locales/en/ts/structural-type-system.json";
import structuralTypeSystemAr from "../../server-locales/ar/ts/structural-type-system.json";

export const translations: Record<string, Record<string, unknown>> = {
  en: {
    common: commonEn,
    "what-is-git": whatIsGitEn,
    "online-offline-git": onlineOfflineGitEn,
    "excess-type-checking": excessTypeCheckingEn,
    "structural-type-system": structuralTypeSystemEn,
  },
  ar: {
    common: commonAr,
    "what-is-git": whatIsGitAr,
    "online-offline-git": onlineOfflineGitAr,
    "excess-type-checking": excessTypeCheckingAr,
    "structural-type-system": structuralTypeSystemAr,
  },
};
