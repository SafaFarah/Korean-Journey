import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ title = "Korean Journey" }) {
  const navigate = useNavigate();

  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-4 px-6 flex justify-between items-center shadow-lg">
      {/* Logo / Title */}
      <h1
        className="text-3xl font-extrabold cursor-pointer hover:opacity-90 transition duration-300"
        onClick={() => navigate("/")}
      >
        {title}
      </h1>

      {/* Navigation */}
      <nav className="flex items-center space-x-4">
        <button
          onClick={() => navigate("/dashboard")}
          className="px-5 py-2 bg-gray-700 hover:bg-gray-800 rounded-lg text-white font-medium shadow-md transition duration-300 transform hover:scale-105"
        >
          Dashboard
        </button>
        <button
          onClick={() => navigate("/settings")}
          className="px-5 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-lg text-white font-medium shadow-md transition duration-300 transform hover:scale-105"
        >
          Settings
        </button>
        <button
          onClick={() => navigate("/logout")}
          className="px-5 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white font-medium shadow-md transition duration-300 transform hover:scale-105"
        >
          Logout
        </button>
      </nav>
    </header>
  );
}
