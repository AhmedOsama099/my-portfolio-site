// تحويل المنشورات من الفيسبوك إلى صيغة JSON
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function convertFBPosts(data: any[]) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const arr: any[] = [];
  data.forEach((item) => {
    // استخراج التاريخ بدون الوقت
    const dateOnly =
      item.date?.split(" ")[0] +
      " " +
      item.date?.split(" ")[1] +
      " " +
      item.date?.split(" ")[2];

    // إزالة التاريخ المكرر من بداية المحتوى
    let content = item.content;
    const datePattern = new RegExp(
      `^${item.date?.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*`,
    );
    content = content?.replace(datePattern, "");

    // تحويل \n إلى أسطر جديدة حقيقية (في النص نفسه)
    content = content?.replace(/\\n/g, "\n");

    arr.push({
      title: "",
      date: dateOnly,
      content: content,
      isShow: true,
    });
  });

  return arr;
}
