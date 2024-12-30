import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  // التحقق من وجود المستخدم المسجل بالفعل
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error || "Failed to register");
      }

      navigate("/login"); // الانتقال إلى صفحة تسجيل الدخول بعد النجاح
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>Korean Journey - Signup</title>
        <meta name="description" content="Signup for Korean Journey - Start your journey to learn Korean!" />
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
          backgroundImage: "url('/images/img_group_1.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="absolute inset-0 bg-blue_gray-100 opacity-10"></div>

      {/* Signup Box */}
      <div className="absolute left-0 right-0 bottom-11 mx-auto w-[30%] bg-gray-300 bg-opacity-45 rounded-[20px] border-2 border-spacing-7 px-10 py-8 sm:px-5 sm:w-[80%] sm:top-[20%]">
        <div className="mb-[40px] flex flex-col items-center">
          <h2 className="mt-5 text-3xl font-bold text-blue-900">Signup</h2>
        </div>

        {/* Error Message */}
        {error && <div className="text-red-500 mb-4">{error}</div>}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mt-5">
            <label htmlFor="name" className="block text-xl text-blue-900">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-2 rounded-md border border-white-a700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mt-5">
            <label htmlFor="email" className="block text-xl text-blue-900">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-2 rounded-md border border-white-a700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mt-5">
            <label htmlFor="password" className="block text-xl text-blue-900">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 mt-2 rounded-md border border-white-a700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="mt-6 w-full p-2 bg-blue-800 text-white-a700 text-xl font-bold rounded-md hover:bg-blue-500 transition-all duration-300"
          >
            Signup
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-4 flex justify-center items-center text-lg text-blue-900">
          <span>Already have an account?</span>
          <button
            onClick={() => navigate("/login")}
            className="ml-2 text-red-500 font-bold hover:text-red-700 transition-all"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}
