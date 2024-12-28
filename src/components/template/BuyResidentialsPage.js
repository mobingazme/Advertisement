import Sidebar from "@/module/Sidebar"; // وارد کردن کامپوننت Sidebar برای نمایش نوار کناری
import Card from "@/module/Card"; // وارد کردن کامپوننت Card برای نمایش اطلاعات آگهی
import styles from "@/template/BuyResidentialsPage.module.css"; // وارد کردن استایل‌های مخصوص صفحه خرید ملک

// تعریف کامپوننت BuyResidentialsPage برای نمایش آگهی‌های خرید ملک
function BuyResidentialsPage({ data }) {
  return (
    <div className={styles.container}> {/* بخش اصلی کامپوننت */}
      <div className={styles.sidebar}> {/* بخش نوار کناری */}
        <Sidebar /> {/* نمایش کامپوننت Sidebar */}
      </div>
      <div className={styles.main}> {/* بخش اصلی محتوای صفحه */}
        {data.length ? null : ( // بررسی وجود آگهی‌ها
          <p className={styles.text}>هیچ آگهی ثبت نشده است</p> // نمایش پیام در صورت عدم وجود آگهی
        )}
        {data.map((profile) => ( // نقشه‌برداری از داده‌های آگهی
          <Card key={profile._id} data={profile} /> // نمایش هر آگهی با استفاده از کامپوننت Card
        ))}
      </div>
    </div>
  );
}

// صادر کردن کامپوننت BuyResidentialsPage به عنوان پیش‌فرض
export default BuyResidentialsPage;