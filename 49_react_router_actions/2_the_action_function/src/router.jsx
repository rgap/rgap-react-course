import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { contactAction } from "./actions.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // 1. Attach the action to the route, exactly like a loader!
    action: contactAction
  }
]);
