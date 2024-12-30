import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // قائمة الصور للعرض المتناوب
  const images = [
    "images/img_2.png",
    "images/img_3.png",
    "images/img_4.png",
    "images/img_5.png",
  ];

  // تغيير الصورة تلقائيًا
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // تغيير الصورة كل 3 ثوانٍ

    return () => clearInterval(interval); // تنظيف المؤقت عند إلغاء المكون
  }, [images.length]);

  // التحقق من تسجيل الدخول وإعادة التوجيه إذا كان المستخدم مسجل دخول
  useEffect(() => {
    const token = localStorage.getItem("token"); // تحقق من وجود التوكن
    if (token) {
      navigate("/dashboard"); // إعادة التوجيه إلى Dashboard إذا كان مسجل دخول
    }
  }, [navigate]);

  // دالة التنقل إلى صفحة تسجيل الدخول
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <>
      <Helmet>
        <title>Korean Journey - Landing</title>
        <meta
          name="description"
          content="Welcome to the Korean Journey landing page! Learn Korean in an interactive and fun way."
        />
      </Helmet>

      {/* صفحة الهبوط */}
      <div className="relative h-screen w-screen">
        {/* الخلفية */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/img_group_1.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>

        {/* تراكب ملون */}
        <div className="absolute inset-0 bg-blue_gray-100 opacity-10"></div>

        {/* الهيدر */}
        <header className="absolute top-0 left-0 w-full flex items-center justify-between px-4 py-4 z-20">
          <img
            src="images/img_header_logo.png"
            alt="Header Logo"
            className="relative z-10 h-[14vh] w-auto object-contain cursor-pointer"
            onClick={() => navigate("/")}
          />
          <button
            className="relative z-10 rounded-[10px] border px-6 py-4 bg-white font-bold text-blue-900 text-2xl 
            hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all duration-200"
            onClick={handleLoginClick}
          >
            Login
          </button>
        </header>

        {/* المحتوى الرئيسي */}
        <div className="absolute inset-0 flex flex-col items-center justify-start mt-10">
          {/* الكاروسيل (عرض الصور المتناوب) */}
          <div className="relative w-[100%] h-[70%] mt-20 overflow-hidden rounded-lg bg-white shadow-lg">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-1000 ${
                  currentImageIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* زر بدء الرحلة */}
          <button
            className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-800 to-red-600 text-white rounded-lg hover:scale-105 transition-all text-3xl font-bold"
            onClick={() => navigate("/login")}
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </>
  );
}

