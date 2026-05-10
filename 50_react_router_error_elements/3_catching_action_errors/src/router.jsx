import React from "react";
import { createBrowserRouter, useRouteError, isRouteErrorResponse } from "react-router-dom";
import App from "./App.jsx";

// --- GLOBAL ERROR PAGE ---
function ActionErrorPage() {
  const error = useRouteError();
  
  return (
    <div style={{ padding: "50px", fontFamily: "Arial, sans-serif", border: "5px solid #f44336" }}>
      <h1 style={{ color: "#f44336" }}>Action Failed!</h1>
      {isRouteErrorResponse(error) ? (
        <p>The server rejected our data: <strong>{error.status}</strong></p>
      ) : (
        <p>A catastrophic Javascript error occurred during the save process.</p>
      )}
    </div>
  );
}

// --- ACTION FUNCTION ---
const vulnerableAction = async ({ request }) => {
  const data = await request.formData();
  
  if (data.get("password") === "crash") {
    // We throw a Javascript error! 
    throw new Error("Deliberate Crash Triggered!");
  }

  if (data.get("password") === "500") {
    // We throw an HTTP Response!
    throw new Response("Internal Server Error", { status: 500 });
  }

  return { success: "Data saved securely!" };
}

// --- ROUTER ---
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    action: vulnerableAction,
    // The Error Element catches errors from the Action!
    errorElement: <ActionErrorPage />
  }
]);
