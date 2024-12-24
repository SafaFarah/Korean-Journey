import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/main'); // الانتقال إلى صفحة "Main" بعد التسجيل
  };

  const handleLoginClick = () => {
    navigate('/login'); // الانتقال إلى صفحة "Login" إذا كان لدى المستخدم حساب
  };

  return (
    <>
      <Helmet>
        <title>Korean Journey - Sign Up</title>
        <meta name="description" content="Sign up to Korean Journey - Your guide to learning Korean!" />
      </Helmet>

      {/* Header */}
      <header className="absolute top-0 left-0 w-full flex items-center justify-between px-4 py-0 z-20">
        <div className="absolute inset-0 bg-gray-200 bg-opacity-60 rounded-md mx-0 h-full"></div>
        <img
          src="images/img_header_logo.png"
          alt="Header Logo"
          className="relative z-10 h-[14vh] w-auto object-contain cursor-pointer"
          onClick={() => navigate("/")} // العودة إلى الصفحة الرئيسية عند الضغط على اللوقو
        />
      </header>

      {/* Main background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('images/img_group_1.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      ></div>
      <div className="absolute inset-0 bg-blue_gray-100 opacity-10"></div>

      <img
        src="images/img_ji_sook_1.png"
        alt="Ji Sook"
        className="absolute right-[16%] bottom-[4%] h-[50vh] w-auto object-contain md:h-[30vh]"
      />

      {/* Signup Box */}
      <div
        className="absolute left-0 right-0 bottom-9 mx-auto w-[30%] bg-gray-300 bg-opacity-45 rounded-[20px] border-2 border-spacing-7 px-10 py-3 sm:px-5 sm:w-[80%] sm:top-[20%]"
      >
        <div className="mb-[40px] flex flex-col items-center">
          <h2 className="mt-5 text-3xl font-bold text-blue-900">Sign Up</h2>
        </div>

        {/* Name Field */}
        <div className="mt-5">
          <label htmlFor="name" className="block text-xl text-blue-900">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full p-3 mt-2 rounded-md border border-white-a700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email Field */}
        <div className="mt-5">
          <label htmlFor="email" className="block text-xl text-blue-900">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-3 mt-2 rounded-md border border-white-a700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password Field */}
        <div className="mt-5">
          <label htmlFor="password" className="block text-xl text-blue-900">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full p-3 mt-2 rounded-md border border-white-a700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Sign Up Button */}
        <button
          onClick={handleSignupClick}
          className="mt-6 w-full p-2 bg-blue-800 text-white-a700 text-xl font-bold rounded-md hover:bg-blue-500 transition-all duration-300"
        >
          Sign Up
        </button>

        {/* Login Link */}
        <div className="mt-4 flex justify-center items-center text-lg text-blue-900">
          <span>Already have an account?</span>
          <button
            onClick={handleLoginClick}
            className="ml-2 text-red-500 font-bold hover:text-red-700 transition-all"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}

