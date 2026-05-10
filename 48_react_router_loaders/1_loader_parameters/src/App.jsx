import React from "react";
import { Outlet, Link, useNavigation } from "react-router-dom";

function App() {
  const { state } = useNavigation();

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <header style={{ backgroundColor: "#009688", color: "white", padding: "15px", display: "flex", gap: "15px", alignItems: "center" }}>
        <span>Loader Params</span>
        <Link to="/users/1" style={{ color: "white", textDecoration: "none" }}>User 1</Link>
        <Link to="/users/2" style={{ color: "white", textDecoration: "none" }}>User 2</Link>
        <Link to="/users/3" style={{ color: "white", textDecoration: "none" }}>User 3</Link>
        
        {state === "loading" && <span style={{ marginLeft: "auto" }}>⏳ Loading...</span>}
      </header>
      
      <main style={{ padding: "20px", opacity: state === "loading" ? 0.5 : 1 }}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;