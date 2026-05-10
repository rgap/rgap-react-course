import React from "react";
import { AppProvider } from "./AppContext";
import { Navbar, MainContent } from "./Components";

function App() {
  return (
    <AppProvider>
      <div style={{ fontFamily: "Arial, sans-serif" }}>
        <Navbar />
        <MainContent />
      </div>
    </AppProvider>
  );
}

export default App;