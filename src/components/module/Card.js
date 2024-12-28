import Link from "next/link"; // وارد کردن کامپوننت Link برای ناوبری بین صفحات
import { HiOutlineLocationMarker } from "react-icons/hi"; // وارد کردن آیکون موقعیت مکانی از react-icons
import { BiLeftArrowAlt } from "react-icons/bi"; // وارد کردن آیکون پیکان چپ از react-icons
import { sp } from "@/utils/replaceNumber"; // وارد کردن تابع برای جایگزینی اعداد
import { icons } from "@/constants/icons"; // وارد کردن آیکون‌های مربوط به دسته‌بندی‌ها
import styles from "@/module/Card.module.css"; // وارد کردن استایل‌های مخصوص Card

// تعریف کامپوننت Card برای نمایش اطلاعات یک آگهی
function Card({ data: { _id, category, title, location, price } }) {
  return (
    <div className={styles.container}> {/* بخش اصلی کامپوننت */}
      <div className={styles.icon}>{icons[category]}</div> {/* نمایش آیکون مرتبط با دسته‌بندی آگهی */}
      <p className={styles.title}>{title}</p> {/* نمایش عنوان آگهی */}
      <p className={styles.location}> {/* نمایش موقعیت مکانی آگهی */}
        <HiOutlineLocationMarker /> {/* آیکون موقعیت */}
        {location} {/* محل آگهی */}
      </p>
      <span>{sp(price)} تومان</span> {/* نمایش قیمت آگهی به همراه واحد تومان */}
      <Link href={`/buy-residential/${_id}`}> {/* لینک به صفحه جزئیات آگهی */}
        مشاهده آگهی
        <BiLeftArrowAlt /> {/* آیکون پیکان چپ */}
      </Link>
    </div>
  );
}

// صادر کردن کامپوننت Card به عنوان پیش‌فرض
export default Card;