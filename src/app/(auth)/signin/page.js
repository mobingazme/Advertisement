import { getServerSession } from "next-auth"; // وارد کردن تابع برای دریافت جلسه کاربری
import { redirect } from "next/navigation"; // وارد کردن تابع برای هدایت کاربر
import { authOptions } from "@/api/auth/[...nextauth]/route"; // وارد کردن تنظیمات احراز هویت
import SigninPage from "@/template/SigninPage"; // وارد کردن صفحه ورود

// تعریف تابع Signin به صورت async
async function Signin() {
  // دریافت اطلاعات جلسه کاربری با استفاده از تنظیمات احراز هویت
  const session = await getServerSession(authOptions);
  
  // بررسی اینکه آیا جلسه‌ای وجود دارد
  if (session) {
    // اگر جلسه وجود داشته باشد، کاربر به صفحه اصلی هدایت می‌شود
    redirect("/");
  }

  // در غیر این صورت، صفحه ورود نمایش داده می‌شود
  return <SigninPage />;
}

// صادر کردن تابع Signin به عنوان پیش‌فرض
export default Signin;