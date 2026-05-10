import React from "react";
// 1. Import Link from react-router-dom
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2 style={{ color: "blue" }}>🏠 Home Page</h2>
      <p>Welcome to our SPA.</p>
      
      {/* ❌ BAD: This causes a full page reload */}
      <a href="/about" style={{ display: "block", marginBottom: "10px", color: "red" }}>
        Go to About (Bad: uses &lt;a href&gt;, watch the browser refresh!)
      </a>

      {/* ✅ GOOD: This is intercepted by React Router */}
      <Link to="/about" style={{ display: "block", color: "green", fontWeight: "bold" }}>
        Go to About (Good: uses &lt;Link to&gt;, instant transition!)
      </Link>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2 style={{ color: "green" }}>ℹ️ About Us</h2>
      <p>We build great things.</p>
      {/* 2. Use the 'to' prop instead of 'href' */}
      <Link to="/">🔙 Back to Home</Link>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Navigating with &lt;Link&gt;</h1>
      
      {/* A common layout pattern: A Navbar outside of the <Routes> so it's always visible */}
      <nav style={{ 
        display: "flex", gap: "15px", padding: "10px", 
        backgroundColor: "#eee", marginBottom: "20px" 
      }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/missing">Broken Link</Link>
      </nav>

      <div style={{ border: "2px dashed #ccc", padding: "20px", minHeight: "200px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h2 style={{ color: "red" }}>404 Not Found</h2>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;