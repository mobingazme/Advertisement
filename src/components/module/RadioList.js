import styles from "@/module/RadioList.module.css";

// کامپوننت `RadioList`
// کامپوننتی برای نمایش لیست گزینه‌های رادیویی و مدیریت دسته‌بندی انتخاب‌شده در داده‌های پروفایل.
//
// @param {object} props - پارامترهای ورودی کامپوننت
// @param {object} props.profileData - اطلاعات فعلی پروفایل شامل دسته‌بندی انتخاب‌شده
// @param {function} props.setProfileData - تابعی برای به‌روزرسانی داده‌های پروفایل
function RadioList({ profileData, setProfileData }) {
  // استخراج مقدار فعلی دسته‌بندی از داده‌های پروفایل
  const { category } = profileData;

  // تابع تغییر داده‌ها
  // هنگامی که کاربر گزینه‌ای را تغییر دهد، مقدار جدید به داده‌های پروفایل اضافه می‌شود.
  //
  // @param {Event} e - رویداد تغییر از عنصر ورودی
  const changeHandler = (e) => {
    const { name, value } = e.target; // استخراج نام و مقدار ورودی
    // به‌روزرسانی داده‌های پروفایل با مقدار جدید
    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <div className={styles.container}>
      {/* عنوان دسته‌بندی */}
      <p>دسته بندی</p>
      <div className={styles.main}>
        {/* گزینه‌های رادیویی */}
        <div>
          <label htmlFor="villa">ویلا</label>
          <input
            type="radio"
            name="category"
            value="villa"
            id="villa"
            checked={category === "villa"} // بررسی انتخاب‌شدن گزینه
            onChange={changeHandler} // اتصال به تابع تغییر داده‌ها
          />
        </div>
        <div>
          <label htmlFor="apartment">آپارتمان</label>
          <input
            type="radio"
            name="category"
            value="apartment"
            id="apartment"
            checked={category === "apartment"} // بررسی انتخاب‌شدن گزینه
            onChange={changeHandler} // اتصال به تابع تغییر داده‌ها
          />
        </div>
        <div>
          <label htmlFor="store">مغازه</label>
          <input
            type="radio"
            name="category"
            value="store"
            id="store"
            checked={category === "store"} // بررسی انتخاب‌شدن گزینه
            onChange={changeHandler} // اتصال به تابع تغییر داده‌ها
          />
        </div>
        <div>
          <label htmlFor="office">دفتر</label>
          <input
            type="radio"
            name="category"
            value="office"
            id="office"
            checked={category === "office"} // بررسی انتخاب‌شدن گزینه
            onChange={changeHandler} // اتصال به تابع تغییر داده‌ها
          />
        </div>
      </div>
    </div>
  );
}

export default RadioList;
