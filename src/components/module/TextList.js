import { MdOutlineLibraryAdd } from "react-icons/md"; // آیکون افزودن
import { AiOutlineDelete } from "react-icons/ai"; // آیکون حذف
import styles from "@/module/TextList.module.css"; // فایل استایل مرتبط با کامپوننت

// کامپوننت `TextList`
// این کامپوننت به کاربر امکان می‌دهد لیستی از مقادیر متنی را مدیریت کند (اضافه کردن، حذف کردن و تغییر مقادیر).
//
// @param {Object} props - ورودی‌های کامپوننت
// @param {string} props.title - عنوان بخش
// @param {Object} props.profileData - داده‌های پروفایل که شامل لیست متنی است
// @param {Function} props.setProfileData - تابعی برای به‌روزرسانی داده‌های پروفایل
// @param {string} props.type - نوع لیست (کلید مرتبط در `profileData`)
function TextList({ title, profileData, setProfileData, type }) {
  // تابع `changeHandler`
  // این تابع مقدار یک آیتم خاص در لیست را تغییر می‌دهد.
  //
  // @param {Event} e - رویداد تغییر (change event)
  // @param {number} index - ایندکس آیتمی که تغییر داده شده است
  const changeHandler = (e, index) => {
    const { value } = e.target; // مقدار جدید ورودی
    const list = [...profileData[type]]; // یک کپی از لیست مرتبط
    list[index] = value; // مقدار جدید را به لیست اعمال می‌کنیم
    setProfileData({ ...profileData, [type]: list }); // به‌روزرسانی داده‌های پروفایل
  };

  // تابع `addHandler`
  // این تابع یک آیتم خالی جدید به انتهای لیست اضافه می‌کند.
  const addHandler = () => {
    setProfileData({ ...profileData, [type]: [...profileData[type], ""] });
  };

  // تابع `deleteHandler`
  // این تابع آیتم مشخص‌شده را از لیست حذف می‌کند.
  //
  // @param {number} index - ایندکس آیتمی که باید حذف شود
  const deleteHandler = (index) => {
    const list = [...profileData[type]]; // یک کپی از لیست مرتبط
    list.splice(index, 1); // حذف آیتم از لیست
    setProfileData({ ...profileData, [type]: list }); // به‌روزرسانی داده‌های پروفایل
  };

  return (
    <div className={styles.container}>
      {/* عنوان بخش */}
      <p>{title}</p>

      {/* نمایش لیست آیتم‌ها */}
      {profileData[type].map((i, index) => (
        <div className={styles.card} key={index}>
          {/* ورودی متن برای تغییر مقدار آیتم */}
          <input
            type="text"
            value={i} // مقدار فعلی آیتم
            onChange={(e) => changeHandler(e, index)} // مدیریت تغییرات
          />

          {/* دکمه حذف آیتم */}
          <button onClick={() => deleteHandler(index)}>
            حذف
            <AiOutlineDelete /> {/* آیکون حذف */}
          </button>
        </div>
      ))}

      {/* دکمه افزودن آیتم جدید */}
      <button onClick={addHandler}>
        افزودن
        <MdOutlineLibraryAdd /> {/* آیکون افزودن */}
      </button>
    </div>
  );
}

// خروجی کامپوننت
export default TextList;
