import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <>
      <Helmet>
        <title>Korean Journey - Landing</title>
        <meta name="description" content="Welcome to the Korean Journey landing page!" />
      </Helmet>

      {/* Page Wrapper */}
      <div className="relative h-screen w-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/img_group_1.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Tinted Overlay */}
        <div className="absolute inset-0 bg-blue_gray-100 opacity-10"></div>

        {/* Header */}
        <header className="absolute top-0 left-0 w-full flex items-center justify-between px-4 py-0 z-20">
          <div className="absolute inset-0 bg-gray-200 bg-opacity-60 rounded-md mx-0 h-full"></div>

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

        {/* Main Content Section */}
        <div className="absolute inset-0 flex flex-col items-center justify-start mt-10">
          {/* Image Carousel */}
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

          {/* Start Journey Button */}
<button
  className="mt-2 px-4 py-3 bg-gradient-to-r from-blue-800 to-red-600 text-white-a700 rounded-lg hover:scale-105 transition-all text-3xl font-bold"
  onClick={() => navigate("/login")}
>
  Start Journey
</button>


        </div>
      </div>
    </>
  );
}

