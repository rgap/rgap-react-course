import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { SearchResults, searchLoader } from "./pages.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        path: "search", 
        element: <SearchResults />,
        loader: searchLoader // Attach the loader to the search route!
      }
    ]
  }
]);
