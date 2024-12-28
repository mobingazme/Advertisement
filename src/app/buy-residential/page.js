import BuyResidentialsPage from "@/template/BuyResidentialsPage"; // وارد کردن کامپوننت صفحه خرید ملک

// تعریف تابع Async BuyResidentials برای پردازش درخواست خرید
async function BuyResidentials({ searchParams }) {
  // بهتر است در کامپوننت‌های سرور ساید از API روت استفاده نکنیم (این مورد حالت تمرینی دارد)
  const res = await fetch("http://localhost:3000/api/profile", {
    cache: "no-store", // عدم کش کردن پاسخ برای دریافت داده‌های جدید
  });
  const data = await res.json(); // تبدیل پاسخ به فرمت JSON

  if (data.error) return <h3>مشکلی پیش آمده است</h3>; // بررسی وجود خطا و نمایش پیام خطا در صورت وجود

  let finalData = data.data; // داده‌های اولیه

  // بررسی وجود پارامتر دسته‌بندی در جستجو
  if (searchParams.category) {
    // فیلتر کردن داده‌ها بر اساس دسته‌بندی
    finalData = finalData.filter((i) => i.category === searchParams.category);
  }

  // بازگشت کامپوننت BuyResidentialsPage با داده‌های نهایی
  return <BuyResidentialsPage data={finalData} />;
}

// صادر کردن تابع BuyResidentials به عنوان پیش‌فرض
export default BuyResidentials;