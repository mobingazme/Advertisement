"use client"; // این دستور مشخص می‌کند که این کامپوننت باید در سمت کلاینت (مرورگر) اجرا شود

// ایمپورت‌های مورد نیاز
import { useEffect, useState } from "react"; // برای مدیریت حالت و اثرات جانبی
import { CopyToClipboard } from "react-copy-to-clipboard"; // برای کپی کردن متن در کلیپ‌بورد
import { LuShare2 } from "react-icons/lu"; // آیکون اشتراک‌گذاری از کتابخانه react-icons
import styles from "@/module/ShareButton.module.css"; // فایل استایل برای اعمال CSS اختصاصی

/**
 * کامپوننت ShareButton
 * این کامپوننت دکمه‌ای برای کپی کردن آدرس صفحه فعلی در کلیپ‌بورد و اشتراک‌گذاری آن نمایش می‌دهد.
 *
 * @returns {JSX.Element} - خروجی JSX شامل دکمه اشتراک‌گذاری با آیکون
 */
function ShareButton() {
  // وضعیت برای ذخیره URL فعلی صفحه
  const [url, setUrl] = useState("");

  /**
   * useEffect برای استخراج URL صفحه جاری و ذخیره آن در state
   * این اثر جانبی تنها یک بار بعد از رندر اولیه اجرا می‌شود.
   */
  useEffect(() => {
    setUrl(window.location.href); // گرفتن آدرس فعلی صفحه از window.location.href
  }, []);

  return (
    // کامپوننت CopyToClipboard از کتابخانه react-copy-to-clipboard
    // متن `url` را در کلیپ‌بورد کپی می‌کند
    <CopyToClipboard text={url}>
      {/* کانتینر کلی دکمه اشتراک‌گذاری */}
      <div className={styles.container}>
        {/* نمایش آیکون اشتراک‌گذاری */}
        <LuShare2 />
        {/* دکمه اشتراک‌گذاری */}
        <button>اشتراک گذاری</button>
      </div>
    </CopyToClipboard>
  );
}

// خروجی گرفتن از کامپوننت برای استفاده در سایر بخش‌های پروژه
export default ShareButton;
