import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { ProgressProvider } from "./context/ProgressContext";

function App() {
  return (
    <ProgressProvider>
      <Router>
        <Routes />
      </Router>
    </ProgressProvider>
  );
}

export default App;
