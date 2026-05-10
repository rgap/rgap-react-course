import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

function Home() {
  return <h2>🏠 Main Application Home</h2>;
}

// -------------------------------------------------------------------
// The Parent Layout
// -------------------------------------------------------------------
function DashboardLayout() {
  return (
    <div style={{ display: "flex", gap: "20px", border: "2px solid #2196f3", padding: "10px" }}>
      
      {/* Sidebar */}
      <nav style={{ display: "flex", flexDirection: "column", gap: "10px", width: "150px" }}>
        <h3>📊 Dashboard</h3>
        {/* Notice how this link just points to /dashboard */}
        <Link to="/dashboard">Dashboard Home (Index)</Link>
        <Link to="/dashboard/reports">Reports</Link>
        <Link to="/dashboard/users">Users</Link>
      </nav>

      {/* Main Content Area */}
      <div style={{ flex: 1, backgroundColor: "#f5f5f5", padding: "20px" }}>
        {/* The Outlet renders the child routes */}
        <Outlet />
      </div>

    </div>
  );
}

// -------------------------------------------------------------------
// The Child Components
// -------------------------------------------------------------------
function DashboardIndex() {
  return (
    <div>
      <h3 style={{ color: "#2e7d32" }}>Dashboard Welcome Page</h3>
      <p>This is the default component that renders when the user visits exactly <code>/dashboard</code>.</p>
    </div>
  );
}

function DashboardReports() {
  return <div><h3>Reports</h3><p>Report data goes here.</p></div>;
}

function DashboardUsers() {
  return <div><h3>Users</h3><p>User management goes here.</p></div>;
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>The Default Child Component</h1>
      
      <nav style={{ display: "flex", gap: "15px", marginBottom: "20px", paddingBottom: "10px", borderBottom: "1px solid #ccc" }}>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Go to Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* 
          1. The Parent Route matches "/dashboard"
             It renders <DashboardLayout />
        */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          
          {/* 
            2. The Index Route
               Because of the `index` boolean prop, this is the default child.
               If the URL is exactly "/dashboard", this renders in the Outlet.
          */}
          <Route index element={<DashboardIndex />} />
          
          <Route path="reports" element={<DashboardReports />} />
          <Route path="users" element={<DashboardUsers />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;