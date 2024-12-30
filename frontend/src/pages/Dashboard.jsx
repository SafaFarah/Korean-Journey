import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaUserCircle, FaBook, FaChartLine, FaCog } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/card";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const features = [
    {
      icon: FaBook, // تمرير المرجع للمكوّن بدلاً من مثيله
      title: "Flashcards",
      description: "Practice your Korean vocabulary with flashcards.",
      path: "/flashcards",
    },
    {
      icon: FaChartLine,
      title: "Progress",
      description: "Track your learning journey and achievements.",
      path: "/progress",
    },
    {
      icon: FaUserCircle,
      title: "Profile",
      description: "View and edit your personal details.",
      path: "/profile",
    },
    {
      icon: FaCog,
      title: "Settings",
      description: "Manage your account settings and preferences.",
      path: "/settings",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Korean Journey - Dashboard</title>
        <meta name="description" content="Your Dashboard for Korean Journey." />
      </Helmet>

      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header title="Dashboard" />

        <main className="flex-1 p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Welcome to Your Dashboard!
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                icon={feature.icon} // تمرير المرجع هنا
                title={feature.title}
                description={feature.description}
                onClick={() => navigate(feature.path)}
              />
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
