import { ThreeDots } from "react-loader-spinner"; // وارد کردن کامپوننت ThreeDots از کتابخانه react-loader-spinner برای نمایش لودینگ

// تعریف کامپوننت Loader که برای نشان دادن بارگذاری استفاده می‌شود
function Loader() {
  return (
    <ThreeDots
      color="#304ffe" // تعیین رنگ لودینگ
      height={45} // تعیین ارتفاع لودینگ
      ariaLabel="three-dots-loading" // افزودن برچسب دسترسی برای شناسایی لودینگ
      visible={true} // تعیین اینکه لودینگ قابل مشاهده باشد
      wrapperStyle={{ margin: "auto" }} // تعیین استایل برای مرکز کردن لودینگ
    />
  );
}

// صادر کردن کامپوننت Loader به عنوان پیش‌فرض
export default Loader;