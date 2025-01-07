import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function ProgressPage() {
  const [totalProgress, setTotalProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/progress", {
          credentials: "include",
        });
        if (!response.ok) throw new Error("Failed to fetch progress");
        const data = await response.json();
        setTotalProgress(data.length);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchProgress();
  }, []);

  return (
    <div className="group-page relative min-h-screen">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/img_group_1.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>

      <Header
        logo="/images/img_header_logo.png"
        onLogoClick={() => navigate("/")}
        links={[
          { label: "Progress", onClick: () => navigate("/progress") },
          { label: "Favorites", onClick: () => navigate("/favorites") },
          { label: "Logout", onClick: () => navigate("/login") },
        ]}
      />

      <div
        className="relative z-10"
        style={{
          height: "calc(100vh - 88px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          paddingTop: "50px",
        }}
      >
        <div
          className="relative  bg-white p-8 rounded-xl shadow-lg text-center w-4/5 sm:w-3/4 md:w-1/2 xl:w-1/3"
          style={{
            backgroundColor: "#ffffffb3",
            backdropFilter: "blur(10px)",
            position: "relative",
            minHeight: "440px",
          }}
        >
          <h1 className="text-4xl font-bold text-blue-900 mb-6">Your Progress</h1>

          <div
            className="progress-circle"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "250px",
              height: "250px",
            }}
          >
            <svg height="250" width="250" xmlns="http://www.w3.org/2000/svg">
              <circle
                cx="125"
                cy="125"
                r="115"
                stroke="#e6e6e6"
                strokeWidth="20"
                fill="none"
              />
              <circle
                cx="125"
                cy="125"
                r="115"
                stroke="#4caf50"
                strokeWidth="20"
                fill="none"
                strokeDasharray={`${(totalProgress / 100) * 723.82}px ${723.82 - (totalProgress / 100) * 723.82}px`}
                strokeLinecap="round"
              />
            </svg>

            <p className="mt-4 text-2xl text-blue-900">{totalProgress} / 100 cards</p>
          </div>
        </div>
      </div>
    </div>
  );
}
