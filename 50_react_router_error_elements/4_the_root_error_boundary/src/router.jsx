import React from "react";
import { createBrowserRouter, useRouteError, Link } from "react-router-dom";
import App from "./App.jsx";

// This is our ultimate safety net!
function RootErrorBoundary() {
  const error = useRouteError();
  
  return (
    <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#111", color: "white", fontFamily: "monospace" }}>
      <div style={{ textAlign: "center", padding: "40px", border: "1px solid #333", borderRadius: "8px", backgroundColor: "#000" }}>
        <h1 style={{ color: "#f44336", marginTop: 0 }}>CRITICAL SYSTEM FAILURE</h1>
        <p style={{ color: "#aaa" }}>The application has encountered an unrecoverable error.</p>
        <div style={{ padding: "20px", backgroundColor: "#222", color: "#ff9800", textAlign: "left", overflowX: "auto", maxWidth: "600px", margin: "20px auto" }}>
          {error.message || error.statusText || "Unknown Error"}
        </div>
        <Link to="/" style={{ color: "#4caf50", textDecoration: "none", borderBottom: "1px dashed #4caf50" }}>
          [ REBOOT SYSTEM ]
        </Link>
      </div>
    </div>
  );
}

// Notice that the RootErrorBoundary is placed on the ABSOLUTE top level.
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <RootErrorBoundary />, // <--- The ultimate fallback
    children: [
      {
        path: "safe",
        element: <h2>This is a perfectly safe page.</h2>
      },
      {
        path: "danger",
        element: <h2>This page is dangerous.</h2>,
        loader: () => {
          throw new Error("We dug too deep and awakened a Balrog.");
        }
      }
    ]
  }
]);
