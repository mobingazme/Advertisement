"use client"; 
// این دستور برای فعال‌سازی حالت کلاینت در کامپوننت استفاده می‌شود، زیرا از هوک‌های React استفاده می‌کنیم.

import Link from "next/link"; 
// لینک‌دهی داخلی در Next.js برای جابجایی بین صفحات

import { useState } from "react"; 
// برای مدیریت وضعیت‌های محلی (state) کامپوننت

import { useRouter } from "next/navigation"; 
// هوک برای هدایت کاربر به صفحات دیگر

import { Toaster, toast } from "react-hot-toast"; 
// برای نمایش نوتیفیکیشن‌ها و پیام‌های واکنشی

import Loader from "@/module/Loader"; 
// کامپوننتی که نمایش‌دهنده لودر هنگام بارگذاری است

import styles from "@/template/SignupPage.module.css"; 
// استایل‌های مربوط به این صفحه از فایل CSS ماژول ایمپورت می‌شود

function SignupPage() {
  // وضعیت‌های محلی برای ایمیل، رمز عبور، تکرار رمز عبور و لودینگ
  const [email, setEmail] = useState(""); // مقدار ایمیل
  const [password, setPassword] = useState(""); // مقدار رمز عبور
  const [rePassword, setRePassword] = useState(""); // مقدار تکرار رمز عبور
  const [loading, setLoading] = useState(false); // نمایش لودر

  const router = useRouter(); 
  // برای هدایت کاربر به صفحه دیگری پس از موفقیت در ثبت نام

  // تابع هندلر برای ثبت‌نام
  const signupHandler = async (e) => {
    e.preventDefault(); // جلوگیری از رفتار پیش‌فرض فرم

    // بررسی تساوی رمز عبور و تکرار آن
    if (password !== rePassword) {
      toast.error("رمز و تکرار آن برابر نیست"); // نمایش پیام خطا
      return;
    }

    setLoading(true); // فعال کردن حالت لودینگ

    try {
      // ارسال درخواست ثبت‌نام به API
      const res = await fetch("/api/auth/signup", {
        method: "POST", // متد درخواست
        body: JSON.stringify({ email, password }), // ارسال داده‌های ایمیل و رمز عبور
        headers: { "Content-Type": "application/json" }, // نوع محتوا
      });

      const data = await res.json(); // پاسخ API را به JSON تبدیل می‌کنیم
      setLoading(false); // غیرفعال کردن حالت لودینگ

      if (res.status === 201) {
        // اگر ثبت‌نام موفق بود
        router.push("/signin"); // هدایت کاربر به صفحه ورود
      } else {
        toast.error(data.error); // نمایش پیام خطای بازگشتی از سرور
      }
    } catch (error) {
      setLoading(false); // غیرفعال کردن حالت لودینگ در صورت خطا
      toast.error("خطایی رخ داده است، لطفاً دوباره تلاش کنید"); // نمایش پیام خطا
    }
  };

  return (
    <div className={styles.form}>
      {/* فرم ثبت‌نام */}
      <h4>فرم ثبت نام</h4>
      <form>
        {/* فیلد ورودی ایمیل */}
        <label>ایمیل:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // به‌روزرسانی مقدار ایمیل
        />
        {/* فیلد ورودی رمز عبور */}
        <label>رمز عبور:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // به‌روزرسانی مقدار رمز عبور
        />
        {/* فیلد ورودی تکرار رمز عبور */}
        <label>تکرار رمز عبور:</label>
        <input
          type="password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)} // به‌روزرسانی مقدار تکرار رمز عبور
        />
        {/* نمایش لودر یا دکمه ثبت‌نام */}
        {loading ? (
          <Loader /> // نمایش لودر هنگام بارگذاری
        ) : (
          <button type="submit" onClick={signupHandler}>
            ثبت نام
          </button>
        )}
      </form>
      {/* لینک به صفحه ورود */}
      <p>
        حساب کاربری دارید؟
        <Link href="/signin">ورود</Link>
      </p>
      {/* نمایش نوتیفیکیشن‌ها */}
      <Toaster />
    </div>
  );
}

export default SignupPage; 
// اکسپورت کامپوننت برای استفاده در جاهای دیگر
