import React, { useState } from "react";
// 1. Import useOutletContext
import { Routes, Route, Link, Outlet, useOutletContext } from "react-router-dom";

function Home() { return <h2>🏠 Home Page</h2>; }

// --- The Layout ---
function DashboardLayout() {
  const [user, setUser] = useState({ name: "Alice", role: "Admin" });

  return (
    <div style={{ display: "flex", gap: "20px", border: "2px solid #2196f3", padding: "10px" }}>
      <nav style={{ display: "flex", flexDirection: "column", gap: "10px", width: "150px" }}>
        <h3>📊 Dashboard</h3>
        <Link to="/dashboard">Overview</Link>
        <Link to="/dashboard/reports">Reports</Link>
      </nav>

      <div style={{ flex: 1, backgroundColor: "#f5f5f5", padding: "20px" }}>
        {/* Pass the data down to children via context */}
        <Outlet context={{ user, setUser }} />
      </div>
    </div>
  );
}

// --- The Children ---
function DashboardOverview() {
  // 2. Call useOutletContext to retrieve the data!
  const { user, setUser } = useOutletContext();

  return (
    <div>
      <h3>Overview</h3>
      <p>Welcome back, <strong>{user.name}</strong>!</p>
      
      <p style={{ marginTop: "20px" }}>Want to test state updates?</p>
      <button onClick={() => setUser({ ...user, name: "Bob" })}>
        Change Name to Bob
      </button>
    </div>
  );
}

function DashboardReports() {
  // 3. Any child route can call this hook!
  const { user } = useOutletContext();

  return (
    <div>
      <h3>Reports</h3>
      {user.role === "Admin" ? (
        <div style={{ padding: "10px", backgroundColor: "#d4edda", color: "#155724" }}>
          ✅ Access Granted. Top secret reports here.
        </div>
      ) : (
        <div style={{ padding: "10px", backgroundColor: "#f8d7da", color: "#721c24" }}>
          ❌ Access Denied. You must be an Admin.
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>The useOutletContext Hook</h1>
      
      <nav style={{ display: "flex", gap: "15px", marginBottom: "20px", paddingBottom: "10px", borderBottom: "1px solid #ccc" }}>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardOverview />} />
          <Route path="reports" element={<DashboardReports />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;