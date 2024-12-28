import DatePicker from "react-multi-date-picker"; // کتابخانه انتخاب تاریخ
import persian from "react-date-object/calendars/persian"; // تقویم شمسی
import persian_fa from "react-date-object/locales/persian_fa"; // ترجمه فارسی برای تقویم شمسی
import styles from "@/module/CustomDatePicker.module.css"; // فایل استایل مخصوص این کامپوننت

// کامپوننت `CustomDatePicker`
// این کامپوننت امکان انتخاب تاریخ ساخت (تاریخ شمسی) را به کاربر می‌دهد.
//
// @param {Object} props - ورودی‌های کامپوننت
// @param {Object} props.profileData - داده‌های پروفایل شامل `constructionDate`
// @param {Function} props.setProfileData - تابعی برای به‌روزرسانی داده‌های پروفایل
function CustomDatePicker({ profileData, setProfileData }) {
  // تابع `changeHandler`
  // این تابع زمانی اجرا می‌شود که کاربر تاریخ جدیدی را انتخاب کند.
  //
  // @param {Object} e - تاریخ انتخاب شده
  const changeHandler = (e) => {
    const date = new Date(e); // تبدیل تاریخ انتخابی به یک شیء تاریخ استاندارد
    setProfileData({ ...profileData, constructionDate: date }); // به‌روزرسانی مقدار `constructionDate` در داده‌های پروفایل
  };

  return (
    <div className={styles.container}>
      {/* برچسب مربوط به تاریخ ساخت */}
      <p>تاریخ ساخت</p>

      {/* کامپوننت انتخاب تاریخ */}
      <DatePicker
        calendar={persian} // استفاده از تقویم شمسی
        locale={persian_fa} // تنظیمات فارسی برای تقویم
        value={profileData.constructionDate} // مقدار اولیه تاریخ
        onChange={changeHandler} // مدیریت تغییر تاریخ
        calendarPosition="bottom-right" // موقعیت تقویم در صفحه
      />
    </div>
  );
}

// خروجی کامپوننت
export default CustomDatePicker;
