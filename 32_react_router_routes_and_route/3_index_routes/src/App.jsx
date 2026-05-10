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
        <Link to="/settings">General (Index)</Link>
        <Link to="/settings/profile">Profile</Link>
      </nav>
      <div style={{ flex: 1, backgroundColor: "#f5f5f5", padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}

// -------------------------------------------------------------------
// 1. The Default Component
// -------------------------------------------------------------------
function SettingsGeneral() {
  return (
    <div>
      <h3>General Settings</h3>
      <p>Welcome to settings. Please select an option from the sidebar, or adjust your general preferences here.</p>
    </div>
  );
}

function SettingsProfile() {
  return <div>👤 Profile Form goes here...</div>;
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Index Routes</h1>
      
      <nav style={{ display: "flex", gap: "15px", marginBottom: "20px", paddingBottom: "10px", borderBottom: "1px solid #ccc" }}>
        <Link to="/">Home</Link>
        {/* Notice this link points exactly to the parent path: /settings */}
        <Link to="/settings">Go to Settings</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/settings" element={<SettingsLayout />}>
          
          {/* 2. The Index Route */}
          {/* By using the 'index' prop instead of 'path', this component 
              will render in the Outlet when the URL is EXACTLY "/settings" */}
          <Route index element={<SettingsGeneral />} />
          
          <Route path="profile" element={<SettingsProfile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;