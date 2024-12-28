import { getServerSession } from "next-auth"; // وارد کردن تابع برای دریافت جلسه کاربر
import { authOptions } from "../api/auth/[...nextauth]/route"; // وارد کردن تنظیمات احراز هویت
import connectDB from "@/utils/connectDB"; // وارد کردن تابع برای اتصال به پایگاه داده
import User from "@/models/User"; // وارد کردن مدل کاربر از پایگاه داده
import DashboardPage from "@/template/DashboardPage"; // وارد کردن کامپوننت DashboardPage برای نمایش اطلاعات داشبورد

// تعریف تابع Async Dashboard برای بارگذاری اطلاعات داشبورد
async function Dashboard() {
  await connectDB(); // اتصال به پایگاه داده

  // دریافت اطلاعات جلسه کاربر
  const session = await getServerSession(authOptions);

  // جستجوی کاربر در پایگاه داده بر اساس ایمیل
  const user = await User.findOne({ email: session.user.email });

  // بازگشت کامپوننت DashboardPage با تاریخ عضویت کاربر
  return <DashboardPage createdAt={user.createdAt} />;
}

// صادر کردن تابع Dashboard به عنوان پیش‌فرض
export default Dashboard;