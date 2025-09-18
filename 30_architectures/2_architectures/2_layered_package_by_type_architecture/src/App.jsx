import React from "react";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import "./styles/theme.css";

function App() {
  // For demo, let's just show HomePage and AboutPage
  return (
    <div>
      <HomePage /> <AboutPage />
    </div>
  );
}

export default App;
