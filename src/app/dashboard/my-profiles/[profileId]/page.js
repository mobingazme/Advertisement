import Profile from "@/models/Profile"; // وارد کردن مدل پروفایل از پایگاه داده
import AddProfilePage from "@/template/AddProfilePage"; // وارد کردن کامپوننت صفحه افزودن پروفایل
import connectDB from "@/utils/connectDB"; // وارد کردن تابع برای اتصال به پایگاه داده

// تعریف تابع Async Edit برای ویرایش پروفایل
async function Edit({ params: { profileId } }) {
  await connectDB(); // اتصال به پایگاه داده

  // جستجوی پروفایل بر اساس شناسه
  const profile = await Profile.findOne({ _id: profileId });

  // بررسی وجود پروفایل
  if (!profile) return <h3>مشکلی پیش آمده است. لطفا دوباره امتحان کنید ...</h3>; // نمایش پیام خطا در صورت عدم وجود پروفایل

  // بازگشت کامپوننت AddProfilePage با داده‌های پروفایل
  return <AddProfilePage data={JSON.parse(JSON.stringify(profile))} />;
}

// صادر کردن تابع Edit به عنوان پیش‌فرض
export default Edit;