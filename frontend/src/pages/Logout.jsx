import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/auth/logout", {
          method: "POST",
          credentials: "include",
        });

        const data = await response.json();
        console.log("Logout Response:", response.status, data);

        if (response.ok) {
          document.cookie = "token=; Max-Age=0; path=/"; 
          navigate("/login");
        } else {
          console.error("Logout failed", data);
        }
      } catch (error) {
        console.error("Error during logout:", error);
      }
    };

    performLogout();
  }, [navigate]);

  return null;
}
