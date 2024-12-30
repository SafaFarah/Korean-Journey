import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // التحقق من تسجيل الدخول مسبقًا
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // حفظ التوكن في LocalStorage
        localStorage.setItem("token", data.token);

        // إعادة التوجيه إلى Dashboard
        navigate("/dashboard");
      } else {
        setError(data.error || "Invalid login credentials");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <>
      <Helmet>
        <title>Korean Journey - Login</title>
        <meta
          name="description"
          content="Login to Korean Journey - Your guide to learning Korean!"
        />
      </Helmet>

      {/* Header */}
      <header className="absolute top-0 left-0 w-full flex items-center justify-between px-4 py-4 z-20 bg-gray-100 bg-opacity-70">
        <img
          src="images/img_header_logo.png"
          alt="Header Logo"
          className="h-[12vh] w-auto object-contain cursor-pointer"
          onClick={() => navigate("/")}
        />
      </header>

      {/* Main Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/img_group_1.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue_gray-100 opacity-10"></div>

      {/* Login Box */}
      <div
        className="absolute left-0 right-0 top-[20%] mx-auto w-[30%] bg-white bg-opacity-90 rounded-lg shadow-lg px-10 py-8 sm:w-[80%]"
      >
        <div className="mb-[40px] flex flex-col items-center">
          <h2 className="text-3xl font-bold text-blue-900">Welcome Back!</h2>
          <p className="text-lg text-gray-600 mt-2">Login to continue your journey.</p>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Email Field */}
        <div className="mt-5">
          <label htmlFor="email" className="block text-xl text-blue-900">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-3 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password Field */}
        <div className="mt-5">
          <label htmlFor="password" className="block text-xl text-blue-900">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full p-3 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="mt-6 w-full p-3 bg-blue-800 text-white text-xl font-bold rounded-md hover:bg-blue-600 transition-all duration-300"
        >
          Login
        </button>

        {/* Register Link */}
        <div className="mt-4 flex justify-center items-center text-lg text-gray-700">
          <span>Don’t have an account?</span>
          <button
            onClick={handleSignupClick}
            className="ml-2 text-red-500 font-bold hover:text-red-700 transition-all"
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
}
