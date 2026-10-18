import parse from "html-react-parser";

/**
 * يصلح المسافات في النصوص المختلطة (عربي + إنجليزي + أرقام + علامات ترقيم).
 */
function fixMixedTextSpacing(text: string) {
  return text
    .split(/(<[^>]+>)/g)
    .map((part) => {
      // If it's an HTML tag, don't modify it
      if (part.startsWith("<") && part.endsWith(">")) {
        return part;
      }
      return (
        part
          // 1. إزالة المسافات قبل علامات الترقيم
          .replace(/\s+([.,;!?،؛])/g, "$1")

          // 2. إضافة مسافة بين العربي وكلمة إنجليزية كاملة (عربي ← إنجليزي)
          .replace(/([\u0600-\u06FF])([A-Za-z0-9]+)/g, "$1 $2")

          // 3. إضافة مسافة بين كلمة إنجليزية والعربي (إنجليزي ← عربي)
          .replace(/([A-Za-z0-9]+)([\u0600-\u06FF])/g, "$1 $2")

          // 4. إضافة مسافة بعد علامات الترقيم لو اتشالت
          .replace(/([,;!?،؛])([^\s])/g, "$1 $2")
      );
    })
    .join("");
}

/**
 * Breaks sentences onto new lines after full stops/periods, so any continuing
 * text starts on the next line (as requested: if text is ended with a period, continuing text starts from the next line).
 * Preserves decimal numbers (e.g. 1.3, 0.8), common abbreviations, and HTML tags.
 */
function breakSentencesOnPeriod(html: string): string {
  // If the string contains HTML, process text outside tags
  return html
    .split(/(<[^>]+>)/g)
    .map((part) => {
      if (part.startsWith("<") && part.endsWith(">")) {
        return part;
      }

      // Match a full stop (.) followed by whitespace and a new sentence start
      // Lookbehind ensures we don't break on numbers like 1.3, 2.1, or www.example.com
      // We replace ". " with ".<br class='sentence-break' />" or "<br />"
      return part.replace(
        /(?<!\d|[A-Za-z]\.[A-Za-z]|e\.g|i\.e)\.\s+(?=[^\s\d])/g,
        ".<br class='my-1.5 block' />"
      );
    })
    .join("");
}

// Wrapper حوالين parse
export function parseWithSpacing(text: string) {
  if (!text) return text;
  const spaced = fixMixedTextSpacing(text);
  const sentenceBroken = breakSentencesOnPeriod(spaced);
  return parse(sentenceBroken);
}
