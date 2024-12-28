import DashboardCard from "@/module/DashboardCard"; // وارد کردن کامپوننت DashboardCard برای نمایش پروفایل‌ها
import styles from "@/template/MyProfilesPage.module.css"; // وارد کردن استایل‌های مخصوص صفحه پروفایل‌ها

// تعریف کامپوننت MyProfilesPage که پروفایل‌های کاربر را نمایش می‌دهد
function MyProfilesPage({ profiles }) {
  return (
    <div>
      {/* بررسی اینکه آیا پروفایل‌ها وجود دارند یا خیر */}
      {profiles.length ? null : (
        <p className={styles.text}>هیچ آگهی ثبت نشده است</p> // نمایش پیام در صورت عدم وجود پروفایل
      )}
      
      {/* نقشه‌برداری از پروفایل‌ها و نمایش هر کدام با استفاده از DashboardCard */}
      {profiles.map((i) => (
        <DashboardCard key={i._id} data={JSON.parse(JSON.stringify(i))} /> // استفاده از DashboardCard برای هر پروفایل
      ))}
    </div>
  );
}

// صادر کردن کامپوننت MyProfilesPage به عنوان پیش‌فرض
export default MyProfilesPage;