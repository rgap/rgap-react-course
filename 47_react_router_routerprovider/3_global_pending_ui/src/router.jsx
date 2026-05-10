import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { Profile, profileLoader } from "./pages.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        path: "profile", 
        element: <Profile />,
        loader: profileLoader
      }
    ]
  }
]);
