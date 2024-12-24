import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login"); // الانتقال إلى صفحة تسجيل الدخول
  };

  const handleGetReadyClick = () => {
    navigate("/landing"); // الانتقال إلى صفحة الهبوط
  };

  return (
    <>
      <Helmet>
        <title>Korean Journey - Home</title>
        <meta name="description" content="Welcome to Korean Journey - Your guide to learning Korean!" />
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
          {/* Header Background */}
          <div className="absolute inset-0 bg-gray-200 bg-opacity-60 rounded-md mx-0 h-full"></div>

          <img
            src="images/img_header_logo.png"
            alt="Header Logo"
            className="relative z-10 h-[14vh] w-auto object-contain cursor-pointer"
            onClick={() => navigate("/")} // العودة إلى الصفحة الرئيسية عند الضغط على اللوقو
          />
          <button
            className="relative z-10 rounded-[10px] border px-6 py-4 bg-white font-bold text-blue-900 text-2xl 
            hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all duration-200"
            onClick={handleLoginClick} // الانتقال إلى صفحة تسجيل الدخول
          >
            Login
          </button>
        </header>

        {/* Main Content */}
        <div className="relative flex flex-col items-center justify-center h-full">
          {/* Welcome Message */}
          <div
            className="bg-gray-200/90 p-6 rounded-lg shadow-lg text-center w-[25%] max-w-[600px] h-auto"
            style={{ position: "absolute", right: "35%", top: "30%" }}
          >
            <p className="font-mogra text-[2.5vw] font-normal leading-[2] text-gray-800 sm:text-[2.5vw]">
              Hello, <br />
              I’m Ji Sook,<br />
              your guide on<br />
              a fun journey<br />
              to Korea!
            </p>
          </div>

          {/* Ji Sook Image */}
          <img
            src="images/img_ji_sook_1.png"
            alt="Ji Sook"
            className="absolute left-[20%] bottom-[8%] h-[50vh] w-auto object-contain"
          />

          {/* Get Ready Button */}
          <button
            className="absolute right-[3%] bottom-[5%] min-w-[15vw] rounded-[6px] border-4 border-solid border-white bg-gray-100 bg-opacity-70 font-bold text-red-500 text-2xl px-5 py-3 
            hover:bg-opacity-90 hover:scale-105 active:bg-opacity-100 active:scale-95 transition-all duration-200"
            onClick={handleGetReadyClick} // الانتقال إلى صفحة الهبوط
          >
            Get Ready
          </button>
        </div>
      </div>
    </>
  );
}

