import React from "react";
import { createBrowserRouter, RouterProvider, Outlet, Link, useParams } from "react-router-dom";

// --- Components ---
function RootLayout() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <nav style={{ backgroundColor: "#2196f3", padding: "15px", display: "flex", gap: "15px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/products" style={{ color: "white", textDecoration: "none" }}>Products</Link>
      </nav>
      
      <div style={{ padding: "20px" }}>
        {/* The Outlet renders whatever child route is currently active! */}
        <Outlet />
      </div>
    </div>
  );
}

function Home() {
  return <h2>🏠 Welcome to the Store!</h2>;
}

function ProductList() {
  return (
    <div>
      <h2>📦 Our Products</h2>
      <ul>
        <li><Link to="/products/1">Shoe</Link></li>
        <li><Link to="/products/2">Hat</Link></li>
      </ul>
    </div>
  );
}

function ProductDetail() {
  const { id } = useParams();
  return <h2>Product Detail for ID: {id}</h2>;
}

// --- The Router Definition ---
// Look at how we translate nested <Route> tags into nested objects!
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // The "children" array replaces nested <Route> tags!
    children: [
      {
        index: true, // This replaces the <Route index /> prop!
        element: <Home />,
      },
      {
        path: "products",
        element: <ProductList />
      },
      {
        path: "products/:id", // URL parameters work exactly the same!
        element: <ProductDetail />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;