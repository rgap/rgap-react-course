import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";

function App() {
  // We can access the data from the root loader here!
  const rootData = useLoaderData();

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <header style={{ backgroundColor: "#ff5722", color: "white", padding: "15px" }}>
        <span>Global Nav - Logged in as: {rootData.username}</span>
      </header>
      
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;