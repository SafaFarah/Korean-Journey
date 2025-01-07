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


  useEffect(() => {
    const checkToken = async () => {
      const response = await fetch("http://localhost:5000/api/auth/verify-token", {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        navigate("/dashboard");
      }
    };
    checkToken();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error || "Failed to register");
      }

      navigate("/login");
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
      <header className="absolute top-0 left-0 w-full flex items-center justify-between px-2 py-0 z-20 bg-white bg-opacity-40">
        <img
          src="images/img_header_logo.png"
          alt="Header Logo"
          className="h-[11vh] w-auto object-contain cursor-pointer"
          onClick={() => navigate("/")}
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
      <div className="absolute left-0 right-0 bottom-6 mx-auto w-full max-w-md bg-white bg-opacity-60 rounded-lg shadow-lg px-8 py-3">
        <div className="mb-[40px] flex flex-col items-center">
          <h2 className="mt-5 text-3xl font-bold text-blue-900">Signup</h2>
        </div>

        {/* Error Message */}
        {error && <div className="text-red-500 mb-4">{error}</div>}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mt-5">
            <label htmlFor="name" className="block font-bold font-serif text-xl text-blue-900">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mt-5">
            <label htmlFor="email" className="block font-bold font-serif  text-xl text-blue-900">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mt-5">
            <label htmlFor="password" className="block font-bold font-serif  text-xl text-blue-900">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="mt-6 w-full p-3 bg-blue-800 text-white text-xl font-bold rounded-md hover:bg-blue-600 transition-all duration-300"
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
