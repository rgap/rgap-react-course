import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

function Home() {
  return <h2>🏠 Home Page</h2>;
}

function SettingsLayout() {
  return (
    <div style={{ display: "flex", gap: "20px", border: "2px solid #2196f3", padding: "10px" }}>
      <nav style={{ display: "flex", flexDirection: "column", gap: "10px", width: "150px" }}>
        <h3>⚙️ Settings</h3>
        <Link to="/settings">General</Link>
        <Link to="/settings/profile">Profile</Link>
        <Link to="/settings/gibberish">Broken Sub-Link</Link>
      </nav>
      <div style={{ flex: 1, backgroundColor: "#f5f5f5", padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}

function SettingsGeneral() {
  return <div><h3>General Settings</h3></div>;
}

function SettingsProfile() {
  return <div>👤 Profile Form goes here...</div>;
}

// -------------------------------------------------------------------
// 1. 404 Components
// -------------------------------------------------------------------
function GlobalNotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1 style={{ fontSize: "72px", margin: "0", color: "red" }}>404</h1>
      <h2>Global Page Not Found</h2>
      <Link to="/">Take me back to Home</Link>
    </div>
  );
}

function SettingsNotFound() {
  return (
    <div style={{ color: "orange" }}>
      <h3>⚠️ Setting not found</h3>
      <p>The settings page you are looking for does not exist.</p>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>No Match Routes (404)</h1>
      
      <nav style={{ display: "flex", gap: "15px", marginBottom: "20px", paddingBottom: "10px", borderBottom: "1px solid #ccc" }}>
        <Link to="/">Home</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/fake-page">Broken Global Link</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/settings" element={<SettingsLayout />}>
          <Route index element={<SettingsGeneral />} />
          <Route path="profile" element={<SettingsProfile />} />
          
          {/* 2. Nested 404 */}
          {/* If the URL starts with /settings/ but doesn't match anything else,
              this renders INSIDE the SettingsLayout Outlet */}
          <Route path="*" element={<SettingsNotFound />} />
        </Route>

        {/* 3. Global 404 */}
        {/* If the URL doesn't match ANY of the parent routes, 
            this completely replaces the entire screen */}
        <Route path="*" element={<GlobalNotFound />} />
      </Routes>
    </div>
  );
}

export default App;