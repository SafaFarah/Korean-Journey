import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const images = [
    "https://res.cloudinary.com/dvfqc6jma/image/upload/v1735668481/img_2_vmebxb.png",
    "https://res.cloudinary.com/dvfqc6jma/image/upload/v1735668482/img_3_uuyyzz.png",
    "https://res.cloudinary.com/dvfqc6jma/image/upload/v1735668482/img_4_dycbnt.png",
    "https://res.cloudinary.com/dvfqc6jma/image/upload/v1735668481/img_1_ezzte3.png",
    "https://res.cloudinary.com/dvfqc6jma/image/upload/v1735668482/img_5_yxpikz.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

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


      <div className="relative h-screen w-screen">

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


        <header className="absolute top-0 left-0 w-full flex items-center justify-between px-2 py-0 z-20 bg-white bg-opacity-40">
          <img
            src="images/img_header_logo.png"
            alt="Header Logo"
            className="h-[11vh] w-auto object-contain cursor-pointer"
            onClick={() => navigate("/")}
          />
          <button
            className="rounded-[10px] border-2 bg-opacity-60 border-blue-800  px-6 py-3 bg-white font-bold text-blue-900 text-xl 
            hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all duration-200"
            onClick={handleLoginClick}
          >
            Login
          </button>
        </header>


        <div className="absolute inset-0 flex flex-col items-center justify-center mt-30">
          <div className="relative  w-[45%] max-w-4xl h-[70%] mt-20 overflow-hidden rounded-lg bg-white shadow-lg">
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

          <button
            className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-800 to-red-600 text-white rounded-lg hover:scale-105 transition-all text-3xl font-bold"
            onClick={() => navigate("/login")}
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </>
  );
}

