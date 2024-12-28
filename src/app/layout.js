import NextAuthProvider from "@/providers/NextAuthProvider"; // وارد کردن کامپوننت NextAuthProvider برای مدیریت احراز هویت
import Layout from "@/layout/Layout"; // وارد کردن کامپوننت Layout برای ساختار کلی صفحه
import { yekan } from "@/utils/fonts"; // وارد کردن فونت Yekan از فایل utils
import "./globals.css"; // وارد کردن استایل‌های عمومی

// تعریف متادیتا برای صفحه
export const metadata = {
  title: "املاک | پروژه بوتواستارت", // عنوان صفحه
  description: "سایت خرید و فروش املاک", // توضیحات صفحه
  icons: { icon: "./favicon.ico" }, // آیکون صفحه
};

// تعریف کامپوننت RootLayout
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl"> {/* تنظیم زبان به فارسی و جهت نوشتار به راست */}
      <body className={yekan.className}> {/* تعیین کلاس فونت برای بدنه */}
        <NextAuthProvider> {/* استفاده از NextAuthProvider برای فراهم کردن دسترسی به اطلاعات احراز هویت */}
          <Layout>{children}</Layout> {/* نمایش کامپوننت Layout و فرزندان آن */}
        </NextAuthProvider>
      </body>
    </html>
  );
}