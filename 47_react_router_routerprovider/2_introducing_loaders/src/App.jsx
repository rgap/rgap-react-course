import React from "react";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <header style={{ backgroundColor: "#e91e63", color: "white", padding: "15px", display: "flex", gap: "15px" }}>
        <span>Intro to Loaders</span>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/profile" style={{ color: "white", textDecoration: "none" }}>Profile</Link>
      </header>
      
      <main style={{ padding: "20px" }}>
        {/* We default to a welcome message if we are exactly on "/" */}
        <Outlet />
      </main>
    </div>
  );
}

export default App;