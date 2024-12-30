import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useProgress } from "../context/ProgressContext";

export default function Progress() {
  const { progressData } = useProgress();

  return (
    <>
      <Helmet>
        <title>Korean Journey - Progress</title>
        <meta name="description" content="Track your learning progress in Korean Journey." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col">
        <Header title="Progress Tracker" />

        <main className="flex-1 p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            Track Your Korean Learning Progress
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {progressData.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h3>
                <div className="w-full bg-gray-200 rounded-full h-6 relative overflow-hidden">
                  <div
                    className={`${item.color} h-6 absolute left-0 top-0`}
                    style={{ width: `${item.progress}%` }}
                  ></div>
                  <span className="absolute right-2 top-0 text-sm font-bold text-gray-700">
                    {item.progress}%
                  </span>
                </div>
                <p className="text-gray-600 mt-4">
                  Keep up the good work! You're making great progress.
                </p>
              </div>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
