import parse from "html-react-parser";

/**
 * يصلح المسافات في النصوص المختلطة (عربي + إنجليزي + أرقام + علامات ترقيم).
 */
function fixMixedTextSpacing(text: string) {
  return (
    text
      // 1. إزالة المسافات قبل علامات الترقيم
      .replace(/\s+([.,;!?،؛])/g, "$1")

      // 2. إضافة مسافة بين العربي وكلمة إنجليزية كاملة (عربي ← إنجليزي)
      .replace(/([\u0600-\u06FF])([A-Za-z0-9]+)/g, "$1 $2")

      // 3. إضافة مسافة بين كلمة إنجليزية والعربي (إنجليزي ← عربي)
      .replace(/([A-Za-z0-9]+)([\u0600-\u06FF])/g, "$1 $2")

      // 4. إضافة مسافة بعد علامات الترقيم لو اتشالت
      .replace(/([.,;!?،؛])([^\s])/g, "$1 $2")
  );
}

// Wrapper حوالين parse
export function parseWithSpacing(text: string) {
  return parse(fixMixedTextSpacing(text));
}
