import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-300 rounded">
      <div
        className="bg-blue-500 text-xs font-medium text-white text-center p-0.5 leading-none rounded"
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
