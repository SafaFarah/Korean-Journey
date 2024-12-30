import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Settings() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    language: "English",
  });

  const handleToggle = (key) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [key]: !prevSettings[key],
    }));
  };

  const handleLanguageChange = (e) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      language: e.target.value,
    }));
  };

  return (
    <>
      <Helmet>
        <title>Korean Journey - Settings</title>
        <meta name="description" content="Manage your account settings and preferences." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex flex-col">
        <Header title="Settings" />

        <main className="flex-1 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Manage Your Preferences
          </h2>
          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-6">
            {/* Notifications */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Notifications</h3>
                <p className="text-sm text-gray-500">
                  Enable or disable notifications for updates and reminders.
                </p>
              </div>
              <button
                onClick={() => handleToggle("notifications")}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                  settings.notifications ? "bg-green-500" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${
                    settings.notifications ? "translate-x-6" : ""
                  }`}
                ></div>
              </button>
            </div>

            {/* Dark Mode */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Dark Mode</h3>
                <p className="text-sm text-gray-500">Switch between light and dark themes.</p>
              </div>
              <button
                onClick={() => handleToggle("darkMode")}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                  settings.darkMode ? "bg-blue-500" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${
                    settings.darkMode ? "translate-x-6" : ""
                  }`}
                ></div>
              </button>
            </div>

            {/* Language */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Language</h3>
              <p className="text-sm text-gray-500">Select your preferred language.</p>
              <select
                value={settings.language}
                onChange={handleLanguageChange}
                className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="English">English</option>
                <option value="Korean">Korean</option>
                <option value="Spanish">Spanish</option>
              </select>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
