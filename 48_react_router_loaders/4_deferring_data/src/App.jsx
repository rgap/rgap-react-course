import React from "react";
import { Outlet, Link, useNavigation } from "react-router-dom";

function App() {
  const { state } = useNavigation();

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      <header style={{ backgroundColor: "#ff5722", color: "white", padding: "15px", display: "flex", gap: "15px", alignItems: "center" }}>
        <span>Deferring Data</span>
        <Link to="/users/1" style={{ color: "white", textDecoration: "none" }}>Load Profile 1</Link>
        <Link to="/users/2" style={{ color: "white", textDecoration: "none" }}>Load Profile 2</Link>
        
        {/* Notice how the global loading state completes FAST, even though posts take 3s! */}
        {state === "loading" && <span style={{ marginLeft: "auto", fontStyle: "italic" }}>Navigating...</span>}
      </header>
      
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;