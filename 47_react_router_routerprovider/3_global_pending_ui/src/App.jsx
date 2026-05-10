import React from "react";
import { Outlet, Link, useNavigation } from "react-router-dom";

function App() {
  // useNavigation tells us exactly what the router is doing right now!
  const navigation = useNavigation();
  
  // navigation.state can be "idle", "loading", or "submitting"
  const isLoading = navigation.state === "loading";

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <header style={{ backgroundColor: "#3f51b5", color: "white", padding: "15px", display: "flex", gap: "15px", alignItems: "center" }}>
        <span>Global Pending UI</span>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/profile" style={{ color: "white", textDecoration: "none" }}>Profile</Link>
        
        {/* We can show a global loading indicator right in the navbar! */}
        {isLoading && <span style={{ marginLeft: "auto", fontStyle: "italic" }}>Loading data... ⏳</span>}
      </header>
      
      <main style={{ padding: "20px" }}>
        {/* We can also fade out the old page while the new one is loading! */}
        <div style={{ opacity: isLoading ? 0.3 : 1, transition: "opacity 0.2s" }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default App;