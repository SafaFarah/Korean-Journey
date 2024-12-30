import React from "react";

const Card = ({ icon: Icon, title, description, onClick }) => (
  <div
    className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-lg transition-all"
    onClick={onClick}
  >
    <Icon className="text-blue-600 text-5xl mb-4" />
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Card;
