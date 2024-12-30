import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Page Not Found - Korean Journey</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Go to Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </>
  );
}