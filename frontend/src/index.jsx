import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";
import "./styles/index.css";


const container = document.getElementById("root");
const root = createRoot(container);

// إضافة StrictMode للتأكد من توافق الممارسات مع React الحديثة
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
