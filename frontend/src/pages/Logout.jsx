import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // إزالة التوكن من LocalStorage
    localStorage.removeItem("token");

    // إعادة التوجيه إلى صفحة تسجيل الدخول
    navigate("/login");
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold text-gray-800">Logging out...</h2>
    </div>
  );
};

export default Logout;
