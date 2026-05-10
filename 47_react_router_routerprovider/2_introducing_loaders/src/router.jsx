import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { Profile, profileLoader } from "./pages.jsx";

// Notice how we attach the profileLoader to the route!
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        path: "profile", 
        element: <Profile />,
        loader: profileLoader // <--- THIS is the magic!
      }
    ]
  }
]);
