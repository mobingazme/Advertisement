import styles from "@/template/DashboardPage.module.css"; // وارد کردن استایل‌های مخصوص صفحه داشبورد

// تعریف کامپوننت DashboardPage که اطلاعات مربوط به کاربر را نمایش می‌دهد
function DashboardPage({ createdAt }) {
  return (
    <div className={styles.container}> {/* بخش اصلی صفحه با استایل مخصوص */}
      <h3>سلام 👋</h3> {/* عنوان خوشامدگویی */}
      <p>آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند</p> {/* پیام راهنما برای کاربر */}
      <div className={styles.createdAt}> {/* بخش نمایش تاریخ عضویت */}
        <p>تاریخ عضویت:</p> {/* برچسب برای تاریخ عضویت */}
        <span>{new Date(createdAt).toLocaleDateString("fa-IR")}</span> {/* نمایش تاریخ عضویت به فرمت فارسی */}
      </div>
    </div>
  );
}

// صادر کردن کامپوننت DashboardPage به عنوان پیش‌فرض
export default DashboardPage;