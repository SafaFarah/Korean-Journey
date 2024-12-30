import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header"; // استيراد مكون Header
import Footer from "../components/Footer"; // استيراد مكون Footer

export default function Profile() {
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Korean language enthusiast and culture explorer.",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(profileData);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setFormData(profileData); // إعادة تعيين البيانات عند الإلغاء
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    setProfileData(formData);
    setIsEditing(false);
  };

  return (
    <>
      <Helmet>
        <title>Korean Journey - Profile</title>
        <meta
          name="description"
          content="View and update your profile information on Korean Journey."
        />
      </Helmet>

      {/* Header */}
      <Header title="Profile" />

      <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-300 flex flex-col items-center py-10">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            {isEditing ? "Edit Profile" : "Your Profile"}
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-600 text-sm mb-1">Name:</label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
                />
              ) : (
                <p className="text-gray-800 font-medium">{profileData.name}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-600 text-sm mb-1">Email:</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
                />
              ) : (
                <p className="text-gray-800 font-medium">{profileData.email}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-600 text-sm mb-1">Bio:</label>
              {isEditing ? (
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
                  rows="4"
                />
              ) : (
                <p className="text-gray-800 font-medium">{profileData.bio}</p>
              )}
            </div>
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            {isEditing ? (
              <>
                <button
                  onClick={handleEditToggle}
                  className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
                >
                  Save
                </button>
              </>
            ) : (
              <button
                onClick={handleEditToggle}
                className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
