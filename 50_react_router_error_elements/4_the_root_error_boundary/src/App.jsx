import React from "react";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <header style={{ backgroundColor: "#333", color: "white", padding: "15px", display: "flex", gap: "15px" }}>
        <span>Root Boundary Test</span>
        <Link to="/safe" style={{ color: "#4caf50", textDecoration: "none" }}>Safe Page</Link>
        <Link to="/danger" style={{ color: "#f44336", textDecoration: "none" }}>Dangerous Page</Link>
      </header>
      
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;