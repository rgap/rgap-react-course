import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { postsLoader } from "./pages.jsx";
import { createPostAction } from "./actions.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // The Loader fetches the data
    loader: postsLoader,
    // The Action mutates the data
    action: createPostAction
  }
]);
