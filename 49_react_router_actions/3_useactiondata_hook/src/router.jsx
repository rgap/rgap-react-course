import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { loginAction } from "./actions.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    action: loginAction
  }
]);
