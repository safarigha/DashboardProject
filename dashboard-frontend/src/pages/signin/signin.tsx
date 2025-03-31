import React from "react";
import { Link } from "react-router-dom";
import slideshow from "@images/slideshow.jpg";

const Signin: React.FC = () => {
  return (
    <div className="min-h-screen bg-teal-50 flex items-center justify-center py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left (Image) */}
        <div className="md:w-1/2">
          <img
            src={slideshow}
            alt="login"
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

          <h2 className="text-2xl font-bold mb-8">ورود</h2>

          <input
            type="email"
            placeholder="ایمیل"
            className="mb-4 w-full border rounded-md py-3 px-4 outline-none"
          />

          <input
            type="password"
            placeholder="رمز عبور"
            className="mb-6 w-full border rounded-md py-3 px-4 outline-none"
          />

          <button className="mb-4 bg-gray-900 text-white font-bold w-full rounded-md py-3 hover:bg-gray-800 transition">
            LOGIN
          </button>

          <a
            href="#!"
            className="text-sm text-gray-700 mb-4 hover:underline font-bold"
          >
            رمز عبور خود را فراموش کردی؟
          </a>

          <p className="text-sm mb-8 text-gray-800 font-bold">
            اکانت نداری؟{" "}
            <Link
              to="/signup"
              className="text-blue-700  hover:underline font-bold"
            >
              ثبت نام
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
