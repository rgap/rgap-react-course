import React from "react";
import { Routes, Route, Link } from "react-router-dom";

// Standard Pages
function Home() {
  return <h2>🏠 Home Page</h2>;
}

function About() {
  return <h2>ℹ️ About Us</h2>;
}

// -------------------------------------------------------------------
// The Problem: Manually repeating the /settings prefix for every route
// -------------------------------------------------------------------
function SettingsProfile() {
  return <div style={{ background: "#e3f2fd", padding: "10px" }}>👤 Profile Settings</div>;
}

function SettingsSecurity() {
  return <div style={{ background: "#ffebee", padding: "10px" }}>🔒 Security Settings</div>;
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Nested Routes (The Syntax)</h1>
      
      <nav style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/settings/profile">Profile Settings</Link>
        <Link to="/settings/security">Security Settings</Link>
      </nav>

      <div style={{ border: "2px dashed #ccc", padding: "20px", minHeight: "150px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* ❌ OLD WAY: Flat routes with repeated prefixes */}
          {/* <Route path="/settings/profile" element={<SettingsProfile />} /> */}
          {/* <Route path="/settings/security" element={<SettingsSecurity />} /> */}

          {/* ✅ NEW WAY: Nested Routes */}
          {/* We wrap the child routes inside a parent <Route> */}
          <Route path="/settings">
            {/* The paths here are relative to the parent! */}
            {/* This matches "/settings/profile" */}
            <Route path="profile" element={<SettingsProfile />} />
            
            {/* This matches "/settings/security" */}
            <Route path="security" element={<SettingsSecurity />} />
          </Route>

        </Routes>
      </div>

      <div style={{ marginTop: "30px", maxWidth: "600px" }}>
        <h2>Why nest routes?</h2>
        <p>
          By nesting routes, we don't have to repeat the <code>/settings</code> prefix over and over.
        </p>
        <p>
          More importantly, this enables <strong>Nested Layouts</strong>, which is the most powerful feature of React Router. We'll explore that in the next lesson.
        </p>
      </div>
    </div>
  );
}

export default App;