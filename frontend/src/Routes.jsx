import React from "react";
import { useRoutes } from "react-router-dom";
import Landing from "./pages/Langing";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import Dashboard from "./pages/Dashboard";
import Logout from "./pages/Logout";
import Favorites from "./pages/Favorites";
import GroupPage from "./pages/GroupPage";
import Progress from "./pages/Progress";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute"; // Route protection for authenticated users

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Landing /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { 
      path: "/dashboard", 
      element: (
        <ProtectedRoute> 
          <Dashboard /> 
        </ProtectedRoute>
      ),
    },
    { 
      path: "/group/:group",  // Group page that takes a group name as a parameter
      element: (
        <ProtectedRoute>
          <GroupPage />
        </ProtectedRoute>
      ),
    },
    { 
      path: "/favorites", 
      element: (
        <ProtectedRoute>
          <Favorites />
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
      path: "/logout", 
      element: (
        <ProtectedRoute>
          <Logout />
        </ProtectedRoute>
      ),
    },
    { path: "*", element: <NotFound /> }, // 404 route for unmatched paths
  ]);

  return element;
};

export default ProjectRoutes;
