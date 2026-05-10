import React from "react";
import { createBrowserRouter, useRouteError, isRouteErrorResponse } from "react-router-dom";
import App from "./App.jsx";

// --- GLOBAL ERROR PAGE ---
function GlobalErrorPage() {
  const error = useRouteError();
  
  // 1. Is it a deliberate HTTP Response error? (e.g., 404, 401, 500)
  if (isRouteErrorResponse(error)) {
    return (
      <div style={{ padding: "50px", fontFamily: "Arial, sans-serif" }}>
        <h1>HTTP Error: {error.status}</h1>
        <h2>{error.statusText}</h2>
        {/* We can access custom data passed into the Response! */}
        <p style={{ color: "#666" }}>{error.data?.message || "No additional details provided."}</p>
      </div>
    );
  }

  // 2. Otherwise, it must be a Javascript syntax/runtime error!
  return (
    <div style={{ padding: "50px", fontFamily: "Arial, sans-serif", backgroundColor: "#ffebee" }}>
      <h1 style={{ color: "red" }}>Application Crashed!</h1>
      <p>A Javascript error occurred during rendering.</p>
      <pre style={{ backgroundColor: "#333", color: "white", padding: "15px", borderRadius: "5px" }}>
        {error.message}
      </pre>
    </div>
  );
}

// --- ROUTER ---
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // We attach this globally!
    errorElement: <GlobalErrorPage />,
    children: [
      {
        path: "not-found",
        loader: () => {
          // Throwing an HTTP Response!
          throw new Response(
            JSON.stringify({ message: "The resource you requested does not exist in our database." }), 
            { status: 404, statusText: "Not Found" }
          );
        }
      },
      {
        path: "runtime-error",
        loader: () => {
          // Throwing a standard Javascript Error!
          throw new Error("Cannot read properties of undefined (reading 'map')");
        }
      }
    ]
  }
]);
