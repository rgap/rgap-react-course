import React, { useState } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

function Home() {
  return <h2>🏠 Home Page</h2>;
}

// -------------------------------------------------------------------
// The Parent Layout
// -------------------------------------------------------------------
function DashboardLayout() {
  // Imagine this data is fetched from an API when the layout mounts
  const [user, setUser] = useState({ name: "Alice", role: "Admin" });

  return (
    <div style={{ display: "flex", gap: "20px", border: "2px solid #2196f3", padding: "10px" }}>
      
      {/* Sidebar Navigation */}
      <nav style={{ display: "flex", flexDirection: "column", gap: "10px", width: "150px" }}>
        <h3>📊 Dashboard</h3>
        <Link to="/dashboard">Overview</Link>
        <Link to="/dashboard/reports">Reports</Link>
      </nav>

      {/* Main Content Area */}
      <div style={{ flex: 1, backgroundColor: "#f5f5f5", padding: "20px" }}>
        {/* 
          1. Passing Data to the Outlet! 
          We use the `context` prop to pass data down to whichever 
          child component is currently rendering inside this Outlet.
        */}
        <Outlet context={{ user, setUser }} />
      </div>

    </div>
  );
}

// -------------------------------------------------------------------
// The Child Components (we will fix them in the next lesson)
// -------------------------------------------------------------------
function DashboardOverview() {
  return (
    <div>
      <h3>Overview</h3>
      <p style={{ color: "red" }}>
        But how do I access the "user" data that the Layout passed to the Outlet?
      </p>
    </div>
  );
}

function DashboardReports() {
  return (
    <div>
      <h3>Reports</h3>
      <p>Only Admins should see this...</p>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Passing Data to Outlets</h1>
      
      <nav style={{ display: "flex", gap: "15px", marginBottom: "20px", paddingBottom: "10px", borderBottom: "1px solid #ccc" }}>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Parent Route with Layout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardOverview />} />
          <Route path="reports" element={<DashboardReports />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;