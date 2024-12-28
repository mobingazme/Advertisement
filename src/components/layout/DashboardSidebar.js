import Link from "next/link"; // وارد کردن کامپوننت Link برای ناوبری بین صفحات
import { CgProfile } from "react-icons/cg"; // وارد کردن آیکون نمایه کاربر از react-icons
import LogoutButton from "@/module/LogoutButton"; // وارد کردن کامپوننت LogoutButton برای خروج از سیستم
import styles from "@/layout/DashboardSidebar.module.css"; // وارد کردن استایل‌های مخصوص سایدبار داشبورد

// تعریف کامپوننت DashboardSidebar که اطلاعات کاربر و لینک‌های مرتبط را نمایش می‌دهد
async function DashboardSidebar({ children, email, role }) {
  return (
    <div className={styles.container}> {/* بخش اصلی سایدبار */}
      <div className={styles.sidebar}> {/* بخش سایدبار */}
        <CgProfile /> {/* آیکون نمایه کاربر */}
        {role === "ADMIN" ? "ادمین" : null} {/* نمایش عبارت "ادمین" اگر کاربر نقش ادمین داشته باشد */}
        <p>{email}</p> {/* نمایش ایمیل کاربر */}
        <span></span> {/* فضای خالی (می‌توان برای جداکننده استفاده کرد) */}
        
        {/* لینک‌ها برای ناوبری به صفحات مختلف */}
        <Link href="/dashboard">حساب کاربری</Link> {/* لینک به صفحه حساب کاربری */}
        <Link href="/dashboard/my-profiles">آگهی های من</Link> {/* لینک به صفحه آگهی‌های کاربر */}
        <Link href="/dashboard/add">ثبت آگهی</Link> {/* لینک به صفحه ثبت آگهی */}
        
        {role === "ADMIN" ? <Link href="/admin">در انتظار تایید</Link> : null} {/* لینک به صفحه تایید برای ادمین‌ها */}
        
        <LogoutButton /> {/* دکمه خروج از سیستم */}
      </div>
      <div className={styles.main}>{children}</div> {/* بخش اصلی که فرزندان کامپوننت در آن نمایش داده می‌شوند */}
    </div>
  );
}

// صادر کردن کامپوننت DashboardSidebar به عنوان پیش‌فرض
export default DashboardSidebar;