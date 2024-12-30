import React, { createContext, useState, useContext, useEffect } from "react";

// إنشاء السياق
const ProgressContext = createContext();

// مزود السياق
export const ProgressProvider = ({ children }) => {
  const [progressData, setProgressData] = useState([]);

  // محاكاة جلب بيانات التقدم
  useEffect(() => {
    const fetchData = async () => {
      const data = [
        { id: 1, title: "Vocabulary Mastery", progress: 75, color: "bg-blue-500" },
        { id: 2, title: "Grammar Lessons", progress: 60, color: "bg-green-500" },
        { id: 3, title: "Listening Practice", progress: 85, color: "bg-yellow-500" },
        { id: 4, title: "Speaking Fluency", progress: 50, color: "bg-red-500" },
      ];
      setProgressData(data);
    };
    fetchData();
  }, []);

  // تحديث بيانات التقدم
  const updateProgress = (id, newProgress) => {
    setProgressData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, progress: newProgress } : item
      )
    );
  };

  return (
    <ProgressContext.Provider value={{ progressData, updateProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

// هوك مخصص للوصول إلى السياق
export const useProgress = () => useContext(ProgressContext);
