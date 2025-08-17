export function formatDateLang(dateString: string, lang = "en") {
  if (lang === "en") return dateString;

  const date = new Date(dateString);

  return new Intl.DateTimeFormat("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}
