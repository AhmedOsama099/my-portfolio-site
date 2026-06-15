"use client";

import { useReportWebVitals } from "next/web-vitals";

/**
 * Logs Core Web Vitals to the browser console for local testing — LCP, CLS,
 * INP, FCP, TTFB (and FID on older browsers). Open DevTools and interact with
 * the page to see values stream in. Real-user data is collected separately by
 * Vercel Speed Insights (see <SpeedInsights /> in the root layout).
 */
export default function WebVitals() {
  useReportWebVitals((metric) => {
    const { name, value, rating } = metric as typeof metric & {
      rating?: string;
    };
    const display = name === "CLS" ? value.toFixed(3) : `${Math.round(value)}ms`;
    // eslint-disable-next-line no-console
    console.log(
      `%c[web-vitals] ${name}: ${display}${rating ? ` — ${rating}` : ""}`,
      "color:#565FA1;font-weight:bold"
    );
  });

  return null;
}
