import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Langing";
import Login from "./pages/Login";
import Signup from "./pages/Singup";


const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> }, // الصفحة الرئيسية
    { path: "*", element: <NotFound /> }, // صفحة غير موجودة

    { path: "landing", element: <Landing /> }, // صفحة الهبوط
    { path: "login", element: <Login /> }, // صفحة الدخول
    { path: "signup", element: <Signup /> },
  ]);

  return element;
};

export default ProjectRoutes;
