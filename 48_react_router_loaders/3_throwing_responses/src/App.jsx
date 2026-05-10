import React from "react";
import { Outlet, Link, useRouteError } from "react-router-dom";

export function GlobalErrorPage() {
  const error = useRouteError();
  
  // If we threw a Response object in the loader, we can access its status!
  if (error.status === 404) {
    return (
      <div style={{ padding: "50px", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
        <h1>404 - Not Found 🕵️‍♂️</h1>
        <p>{error.data || "The resource you requested does not exist."}</p>
        <Link to="/">Go Home</Link>
      </div>
    );
  }

  // Fallback for random JS errors
  return (
    <div style={{ padding: "50px", textAlign: "center", fontFamily: "Arial, sans-serif", color: "red" }}>
      <h1>💣 Critical Error</h1>
      <p>{error.message || "An unexpected error occurred."}</p>
    </div>
  );
}

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <header style={{ backgroundColor: "#9c27b0", color: "white", padding: "15px", display: "flex", gap: "15px" }}>
        <span>Throwing Responses</span>
        <Link to="/users/1" style={{ color: "white", textDecoration: "none" }}>Valid User</Link>
        <Link to="/users/999" style={{ color: "white", textDecoration: "none" }}>Invalid User (404)</Link>
      </header>
      
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;