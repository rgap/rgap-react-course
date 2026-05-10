import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App, { GlobalErrorPage } from "./App.jsx";
import { Profile, profileLoader } from "./pages.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <GlobalErrorPage />, // Catch errors globally
    children: [
      { 
        path: "users/:userId", 
        element: <Profile />,
        loader: profileLoader 
      }
    ]
  }
]);
