import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";

// Mock component for routing
function Home() {
  return <h2>🏠 Home Page</h2>;
}

function Settings() {
  return <h2>⚙️ Settings Page</h2>;
}

// We extract the router definition entirely into its own file!
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App is now our root layout!
    children: [
      { index: true, element: <Home /> },
      { path: "settings", element: <Settings /> }
    ]
  }
]);
