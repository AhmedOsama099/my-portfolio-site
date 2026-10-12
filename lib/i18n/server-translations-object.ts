// Import your translations directly
import commonEn from "../../server-locales/en/common.json";
import commonAr from "../../server-locales/ar/common.json";
import whatIsGitEn from "../../server-locales/en/what-is-git.json";
import whatIsGitAr from "../../server-locales/ar/what-is-git.json";
import onlineOfflineGitEn from "../../server-locales/en/online-offline-git.json";
import onlineOfflineGitAr from "../../server-locales/ar/online-offline-git.json";
import excessTypeCheckingEn from "../../server-locales/en/ts/excess-type-checking.json";
import excessTypeCheckingAr from "../../server-locales/ar/ts/excess-type-checking.json";
import structuralTypeSystemEn from "../../server-locales/en/ts/structural-type-system.json";
import structuralTypeSystemAr from "../../server-locales/ar/ts/structural-type-system.json";
import indexSignatureEn from "../../server-locales/en/ts/index-signature.json";
import indexSignatureAr from "../../server-locales/ar/ts/index-signature.json";
import ttfbEn from "../../server-locales/en/performance/ttfb.json";
import ttfbAr from "../../server-locales/ar/performance/ttfb.json";
import fcpEn from "../../server-locales/en/performance/fcp.json";
import fcpAr from "../../server-locales/ar/performance/fcp.json";
import lcpEn from "../../server-locales/en/performance/lcp.json";
import lcpAr from "../../server-locales/ar/performance/lcp.json";
import clsEn from "../../server-locales/en/performance/cls.json";
import clsAr from "../../server-locales/ar/performance/cls.json";
import inpEn from "../../server-locales/en/performance/inp.json";
import inpAr from "../../server-locales/ar/performance/inp.json";

export const translations: Record<string, Record<string, unknown>> = {
  en: {
    common: commonEn,
    "what-is-git": whatIsGitEn,
    "online-offline-git": onlineOfflineGitEn,
    "structural-type-system": structuralTypeSystemEn,
    "index-signature": indexSignatureEn,
    "excess-type-checking": excessTypeCheckingEn,
    ttfb: ttfbEn,
    fcp: fcpEn,
    lcp: lcpEn,
    cls: clsEn,
    inp: inpEn,
  },
  ar: {
    common: commonAr,
    "what-is-git": whatIsGitAr,
    "online-offline-git": onlineOfflineGitAr,
    "structural-type-system": structuralTypeSystemAr,
    "index-signature": indexSignatureAr,
    "excess-type-checking": excessTypeCheckingAr,
    ttfb: ttfbAr,
    fcp: fcpAr,
    lcp: lcpAr,
    cls: clsAr,
    inp: inpAr,
  },
};
