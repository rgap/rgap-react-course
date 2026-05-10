import React from "react";
// 1. Import Outlet
import { Routes, Route, Link, Outlet } from "react-router-dom";

function Home() {
  return <h2>🏠 Home Page</h2>;
}

// -------------------------------------------------------------------
// 2. The Layout Component
// -------------------------------------------------------------------
// This component acts as a "shell" for all settings pages.
function SettingsLayout() {
  return (
    <div style={{ display: "flex", gap: "20px", border: "2px solid #2196f3", padding: "10px" }}>
      
      {/* A Sidebar that only appears on Settings pages */}
      <nav style={{ display: "flex", flexDirection: "column", gap: "10px", width: "150px" }}>
        <h3>⚙️ Settings</h3>
        <Link to="/settings/profile">Profile</Link>
        <Link to="/settings/security">Security</Link>
      </nav>

      <div style={{ flex: 1, backgroundColor: "#f5f5f5", padding: "20px" }}>
        {/* 3. The Outlet */}
        {/* <Outlet /> is a placeholder. React Router swaps this out 
            with whatever child route is currently active. */}
        <Outlet />
      </div>

    </div>
  );
}

function SettingsProfile() {
  return <div>👤 Profile Form goes here...</div>;
}

function SettingsSecurity() {
  return <div>🔒 Change Password form goes here...</div>;
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>The &lt;Outlet /&gt; Component</h1>
      
      {/* Global Navbar */}
      <nav style={{ display: "flex", gap: "15px", marginBottom: "20px", paddingBottom: "10px", borderBottom: "1px solid #ccc" }}>
        <Link to="/">Home</Link>
        <Link to="/settings/profile">Go to Settings</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* 4. Parent route receives the Layout element */}
        <Route path="/settings" element={<SettingsLayout />}>
          {/* These children render INSIDE the SettingsLayout's <Outlet /> */}
          <Route path="profile" element={<SettingsProfile />} />
          <Route path="security" element={<SettingsSecurity />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;