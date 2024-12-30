import React from "react";
import { useRoutes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Landing from "./pages/Langing"; // صفحة الهبوط
import Login from "./pages/Login"; // صفحة تسجيل الدخول
import Signup from "./pages/Singup"; // صفحة التسجيل
import Dashboard from "./pages/Dashboard"; // لوحة التحكم
import Flashcards from "./pages/Flashcards"; // صفحة الفلاش كاردز
import Deck from "./pages/Deck";
import Progress from "./pages/Progress";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound"; // صفحة غير موجودة
import Logout from "./pages/Logout"; // تسجيل الخروج


const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Landing /> }, // صفحة الهبوط
    { path: "/login", element: <Login /> }, // صفحة تسجيل الدخول
    { path: "/signup", element: <Signup /> }, // صفحة التسجيل
    { 
      path: "/dashboard", 
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ), // لوحة التحكم المحمية
    },
    { 
      path: "/flashcards", 
      element: (
        <ProtectedRoute>
          <Flashcards />
        </ProtectedRoute>
      ), // صفحة الفلاش كاردز المحمية
    },
    {
      path: "/deck",
      element: (
        <ProtectedRoute>
          <Deck />
        </ProtectedRoute>
      ),
    },
    {
      path: "/deck/:id",
      element: (
        <ProtectedRoute>
          <Flashcards />
        </ProtectedRoute>
      ),
    },
    {
      path: "/progress",
      element: (
        <ProtectedRoute>
          <Progress />
        </ProtectedRoute>
      ),
    },
    {
      path: "/settings",
      element: (
        <ProtectedRoute>
          <Settings />
        </ProtectedRoute>
      ),
    },
    { 
      path: "/logout", 
      element: (
        <ProtectedRoute>
          <Logout />
        </ProtectedRoute>
      ), // تسجيل الخروج المحمي
    },
    { path: "*", element: <NotFound /> }, // صفحة غير موجودة
  ]);

  return element;
};

export default ProjectRoutes;
