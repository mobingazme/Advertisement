import { Schema, model, models } from "mongoose"; // ایمپورت ابزارهای لازم از Mongoose

// تعریف اسکیمای `profileSchema`
// این اسکیمای Mongoose ساختار اطلاعات مرتبط با پروفایل را تعیین می‌کند.
//
// ویژگی‌های اسکیمای پروفایل:
// - شامل اطلاعاتی مانند عنوان، توضیحات، مکان، شماره تماس، دسته‌بندی، امکانات و غیره
const profileSchema = new Schema(
  {
    // عنوان (اجباری)
    title: {
      type: String, // نوع داده: رشته
      required: true, // مقدار اجباری است
    },
    // توضیحات (اجباری)
    description: {
      type: String, // نوع داده: رشته
      required: true, // مقدار اجباری است
    },
    // مکان (اجباری)
    location: {
      type: String, // نوع داده: رشته
      required: true, // مقدار اجباری است
    },
    // شماره تماس (اجباری)
    phone: {
      type: String, // نوع داده: رشته
      required: true, // مقدار اجباری است
    },
    // مشاور املاک مرتبط (اجباری)
    realState: {
      type: String, // نوع داده: رشته
      required: true, // مقدار اجباری است
    },
    // قیمت (اجباری)
    price: {
      type: Number, // نوع داده: عدد
      required: true, // مقدار اجباری است
    },
    // تاریخ ساخت (اجباری)
    constructionDate: {
      type: Date, // نوع داده: تاریخ
      required: true, // مقدار اجباری است
    },
    // دسته‌بندی (اجباری با مقادیر محدود)
    category: {
      type: String, // نوع داده: رشته
      enum: ["villa", "apartment", "store", "office"], // مقادیر مجاز
      required: true, // مقدار اجباری است
    },
    // امکانات (اختیاری)
    amenities: {
      type: [String], // نوع داده: آرایه‌ای از رشته‌ها
      default: [], // مقدار پیش‌فرض: آرایه خالی
    },
    // قوانین (اختیاری)
    rules: {
      type: [String], // نوع داده: آرایه‌ای از رشته‌ها
      default: [], // مقدار پیش‌فرض: آرایه خالی
    },
    // شناسه کاربر مرتبط (اختیاری)
    userId: {
      type: Schema.Types.ObjectId, // نوع داده: ObjectId
      ref: "User", // مرجع: مدل کاربر
    },
    // وضعیت انتشار (اختیاری)
    published: {
      type: Boolean, // نوع داده: بولین
      default: false, // مقدار پیش‌فرض: منتشر نشده
    },
  },
  { timestamps: true } // فعال کردن زمان‌های ایجاد و به‌روزرسانی خودکار
);

// ایجاد یا استفاده از مدل `Profile`
// بررسی می‌کند که آیا مدل از قبل تعریف شده است یا خیر. اگر تعریف نشده باشد، مدل جدید ایجاد می‌شود.
const Profile = models.Profile || model("Profile", profileSchema);

// خروجی مدل `Profile`
export default Profile;
