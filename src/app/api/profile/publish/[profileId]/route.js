import { NextResponse } from "next/server"; // ابزار برای ارسال پاسخ از سمت سرور
import { getServerSession } from "next-auth"; // ابزار برای گرفتن اطلاعات نشست (session)
import connectDB from "@/utils/connectDB"; // تابع اتصال به پایگاه داده
import Profile from "@/models/Profile"; // مدل مربوط به پروفایل‌ها
import User from "@/models/User"; // مدل مربوط به کاربران

// هندلر متد PATCH برای انتشار یک آگهی
export async function PATCH(req, context) {
  try {
    await connectDB(); // اتصال به پایگاه داده

    const id = context.params.profileId; // استخراج شناسه پروفایل از پارامترهای مسیر

    // گرفتن اطلاعات نشست کاربر از درخواست
    const session = await getServerSession(req);
    if (!session) {
      // اگر کاربر وارد نشده باشد
      return NextResponse.json(
        {
          error: "لطفا وارد حساب کاربری خود شوید",
        },
        { status: 401 } // کد وضعیت HTTP 401 (Unauthorized)
      );
    }

    // پیدا کردن کاربر بر اساس ایمیل نشست
    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      // اگر کاربر یافت نشد
      return NextResponse.json(
        {
          error: "حساب کاربری یافت نشد",
        },
        { status: 404 } // کد وضعیت HTTP 404 (Not Found)
      );
    }

    // بررسی نقش کاربر (فقط ادمین‌ها مجاز به انجام این عملیات هستند)
    if (user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "دسترسی محدود" },
        {
          status: 403, // کد وضعیت HTTP 403 (Forbidden)
        }
      );
    }

    // پیدا کردن پروفایل بر اساس شناسه
    const profile = await Profile.findOne({ _id: id });
    profile.published = true; // تغییر وضعیت انتشار به true
    profile.save(); // ذخیره تغییرات در پایگاه داده

    return NextResponse.json(
      { message: "آگهی منتشر شد" }, 
      { status: 200 } // کد وضعیت HTTP 200 (OK)
    );
  } catch (err) {
    // در صورت بروز خطا
    console.log(err); // چاپ خطا در کنسول برای دیباگ
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 } // کد وضعیت HTTP 500 (Internal Server Error)
    );
  }
}
