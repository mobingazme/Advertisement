"use client"; // این دستور نشان می‌دهد که این فایل یک کامپوننت سمت کلاینت است.

import { useRouter } from "next/navigation"; // استفاده از useRouter برای مدیریت مسیرها و بروزرسانی صفحه
import { Toaster, toast } from "react-hot-toast"; // برای نمایش اعلان‌ها (Toast)
import { sp } from "@/utils/replaceNumber"; // تبدیل اعداد به فرمت فارسی
import styles from "@/module/AdminCard.module.css"; // استایل‌های CSS مربوط به این کارت

// کامپوننت AdminCard برای نمایش یک پروفایل مشخص و مدیریت عملیات انتشار
function AdminCard({ data: { _id, title, description, location, price } }) {
  const router = useRouter(); // استفاده از hook برای مدیریت مسیریابی

  // هندلر انتشار پروفایل
  const publishHandler = async () => {
    // درخواست به سرور برای انتشار پروفایل با استفاده از متد PATCH
    const res = await fetch(`/api/profile/publish/${_id}`, { method: "PATCH" });
    const result = await res.json(); // تبدیل پاسخ به فرمت JSON

    // اگر پیام موفقیت‌آمیز از سرور دریافت شود
    if (result.message) {
      toast.success(result.message); // نمایش پیام موفقیت با استفاده از toast
      router.refresh(); // بروزرسانی صفحه برای نمایش تغییرات
    }
  };

  return (
    <div className={styles.container}>
      {/* نمایش عنوان پروفایل */}
      <h3>{title}</h3>

      {/* نمایش توضیحات پروفایل */}
      <p>{description}</p>

      {/* بخش ویژگی‌ها: شامل موقعیت مکانی و قیمت */}
      <div className={styles.properties}>
        <span>{location}</span>
        <span>{sp(price)}</span> {/* تبدیل عدد قیمت به فرمت فارسی */}
      </div>

      {/* دکمه برای انتشار پروفایل */}
      <button onClick={publishHandler}>انتشار</button>

      {/* کامپوننت Toaster برای نمایش اعلان‌ها */}
      <Toaster />
    </div>
  );
}

export default AdminCard; // خروجی گرفتن از کامپوننت
