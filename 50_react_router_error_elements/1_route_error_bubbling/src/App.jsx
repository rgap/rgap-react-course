import React from "react";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <header style={{ backgroundColor: "#2196f3", color: "white", padding: "15px", display: "flex", gap: "15px" }}>
        <span>Store App</span>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/products" style={{ color: "white", textDecoration: "none" }}>Products</Link>
      </header>
      
      <main style={{ padding: "20px" }}>
        <p>This is the Global Layout. Even if a child crashes, this Navbar will remain visible!</p>
        <Outlet />
      </main>
    </div>
  );
}

export default App;