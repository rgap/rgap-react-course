import React from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Different Error Types</h1>
      
      <div style={{ display: "flex", gap: "15px", marginBottom: "30px" }}>
        <Link to="/not-found" style={{ padding: "10px", backgroundColor: "#ff9800", color: "white", textDecoration: "none", borderRadius: "4px" }}>
          Trigger 404 Response
        </Link>
        <Link to="/runtime-error" style={{ padding: "10px", backgroundColor: "#f44336", color: "white", textDecoration: "none", borderRadius: "4px" }}>
          Trigger Runtime JS Error
        </Link>
      </div>

      <div style={{ borderTop: "2px solid #ccc", paddingTop: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;