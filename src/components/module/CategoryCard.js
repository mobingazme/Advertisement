import Link from "next/link"; // وارد کردن کامپوننت Link برای ناوبری بین صفحات
import Image from "next/image"; // وارد کردن کامپوننت Image برای بهینه‌سازی تصاویر
import styles from "@/module/CategoryCard.module.css"; // وارد کردن استایل‌های مخصوص CategoryCard

// تعریف کامپوننت CategoryCard برای نمایش یک کارت دسته‌بندی
function CategoryCard({ name, title }) {
  return (
    <div className={styles.card}> {/* بخش اصلی کارت */}
      <Link href={`/buy-residential?category=${name}`}> {/* لینک به صفحه خرید با پارامتر دسته‌بندی */}
        <Image
          src={`/images/${name}.png`} // منبع تصویر بر اساس نام دسته‌بندی
          alt={title} // متن جایگزین تصویر
          width={240} // عرض تصویر
          height={144} // ارتفاع تصویر
          priority={true} // بارگذاری اولویت‌دار تصویر
        />
        <p>{title}</p> {/* عنوان دسته‌بندی */}
      </Link>
    </div>
  );
}

// صادر کردن کامپوننت CategoryCard به عنوان پیش‌فرض
export default CategoryCard;