import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";
import "./styles/index.css";

const container = document.getElementById("root");
const root = createRoot(container);

// Render app with StrictMode for development checks
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
