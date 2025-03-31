import React from "react";
import { Link } from "react-router-dom";
import slideshow from "@images/slideshow.jpg";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import UserService from "@/services/userService";

const schema = z
  .object({
    username: z.string().min(5, "نام کاربری الزامی است"),
    email: z.string().email("ایمیل معتبر وارد کنید"),
    password: z.string().min(6, "رمز عبور حداقل باید 6 کاراکتر باشد"),
    confirmPassword: z.string().min(6, "تکرار رمز عبور الزامی است"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "رمز عبور و تکرار آن باید یکسان باشند",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await UserService.signup(data);
      console.log("ثبت‌نام موفق:", res);
      alert("ثبت‌نام با موفقیت انجام شد!");
    } catch (err: any) {
      console.error("خطا در ثبت‌نام:", err.response?.data || err.message);
      alert("خطا در ثبت‌نام: " + (err.response?.data || err.message));
    }
  };

  return (
    <div className="min-h-screen bg-teal-50 flex items-center justify-center py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left (Image) */}
        <div className="md:w-1/2">
          <img
            src={slideshow}
            alt="signup"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Right (Form) */}
        <div className="md:w-1/2 px-10 py-12 flex flex-col justify-center items-center">
          <div className="flex items-center mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-orange-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L3 12l6.75-5v10zm4.5 0L21 12l-6.75-5v10z"
              />
            </svg>
            <span className="text-3xl font-bold">ARI Dashboard</span>
          </div>

          <h2 className="text-2xl font-bold mb-8">ثبت نام</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <input
              type="text"
              placeholder="نام کاربری"
              className="mb-2 w-full border rounded-md py-3 px-4 outline-none"
              {...register("username")}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mb-2">
                {errors.username.message}
              </p>
            )}

            <input
              type="email"
              placeholder="ایمیل"
              className="mb-2 w-full border rounded-md py-3 px-4 outline-none"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mb-2">
                {errors.email.message}
              </p>
            )}

            <input
              type="password"
              placeholder="رمز عبور"
              className="mb-2 w-full border rounded-md py-3 px-4 outline-none"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mb-2">
                {errors.password.message}
              </p>
            )}

            <input
              type="password"
              placeholder="تکرار رمز عبور"
              className="mb-4 w-full border rounded-md py-3 px-4 outline-none"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mb-4">
                {errors.confirmPassword.message}
              </p>
            )}

            <button
              type="submit"
              className="mb-4 bg-gray-900 text-white font-bold w-full rounded-md py-3 hover:bg-gray-800 transition"
            >
              ثبت نام
            </button>
          </form>

          <p className="text-sm mb-8 text-gray-800 font-bold">
            اکانت داری؟{" "}
            <Link
              to="/signin"
              className="text-blue-700 font-semibold hover:underline"
            >
              ورود
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
