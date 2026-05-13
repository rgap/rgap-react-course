import React from "react";
import { Link, Outlet } from "react-router-dom";

// Because main.jsx now renders <RouterProvider>,
// App.jsx is no longer the "root" component of the React tree.
// Instead, we use it as the Root Layout of our Router!

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <header style={{ backgroundColor: "#009688", color: "white", padding: "15px", display: "flex", gap: "15px" }}>
        <span>My Extracted Router App</span>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/settings" style={{ color: "white", textDecoration: "none" }}>Settings</Link>
      </header>
      
      <main style={{ padding: "20px" }}>
        {/* The Outlet renders the child routes (Home or Settings) */}
        <Outlet />
      </main>

      <footer style={{ marginTop: "40px", borderTop: "1px solid #ccc", padding: "10px", color: "#666" }}>
        <p>Notice how App.jsx is now just a Layout component!</p>
      </footer>
    </div>
  );
}

export default App;