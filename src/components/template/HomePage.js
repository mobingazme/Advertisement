import { FiCircle } from "react-icons/fi"; // وارد کردن آیکون دایره از react-icons
import { FaCity } from "react-icons/fa"; // وارد کردن آیکون شهر از react-icons
import CategoryCard from "@/module/CategoryCard"; // وارد کردن کامپوننت CategoryCard برای نمایش دسته‌ها
import { categories, cities, services } from "@/constants/strings"; // وارد کردن دسته‌ها، شهرها و خدمات از فایل constants
import styles from "@/template/HomePage.module.css"; // وارد کردن استایل‌های مخصوص صفحه اصلی

// تعریف کامپوننت HomePage که صفحه اصلی برنامه را نمایش می‌دهد
function HomePage() {
  return (
    <div>
      <div className={styles.banner}> {/* بخش بنر صفحه */}
        <div className={styles.desc}> {/* توضیحات بنر */}
          <h1>سامانه خرید و اجاره ملک</h1> {/* عنوان صفحه */}
          <ul> {/* لیست خدمات */}
            {services.map((i) => ( // نقشه‌برداری از خدمات
              <li key={i}> {/* عنصر لیست برای هر خدمت */}
                <FiCircle /> {/* آیکون دایره */}
                <span>{i}</span> {/* نام خدمت */}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.categories}> {/* بخش دسته‌ها */}
        {Object.keys(categories).map((i) => ( // نقشه‌برداری از دسته‌ها
          <CategoryCard key={i} title={categories[i]} name={i} /> // ایجاد یک کامپوننت CategoryCard برای هر دسته
        ))}
      </div>
      <div className={styles.city}> {/* بخش شهرهای پر بازدید */}
        <h3>شهر های پر بازدید</h3> {/* عنوان بخش شهرها */}
        <ul> {/* لیست شهرها */}
          {cities.map((i) => ( // نقشه‌برداری از شهرها
            <li key={i}> {/* عنصر لیست برای هر شهر */}
              <FaCity /> {/* آیکون شهر */}
              <span>{i}</span> {/* نام شهر */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// صادر کردن کامپوننت HomePage به عنوان پیش‌فرض
export default HomePage;