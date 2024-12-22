import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Start from "pages/Start";
import Landing from "pages/Landing";
import Login from "pages/Login";
import Signup from "pages/Signup";
import Main from "pages/Main";
import Medals from "pages/Medals";
import Card from "pages/Card";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "start",
      element: <Start />,
    },
    {
      path: "landing",
      element: <Landing />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <Signup />,
    },
    {
      path: "main",
      element: <Main />,
    },
    {
        path: "medals",
        element: <Medals />,
    },
    {
        path: "card",
        element: <Card />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
