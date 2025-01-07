import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
      <Router>
        <Routes />  // Renders all the routes for the app
      </Router>
  );
}

export default App;
