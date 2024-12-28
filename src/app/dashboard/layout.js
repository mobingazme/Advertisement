import { redirect } from "next/navigation"; // وارد کردن تابع redirect برای هدایت کاربر
import { getServerSession } from "next-auth"; // وارد کردن تابع برای دریافت جلسه کاربری
import { authOptions } from "../api/auth/[...nextauth]/route"; // وارد کردن تنظیمات احراز هویت
import connectDB from "@/utils/connectDB"; // وارد کردن تابع برای اتصال به پایگاه داده
import User from "@/models/User"; // وارد کردن مدل کاربر از پایگاه داده
import DashboardSidebar from "@/layout/DashboardSidebar"; // وارد کردن کامپوننت سایدبار داشبورد

// تعریف متادیتا برای صفحه داشبورد
export const metadata = {
  title: "پنل کاربری املاک | پروژه بوتواستارت", // عنوان صفحه
};

// تعریف کامپوننت DashboardLayout
async function DashboardLayout({ children }) {
  // دریافت اطلاعات جلسه کاربر با استفاده از تنظیمات احراز هویت
  const session = await getServerSession(authOptions);
  
  // بررسی اینکه آیا کاربر وارد سیستم شده است
  if (!session) redirect("/signin"); // اگر کاربر وارد نشده باشد، به صفحه ورود هدایت می‌شود

  // اتصال به پایگاه داده
  await connectDB();
  
  // جستجوی کاربر در پایگاه داده بر اساس ایمیل
  const user = await User.findOne({ email: session.user.email });

  // بررسی وجود کاربر در پایگاه داده
  if (!user) return <h3>مشکلی پیش آمده است</h3>; // در صورت عدم وجود کاربر، پیام خطا نمایش داده می‌شود

  // بازگشت کامپوننت سایدبار داشبورد با اطلاعات کاربر
  return (
    <DashboardSidebar role={user.role} email={user.email}> {/* ارسال نقش و ایمیل کاربر به سایدبار */}
      {children} {/* نمایش فرزندان کامپوننت */}
    </DashboardSidebar>
  );
}

// صادر کردن کامپوننت DashboardLayout به عنوان پیش‌فرض
export default DashboardLayout;