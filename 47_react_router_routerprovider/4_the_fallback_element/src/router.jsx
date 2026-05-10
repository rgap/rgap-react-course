import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { Profile, profileLoader } from "./pages.jsx";

// We attach the loader directly to the ROOT route!
// This means the loader MUST finish before App.jsx can even mount!
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: profileLoader, // Attached to root!
    children: [
      { 
        index: true, 
        element: <Profile />
      }
    ]
  }
]);
