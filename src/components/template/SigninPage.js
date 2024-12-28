"use client"; // اعلام اینکه این کامپوننت در سمت کلاینت اجرا می‌شود

import Link from "next/link"; // وارد کردن کامپوننت Link برای ناوبری
import { useState } from "react"; // وارد کردن useState برای مدیریت وضعیت
import { useRouter } from "next/navigation"; // وارد کردن useRouter برای هدایت کاربر
import { signIn } from "next-auth/react"; // وارد کردن تابع signIn برای احراز هویت کاربر
import { Toaster, toast } from "react-hot-toast"; // وارد کردن Toaster و toast برای نمایش نوتیفیکیشن‌ها
import Loader from "@/module/Loader"; // وارد کردن کامپوننت Loader برای نمایش بارگذاری
import styles from "@/template/SignupPage.module.css"; // وارد کردن استایل‌ها

function SigninPage() {
  // تعریف وضعیت برای ایمیل، رمز عبور و بارگذاری
  const [email, setEmail] = useState(""); // وضعیت ایمیل
  const [password, setPassword] = useState(""); // وضعیت رمز عبور
  const [loading, setLoading] = useState(false); // وضعیت بارگذاری

  const router = useRouter(); // ایجاد یک شی router برای هدایت کاربر

  // تابع برای مدیریت ورود کاربر
  const signinHandler = async (e) => {
    e.preventDefault(); // جلوگیری از بارگذاری مجدد صفحه
    setLoading(true); // فعال کردن وضعیت بارگذاری
    // احراز هویت کاربر با استفاده از credentials
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false, // جلوگیری از هدایت خودکار بعد از ورود
    });
    setLoading(false); // غیرفعال کردن وضعیت بارگذاری
    // بررسی وجود خطا در فرآیند ورود
    if (res.error) {
      toast.error(res.error); // نمایش خطا به کاربر
    } else {
      router.push("/"); // هدایت کاربر به صفحه اصلی در صورت موفقیت
    }
  };

  return (
    <div className={styles.form}> {/* بخش اصلی فرم ورود */}
      <h4>فرم ورود</h4> {/* عنوان فرم */}
      <form>
        <label>ایمیل:</label> {/* برچسب ایمیل */}
        <input
          type="text" // نوع ورودی متن
          value={email} // مقدار ورودی ایمیل
          onChange={(e) => setEmail(e.target.value)} // به‌روزرسانی وضعیت ایمیل
        />
        <label>رمز عبور:</label> {/* برچسب رمز عبور */}
        <input
          type="password" // نوع ورودی رمز عبور
          value={password} // مقدار ورودی رمز عبور
          onChange={(e) => setPassword(e.target.value)} // به‌روزرسانی وضعیت رمز عبور
        />
        {loading ? ( // بررسی وضعیت بارگذاری
          <Loader /> // نمایش بارگذاری در صورت بارگذاری
        ) : (
          <button type="submit" onClick={signinHandler}> {/* دکمه ورود */}
            ورود
          </button>
        )}
      </form>
      <p>
        حساب کاربری ندارید؟ {/* سوال درباره وجود حساب کاربری */}
        <Link href="/signup">ثبت نام</Link> {/* لینک به صفحه ثبت نام */}
      </p>
      <Toaster /> {/* نمایش نوتیفیکیشن‌ها */}
    </div>
  );
}

export default SigninPage; // صادر کردن کامپوننت SigninPage به عنوان پیش‌فرض