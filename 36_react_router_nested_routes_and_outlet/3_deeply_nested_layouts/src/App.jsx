import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

function Home() {
  return <h2>🏠 Home Page</h2>;
}

// -------------------------------------------------------------------
// Top Level Layout
// -------------------------------------------------------------------
function AppLayout() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "300px", border: "4px solid #4caf50", padding: "10px" }}>
      <header style={{ backgroundColor: "#e8f5e9", padding: "10px", marginBottom: "10px" }}>
        <strong>🌍 App Header (Level 1)</strong>
      </header>
      
      <div style={{ flex: 1 }}>
        <Outlet /> {/* This will render the DashboardLayout */}
      </div>
      
      <footer style={{ backgroundColor: "#e8f5e9", padding: "10px", marginTop: "10px" }}>
        <strong>🌍 App Footer (Level 1)</strong>
      </footer>
    </div>
  );
}

// -------------------------------------------------------------------
// Second Level Layout
// -------------------------------------------------------------------
function DashboardLayout() {
  return (
    <div style={{ display: "flex", border: "3px solid #2196f3", padding: "10px", minHeight: "150px" }}>
      <aside style={{ width: "150px", backgroundColor: "#e3f2fd", padding: "10px", marginRight: "10px" }}>
        <strong>📊 Dashboard Sidebar (Level 2)</strong>
        <nav style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
          <Link to="/app/dashboard">Overview</Link>
          <Link to="/app/dashboard/settings">Settings</Link>
        </nav>
      </aside>

      <main style={{ flex: 1, padding: "10px" }}>
        <Outlet /> {/* This will render the actual pages */}
      </main>
    </div>
  );
}

// -------------------------------------------------------------------
// The Pages (Level 3)
// -------------------------------------------------------------------
function DashboardOverview() {
  return <div style={{ border: "2px dashed #9c27b0", padding: "20px" }}>📄 Overview Content (Level 3)</div>;
}

function DashboardSettings() {
  return <div style={{ border: "2px dashed #ff9800", padding: "20px" }}>⚙️ Settings Content (Level 3)</div>;
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Deeply Nested Layouts</h1>
      
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home (No Layouts)</Link> |{" "}
        <Link to="/app/dashboard">Enter Application</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Level 1: App Layout */}
        <Route path="/app" element={<AppLayout />}>
          
          {/* Level 2: Dashboard Layout */}
          <Route path="dashboard" element={<DashboardLayout />}>
            
            {/* Level 3: The actual pages */}
            <Route index element={<DashboardOverview />} />
            <Route path="settings" element={<DashboardSettings />} />
            
          </Route>
        </Route>
      </Routes>
      
      <div style={{ marginTop: "30px", maxWidth: "600px" }}>
        <h2>Russian Nesting Dolls</h2>
        <p>When you navigate to <code>/app/dashboard/settings</code>, React Router matches all three layers of routes.</p>
        <p>It renders the AppLayout, which renders the DashboardLayout inside its Outlet, which renders the DashboardSettings inside its Outlet!</p>
      </div>
    </div>
  );
}

export default App;