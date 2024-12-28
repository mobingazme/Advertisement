"use client"; // تعیین می‌کند که این کامپوننت یک کامپوننت کلاینت است و در سمت کاربر اجرا می‌شود

// ایمپورت‌های مورد نیاز از React و ابزارهای کمکی
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // برای مسیریابی و بروزرسانی مسیرها
import { Toaster, toast } from "react-hot-toast"; // برای نمایش نوتیفیکیشن‌ها
import TextInput from "@/module/TextInput"; // کامپوننت برای ورودی متن
import RadioList from "@/module/RadioList"; // کامپوننت برای لیست گزینه‌های رادیویی
import TextList from "@/module/TextList"; // کامپوننت برای لیست متنی (مانند قوانین یا امکانات)
import CustomDatePicker from "@/module/CustomDatePicker"; // کامپوننت انتخاب تاریخ
import Loader from "@/module/Loader"; // کامپوننت لودر برای نمایش بارگذاری
import styles from "@/template/AddProfilePage.module.css"; // استایل‌های CSS مرتبط

/**
 * کامپوننت AddProfilePage
 * صفحه‌ای برای ثبت یا ویرایش اطلاعات آگهی
 * @param {Object} props - شامل داده‌های اولیه (در صورت ویرایش) از prop `data`
 */
function AddProfilePage({ data }) {
  // مدیریت داده‌های فرم در State
  const [profileData, setProfileData] = useState({
    title: "", // عنوان آگهی
    description: "", // توضیحات آگهی
    location: "", // آدرس
    phone: "", // شماره تماس
    price: "", // قیمت
    realState: "", // نام بنگاه
    constructionDate: new Date(), // تاریخ ساخت
    category: "", // دسته‌بندی
    rules: [], // لیست قوانین
    amenities: [], // لیست امکانات رفاهی
  });

  // مدیریت وضعیت بارگذاری (loading)
  const [loading, setLoading] = useState(false);

  // استفاده از useEffect برای تنظیم مقادیر پیش‌فرض در صورت وجود داده‌ها (data)
  useEffect(() => {
    if (data) setProfileData(data); // در صورت ویرایش، داده‌های آگهی را در State قرار می‌دهد
  }, [data]);

  // ابزار مسیریابی برای تغییر مسیرها
  const router = useRouter();

  /**
   * هندلر ثبت آگهی جدید
   * داده‌های فرم را به سرور ارسال می‌کند (متد POST)
   */
  const submitHandler = async () => {
    setLoading(true); // فعال کردن وضعیت بارگذاری
    const res = await fetch("/api/profile", {
      method: "POST", // درخواست ارسال داده جدید
      body: JSON.stringify(profileData), // تبدیل داده‌ها به فرمت JSON
      headers: { "Content-Type": "application/json" }, // تنظیم نوع محتوا
    });
    const data = await res.json(); // پاسخ سرور را به JSON تبدیل می‌کند
    setLoading(false); // غیر فعال کردن بارگذاری
    if (data.error) {
      toast.error(data.error); // نمایش خطا در صورت وجود
    } else {
      toast.success(data.message); // نمایش پیام موفقیت
      router.refresh(); // بروزرسانی صفحه یا اطلاعات
    }
  };

  /**
   * هندلر ویرایش آگهی موجود
   * داده‌های فرم را به سرور ارسال می‌کند (متد PATCH)
   */
  const editHandler = async () => {
    setLoading(true); // فعال کردن وضعیت بارگذاری
    const res = await fetch("/api/profile", {
      method: "PATCH", // درخواست ویرایش داده موجود
      body: JSON.stringify(profileData), // تبدیل داده‌ها به فرمت JSON
      headers: { "Content-Type": "application/json" }, // تنظیم نوع محتوا
    });
    const data = await res.json(); // پاسخ سرور را به JSON تبدیل می‌کند
    setLoading(false); // غیر فعال کردن بارگذاری
    if (data.error) {
      toast.error(data.error); // نمایش خطا در صورت وجود
    } else {
      toast.success(data.message); // نمایش پیام موفقیت
      router.refresh(); // بروزرسانی صفحه یا اطلاعات
    }
  };

  // رابط کاربری کامپوننت
  return (
    <div className={styles.container}>
      {/* عنوان صفحه بر اساس حالت (ثبت یا ویرایش) */}
      <h3>{data ? "ویرایش آگهی" : "ثبت آگهی"}</h3>

      {/* کامپوننت ورودی متن برای هر فیلد اطلاعاتی */}
      <TextInput
        title="عنوان آگهی"
        name="title"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="توضیحات"
        name="description"
        profileData={profileData}
        setProfileData={setProfileData}
        textarea={true} // این ورودی به صورت textarea نمایش داده می‌شود
      />
      <TextInput
        title="آدرس"
        name="location"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="شماره تماس"
        name="phone"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="قیمت(تومان)"
        name="price"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="بنگاه"
        name="realState"
        profileData={profileData}
        setProfileData={setProfileData}
      />

      {/* لیست گزینه‌های رادیویی */}
      <RadioList profileData={profileData} setProfileData={setProfileData} />

      {/* لیست امکانات رفاهی */}
      <TextList
        title="امکانات رفاهی"
        profileData={profileData}
        setProfileData={setProfileData}
        type="amenities"
      />

      {/* لیست قوانین */}
      <TextList
        title="قوانین"
        profileData={profileData}
        setProfileData={setProfileData}
        type="rules"
      />

      {/* انتخاب تاریخ ساخت */}
      <CustomDatePicker
        profileData={profileData}
        setProfileData={setProfileData}
      />

      {/* نمایش نوتیفیکیشن‌ها */}
      <Toaster />

      {/* نمایش لودر یا دکمه‌های ثبت/ویرایش بر اساس وضعیت */}
      {loading ? (
        <Loader />
      ) : data ? (
        <button className={styles.submit} onClick={editHandler}>
          ویرایش آگهی
        </button>
      ) : (
        <button className={styles.submit} onClick={submitHandler}>
          ثبت آگهی
        </button>
      )}
    </div>
  );
}

// اکسپورت کامپوننت AddProfilePage برای استفاده در سایر بخش‌های پروژه
export default AddProfilePage;
