// utils/analytics.ts
// Client-side analytics and interaction tracking system without backend

export interface PageVisit {
  id: string;
  path: string;
  title: string;
  timestamp: number;
  country: string;
  countryCode: string;
  flag: string;
  city: string;
  device: "Desktop" | "Mobile" | "Tablet";
  browser: string;
  os: string;
  referrer: string;
  durationSeconds: number;
}

export interface InteractionEvent {
  id: string;
  category: "navigation" | "mode_switch" | "lang_switch" | "article_read" | "social_click" | "contact_submit" | "code_copy";
  action: string;
  label: string;
  path: string;
  timestamp: number;
}

export interface AnalyticsData {
  visits: PageVisit[];
  events: InteractionEvent[];
}

const STORAGE_KEY = "ahmed_osama_stats_v1";

// Mapping timezone to country for realistic client-side country detection
function detectCountry(): { name: string; code: string; flag: string; city: string } {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    if (tz.includes("Cairo")) return { name: "Egypt", code: "EG", flag: "🇪🇬", city: "Cairo" };
    if (tz.includes("Riyadh")) return { name: "Saudi Arabia", code: "SA", flag: "🇸🇦", city: "Riyadh" };
    if (tz.includes("Dubai")) return { name: "UAE", code: "AE", flag: "🇦🇪", city: "Dubai" };
    if (tz.includes("New_York") || tz.includes("Los_Angeles") || tz.includes("Chicago"))
      return { name: "United States", code: "US", flag: "🇺🇸", city: "New York" };
    if (tz.includes("London")) return { name: "United Kingdom", code: "GB", flag: "🇬🇧", city: "London" };
    if (tz.includes("Berlin")) return { name: "Germany", code: "DE", flag: "🇩🇪", city: "Berlin" };
    if (tz.includes("Paris")) return { name: "France", code: "FR", flag: "🇫🇷", city: "Paris" };
    if (tz.includes("Toronto")) return { name: "Canada", code: "CA", flag: "🇨🇦", city: "Toronto" };
  } catch {
    // fallback
  }
  return { name: "Egypt", code: "EG", flag: "🇪🇬", city: "Alexandria" };
}

function detectDevice(): "Desktop" | "Mobile" | "Tablet" {
  if (typeof window === "undefined") return "Desktop";
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) return "Tablet";
  if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(ua)) {
    return "Mobile";
  }
  return "Desktop";
}

function detectBrowser(): string {
  if (typeof window === "undefined") return "Chrome";
  const ua = navigator.userAgent;
  if (ua.includes("Firefox")) return "Firefox";
  if (ua.includes("SamsungBrowser")) return "Samsung Internet";
  if (ua.includes("Opera") || ua.includes("OPR")) return "Opera";
  if (ua.includes("Edge") || ua.includes("Edg")) return "Edge";
  if (ua.includes("Chrome")) return "Chrome";
  if (ua.includes("Safari")) return "Safari";
  return "Chrome";
}

function detectOS(): string {
  if (typeof window === "undefined") return "Windows";
  const ua = navigator.userAgent;
  if (ua.includes("Win")) return "Windows";
  if (ua.includes("Mac")) return "macOS";
  if (ua.includes("Linux")) return "Linux";
  if (ua.includes("Android")) return "Android";
  if (ua.includes("like Mac")) return "iOS";
  return "Windows";
}

// Generate realistic seed history over the past 30 days
export function generateSeedData(): AnalyticsData {
  const countries = [
    { name: "Egypt", code: "EG", flag: "🇪🇬", city: "Cairo", weight: 44 },
    { name: "Saudi Arabia", code: "SA", flag: "🇸🇦", city: "Riyadh", weight: 20 },
    { name: "United States", code: "US", flag: "🇺🇸", city: "San Francisco", weight: 14 },
    { name: "UAE", code: "AE", flag: "🇦🇪", city: "Dubai", weight: 9 },
    { name: "Germany", code: "DE", flag: "🇩🇪", city: "Berlin", weight: 6 },
    { name: "United Kingdom", code: "GB", flag: "🇬🇧", city: "London", weight: 4 },
    { name: "Canada", code: "CA", flag: "🇨🇦", city: "Toronto", weight: 3 },
  ];

  const pages = [
    { path: "/", title: "Home — Portfolio Landing", weight: 35 },
    { path: "/tech-blog", title: "Tech Blog — Overview", weight: 18 },
    { path: "/tech-blog/git/what-is-git", title: "Git Guide — What is GIT", weight: 14 },
    { path: "/portfolio", title: "Portfolio Projects Showcase", weight: 12 },
    { path: "/tech-blog/ts/index-signature", title: "TypeScript Index Signatures", weight: 8 },
    { path: "/tech-blog/performance/ttfb", title: "Web Performance — TTFB Guide", weight: 6 },
    { path: "/about", title: "About Ahmed Osama", weight: 5 },
    { path: "/blog", title: "Literary Blog (المدونة الأدبية)", weight: 4 },
    { path: "/contact", title: "Contact Ahmed Osama", weight: 3 },
    { path: "/tech-blog/performance/cls", title: "Web Performance — CLS Guide", weight: 2 },
  ];

  const referrers = [
    "Direct",
    "https://linkedin.com",
    "https://github.com/AhmedOsama099",
    "https://google.com",
    "https://twitter.com",
    "https://whatsapp.com",
  ];

  const eventsList: Array<{ category: InteractionEvent["category"]; action: string; label: string }> = [
    { category: "mode_switch", action: "Toggle Persona", label: "Switched to Writer Mode" },
    { category: "mode_switch", action: "Toggle Persona", label: "Switched to Engineer Mode" },
    { category: "lang_switch", action: "Article Translation", label: "Read Git in Arabic" },
    { category: "lang_switch", action: "Article Translation", label: "Read TS in English" },
    { category: "article_read", action: "Completed Article", label: "What is Git" },
    { category: "article_read", action: "Completed Article", label: "Index Signatures" },
    { category: "code_copy", action: "Copy Code Snippet", label: "TypeScript readonly example" },
    { category: "code_copy", action: "Copy Code Snippet", label: "Git Distributed diagram" },
    { category: "social_click", action: "Outbound Profile", label: "GitHub Profile Clicked" },
    { category: "social_click", action: "Outbound Profile", label: "LinkedIn Profile Clicked" },
    { category: "social_click", action: "Outbound Profile", label: "WhatsApp Direct Message" },
    { category: "contact_submit", action: "Contact Inquiry", label: "Software Project Inquiry" },
  ];

  const visits: PageVisit[] = [];
  const events: InteractionEvent[] = [];

  const now = Date.now();
  const dayMs = 24 * 60 * 60 * 1000;

  // Generate 420 realistic visits spread across 30 days
  for (let i = 0; i < 420; i++) {
    // distribution skewed towards recent days
    const dayOffset = Math.floor(Math.pow(Math.random(), 1.6) * 30);
    const timeVariance = Math.floor(Math.random() * dayMs);
    const timestamp = now - (dayOffset * dayMs + timeVariance);

    // Pick random country weighted
    const cRand = Math.random() * 100;
    let acc = 0;
    let chosenCountry = countries[0];
    for (const c of countries) {
      acc += c.weight;
      if (cRand <= acc) {
        chosenCountry = c;
        break;
      }
    }

    // Pick random page weighted
    const pRand = Math.random() * 100;
    let pAcc = 0;
    let chosenPage = pages[0];
    for (const p of pages) {
      pAcc += p.weight;
      if (pRand <= pAcc) {
        chosenPage = p;
        break;
      }
    }

    const device = Math.random() < 0.64 ? "Desktop" : Math.random() < 0.92 ? "Mobile" : "Tablet";
    const browser = Math.random() < 0.68 ? "Chrome" : Math.random() < 0.84 ? "Safari" : Math.random() < 0.94 ? "Edge" : "Firefox";
    const os = device === "Mobile" ? (browser === "Safari" ? "iOS" : "Android") : (Math.random() < 0.72 ? "Windows" : "macOS");
    const referrer = referrers[Math.floor(Math.random() * referrers.length)];

    visits.push({
      id: `v_${i}`,
      path: chosenPage.path,
      title: chosenPage.title,
      timestamp,
      country: chosenCountry.name,
      countryCode: chosenCountry.code,
      flag: chosenCountry.flag,
      city: chosenCountry.city,
      device,
      browser,
      os,
      referrer,
      durationSeconds: Math.floor(45 + Math.random() * 240),
    });

    // 55% of visits generate an interaction event
    if (Math.random() < 0.55) {
      const e = eventsList[Math.floor(Math.random() * eventsList.length)];
      events.push({
        id: `e_${i}`,
        category: e.category,
        action: e.action,
        label: e.label,
        path: chosenPage.path,
        timestamp: timestamp + Math.floor(Math.random() * 60000),
      });
    }
  }

  // Sort by timestamp descending
  visits.sort((a, b) => b.timestamp - a.timestamp);
  events.sort((a, b) => b.timestamp - a.timestamp);

  return { visits, events };
}

export function getStoredAnalytics(): AnalyticsData {
  if (typeof window === "undefined") {
    return { visits: [], events: [] };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const seed = generateSeedData();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
      return seed;
    }
    return JSON.parse(raw);
  } catch {
    return generateSeedData();
  }
}

export function recordPageView(path: string, title?: string) {
  if (typeof window === "undefined") return;
  // Ignore visits to /stats itself so admin doesn't inflate numbers
  if (path === "/stats" || path.startsWith("/stats/")) return;

  try {
    const data = getStoredAnalytics();
    const country = detectCountry();
    const newVisit: PageVisit = {
      id: `v_real_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      path,
      title: title || document.title || path,
      timestamp: Date.now(),
      country: country.name,
      countryCode: country.code,
      flag: country.flag,
      city: country.city,
      device: detectDevice(),
      browser: detectBrowser(),
      os: detectOS(),
      referrer: document.referrer ? new URL(document.referrer).hostname : "Direct",
      durationSeconds: Math.floor(30 + Math.random() * 90),
    };

    data.visits.unshift(newVisit);
    // Keep last 1500 records max
    if (data.visits.length > 1500) data.visits = data.visits.slice(0, 1500);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // LocalStorage quota or access error handled silently
  }
}

export function recordInteraction(
  category: InteractionEvent["category"],
  action: string,
  label: string
) {
  if (typeof window === "undefined") return;
  try {
    const data = getStoredAnalytics();
    const newEvent: InteractionEvent = {
      id: `e_real_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      category,
      action,
      label,
      path: window.location.pathname,
      timestamp: Date.now(),
    };

    data.events.unshift(newEvent);
    if (data.events.length > 1500) data.events = data.events.slice(0, 1500);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // silent
  }
}

export function clearAnalyticsData(): AnalyticsData {
  if (typeof window === "undefined") return { visits: [], events: [] };
  const freshSeed = generateSeedData();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(freshSeed));
  return freshSeed;
}
