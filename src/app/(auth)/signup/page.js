// ایمپورت تابع getServerSession برای بررسی نشست کاربر از ماژول next-auth
import { getServerSession } from "next-auth";
// ایمپورت تابع redirect برای هدایت کاربر به صفحه دیگر از ماژول next/navigation
import { redirect } from "next/navigation";
// ایمپورت تنظیمات احراز هویت از فایل authOptions
import { authOptions } from "@/api/auth/[...nextauth]/route";
// ایمپورت کامپوننت SignupPage برای نمایش فرم ثبت نام
import SignupPage from "@/template/SignupPage";

/**
 * کامپوننت Signup 
 * یک کامپوننت سرور-محور (Server Component) است که وظیفه بررسی وضعیت نشست کاربر 
 * و هدایت یا نمایش فرم ثبت نام را بر عهده دارد.
 */
async function Signup() {
  // بررسی وضعیت نشست کاربر با استفاده از تنظیمات احراز هویت
  const session = await getServerSession(authOptions);

  // اگر کاربر قبلاً وارد شده باشد، او را به صفحه اصلی هدایت می‌کند
  if (session) redirect("/");

  // اگر نشست وجود نداشته باشد، فرم ثبت نام را به کاربر نمایش می‌دهد
  return <SignupPage />;
}

// اکسپورت کامپوننت Signup برای استفاده در سایر بخش‌های پروژه
export default Signup;
