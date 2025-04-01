import React from "react";
import { Link } from "react-router-dom";
import slideshow from "@images/slideshow.jpg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema, SigninInput } from "@/schemas/userSchema";
import userService from "@/services/userService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { signin } from "@features/auth/authSlice";

const Signin: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninInput>({
    resolver: zodResolver(signinSchema),
  });

  const onSubmit = async (data: SigninInput) => {
    try {
      const result = await userService.signin(data);
      localStorage.setItem("username", result.username);
      dispatch(signin({ username: result.username }));
      toast.success("ورود موفقیت‌آمیز بود");
      navigate("/home");
    } catch (err: any) {
      toast.error("خطا در ورود، لطفاً دوباره تلاش کنید");
    }
  };

  return (
    <div className="min-h-screen bg-teal-50 flex items-center justify-center py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Right (Form) */}
        <div className="md:w-1/2 px-10 py-12 flex flex-col justify-center items-center">
          <div className="flex flex-col items-center mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-20 text-orange-500 mb-2"
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

          <h2 className="text-2xl font-bold mb-8">ورود</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
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
              className="mb-4 w-full border rounded-md py-3 px-4 outline-none"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mb-4">
                {errors.password.message}
              </p>
            )}

            <button
              type="submit"
              className="mb-4 bg-gray-900 text-white font-bold w-full rounded-md py-3 hover:bg-gray-800 transition cursor-pointer"
            >
              ورود
            </button>
          </form>

          <Link
            to="#!"
            className="text-sm text-gray-700 mb-4 hover:underline font-bold cursor-pointer"
          >
            رمز عبور خود را فراموش کردی؟
          </Link>

          <p className="text-sm mb-8 text-gray-800 font-bold">
            اکانت نداری؟{" "}
            <Link
              to="/signup"
              className="text-blue-700  hover:underline font-bold cursor-pointer"
            >
              ثبت نام
            </Link>
          </p>
        </div>
        {/* Left (Image) */}
        <div className="md:w-1/2">
          <img
            src={slideshow}
            alt="login"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
