"use client"; // اعلام اینکه این کامپوننت در سمت کلاینت اجرا می‌شود

import { useRouter } from "next/navigation"; // وارد کردن useRouter برای ناوبری بین صفحات
import { Toaster, toast } from "react-hot-toast"; // وارد کردن Toaster و toast برای نمایش نوتیفیکیشن‌ها
import { AiOutlineDelete } from "react-icons/ai"; // وارد کردن آیکون حذف از react-icons
import { FiEdit } from "react-icons/fi"; // وارد کردن آیکون ویرایش از react-icons
import Card from "@/module/Card"; // وارد کردن کامپوننت Card برای نمایش اطلاعات
import styles from "@/module/DashboardCard.module.css"; // وارد کردن استایل‌های مخصوص DashboardCard

// تعریف کامپوننت DashboardCard که اطلاعات پروفایل و گزینه‌های ویرایش و حذف را نمایش می‌دهد
function DashboardCard({ data }) {
  const router = useRouter(); // استفاده از useRouter برای مدیریت ناوبری

  // تابع برای ویرایش پروفایل
  const editHandler = () => {
    router.push(`/dashboard/my-profiles/${data._id}`); // ناوبری به صفحه ویرایش پروفایل
  };

  // تابع برای حذف پروفایل
  const deleteHandler = async () => {
    const res = await fetch(`/api/profile/delete/${data._id}`, {
      method: "DELETE", // ارسال درخواست حذف به سرور
    });
    const result = await res.json(); // دریافت پاسخ از سرور
    console.log(result); // چاپ نتیجه در کنسول
    if (result.error) {
      toast.error(result.error); // نمایش پیام خطا در صورت وجود خطا
    } else {
      toast.success(result.message); // نمایش پیام موفقیت
      router.refresh(); // تازه‌سازی صفحه برای به‌روزرسانی لیست پروفایل‌ها
    }
  };

  return (
    <div className={styles.container}> {/* بخش اصلی کامپوننت */}
      <Card data={data} /> {/* نمایش اطلاعات پروفایل با استفاده از کامپوننت Card */}
      <div className={styles.main}> {/* بخش دکمه‌ها */}
        <button onClick={editHandler}> {/* دکمه ویرایش */}
          ویرایش
          <FiEdit /> {/* آیکون ویرایش */}
        </button>
        <button onClick={deleteHandler}> {/* دکمه حذف */}
          حذف آگهی
          <AiOutlineDelete /> {/* آیکون حذف */}
        </button>
      </div>
      <Toaster /> {/* نمایش نوتیفیکیشن‌ها */}
    </div>
  );
}

// صادر کردن کامپوننت DashboardCard به عنوان پیش‌فرض
export default DashboardCard;