import { NextResponse } from "next/server"; // وارد کردن NextResponse برای ارسال پاسخ به درخواست‌ها
import connectDB from "@/utils/connectDB"; // وارد کردن تابع برای اتصال به پایگاه داده
import { getServerSession } from "next-auth"; // وارد کردن تابع برای دریافت جلسه کاربر
import Profile from "@/models/Profile"; // وارد کردن مدل پروفایل از پایگاه داده
import User from "@/models/User"; // وارد کردن مدل کاربر از پایگاه داده

// تابع DELETE برای حذف پروفایل
export async function DELETE(req, context) {
  try {
    await connectDB(); // اتصال به پایگاه داده

    const id = context.params.profileId; // استخراج شناسه پروفایل از پارامترهای درخواست

    const session = await getServerSession(req); // دریافت اطلاعات جلسه کاربر
    if (!session) { // بررسی اینکه آیا کاربر وارد حساب شده است یا خیر
      return NextResponse.json(
        {
          error: "لطفا وارد حساب کاربری خود شوید", // پیام خطا در صورت عدم ورود
        },
        { status: 401 } // وضعیت 401 Unauthorized
      );
    }

    const user = await User.findOne({ email: session.user.email }); // جستجوی کاربر بر اساس ایمیل
    if (!user) { // بررسی اینکه آیا کاربر در پایگاه داده وجود دارد یا خیر
      return NextResponse.json(
        {
          error: "حساب کاربری یافت نشد", // پیام خطا در صورت عدم وجود کاربر
        },
        { status: 404 } // وضعیت 404 Not Found
      );
    }

    const profile = await Profile.findOne({ _id: id }); // جستجوی پروفایل بر اساس شناسه
    if (!user._id.equals(profile.userId)) { // بررسی اینکه آیا کاربر مالک پروفایل است یا خیر
      return NextResponse.json(
        {
          error: "دستری شما به این آگهی محدود شده است", // پیام خطا در صورت عدم دسترسی
        },
        { status: 403 } // وضعیت 403 Forbidden
      );
    }

    await Profile.deleteOne({ _id: id }); // حذف پروفایل از پایگاه داده

    return NextResponse.json(
      { message: "آگهی موردنظر حذف شد" }, // پیام موفقیت در حذف
      { status: 200 } // وضعیت 200 OK
    );
  } catch (err) {
    console.log(err); // چاپ خطا در کنسول
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" }, // پیام خطا در صورت بروز مشکل
      { status: 500 } // وضعیت 500 Internal Server Error
    );
  }
}