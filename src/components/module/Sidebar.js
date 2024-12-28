import Link from "next/link"; // وارد کردن کامپوننت Link برای ناوبری بین صفحات
import { HiFilter } from "react-icons/hi"; // وارد کردن آیکون فیلتر از react-icons
import { categories } from "@/constants/strings"; // وارد کردن دسته‌بندی‌ها از فایل constants
import styles from "@/module/Sidebar.module.css"; // وارد کردن استایل‌های مخصوص Sidebar

// تعریف کامپوننت Sidebar برای نمایش نوار کناری دسته‌بندی‌ها
function Sidebar() {
  return (
    <div className={styles.container}> {/* بخش اصلی کامپوننت */}
      <p>
        <HiFilter /> {/* آیکون فیلتر */}
        دسته بندی {/* عنوان نوار کناری */}
      </p>
      <Link href="/buy-residential">همه</Link> {/* لینک به صفحه خرید تمام آگهی‌ها */}
      {Object.keys(categories).map((i) => ( // نقشه‌برداری از دسته‌بندی‌ها
        <Link
          key={i} // افزودن کلید یکتا برای هر لینک
          href={{
            pathname: "/buy-residential", // لینک به صفحه خرید ملک
            query: { category: i }, // پارامتر دسته‌بندی به عنوان کوئری
          }}
        >
          {categories[i]} {/* نمایش نام دسته‌بندی */}
        </Link>
      ))}
    </div>
  );
}

// صادر کردن کامپوننت Sidebar به عنوان پیش‌فرض
export default Sidebar;