"use client"; // اعلام اینکه این کامپوننت در سمت کلاینت اجرا می‌شود

import { signOut } from "next-auth/react"; // وارد کردن تابع signOut برای خروج از سیستم
import { FiLogOut } from "react-icons/fi"; // وارد کردن آیکون خروج از react-icons
import styles from "@/module/LogoutButton.module.css"; // وارد کردن استایل‌های مخصوص دکمه خروج

// تعریف کامپوننت LogoutButton
function LogoutButton() {
  return (
    <button className={styles.button} onClick={signOut}> {/* دکمه خروج با استایل مخصوص */}
      <FiLogOut /> {/* آیکون خروج */}
      خروج {/* متن دکمه */}
    </button>
  );
}

// صادر کردن کامپوننت LogoutButton به عنوان پیش‌فرض
export default LogoutButton;