import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { Products, ProductDetail, LocalError } from "./pages.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "products",
        element: <Products />,
        // Notice we apply the errorElement specifically to THIS route!
        errorElement: <LocalError />,
        children: [
          {
            path: ":id",
            element: <ProductDetail />,
            // This loader intentionally throws an error
            loader: ({ params }) => {
              if (params.id === "broken") {
                throw new Error("This product is completely corrupted!");
              }
              return { id: params.id, name: "Cool Product" };
            }
          }
        ]
      }
    ]
  }
]);
