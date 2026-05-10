import React from "react";
import { Routes, Route, Link, Outlet, useNavigate } from "react-router-dom";

function Home() {
  return <h2>🏠 Home Page</h2>;
}

function DashboardLayout() {
  return (
    <div style={{ border: "2px solid #2196f3", padding: "20px" }}>
      <header style={{ marginBottom: "20px" }}>
        <h3>📊 Dashboard Layout</h3>
        
        {/* Absolute link: Goes to literally "/dashboard" */}
        <Link to="/dashboard" style={{ marginRight: "10px" }}>Absolute Link to Overview</Link>
        
        {/* Relative link: Just appends "settings" to the current parent URL */}
        <Link to="settings">Relative Link to Settings</Link>
      </header>

      <div style={{ backgroundColor: "#f5f5f5", padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}

function DashboardOverview() {
  const navigate = useNavigate();

  return (
    <div>
      <h3>Overview</h3>
      <p>This is the dashboard index.</p>
      
      {/* Relative navigation with useNavigate */}
      <button onClick={() => navigate("settings")}>
        Go to Settings (Relative)
      </button>
    </div>
  );
}

function DashboardSettings() {
  return (
    <div>
      <h3>Settings</h3>
      <p>This is the settings page.</p>
      
      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        {/* '..' means "go up one level in the route hierarchy" */}
        <Link to="..">Go Up (using ..)</Link>
        
        {/* '.' means "stay at the current level" (effectively refreshing the current route logic) */}
        <Link to=".">Refresh this route (using .)</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Relative Navigation</h1>
      
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link>
      </nav>

      <div style={{ border: "2px dashed #ccc", padding: "20px", minHeight: "200px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardOverview />} />
            <Route path="settings" element={<DashboardSettings />} />
          </Route>
        </Routes>
      </div>

      <div style={{ marginTop: "30px", maxWidth: "600px" }}>
        <h2>Why use relative links?</h2>
        <p>
          If we hardcode <code>/dashboard/settings</code> everywhere, what happens if we decide to rename the dashboard route to <code>/admin</code>? We would have to update hundreds of links!
        </p>
        <p>
          By using relative links (<code>to="settings"</code> inside the dashboard component), the links automatically adapt to whatever the parent route is.
        </p>
      </div>
    </div>
  );
}

export default App;