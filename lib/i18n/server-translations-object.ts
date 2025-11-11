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
import indexSignatureEn from "../../server-locales/en/ts/index-signature.json";
import indexSignatureAr from "../../server-locales/ar/ts/index-signature.json";

export const translations: Record<string, Record<string, unknown>> = {
  en: {
    common: commonEn,
    "what-is-git": whatIsGitEn,
    "online-offline-git": onlineOfflineGitEn,
    "structural-type-system": structuralTypeSystemEn,
    "index-signature": indexSignatureEn,
    "excess-type-checking": excessTypeCheckingEn,
  },
  ar: {
    common: commonAr,
    "what-is-git": whatIsGitAr,
    "online-offline-git": onlineOfflineGitAr,
    "structural-type-system": structuralTypeSystemAr,
    "index-signature": indexSignatureAr,
    "excess-type-checking": excessTypeCheckingAr,
  },
};
