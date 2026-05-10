import React, { useState } from "react";
import { Routes, Route, Link, Outlet, useOutletContext } from "react-router-dom";

function Home() {
  return <h2>🏠 Home Page</h2>;
}

// -------------------------------------------------------------------
// The Parent Layout provides context
// -------------------------------------------------------------------
function DashboardLayout() {
  const [theme, setTheme] = useState("dark");

  return (
    <div style={{ display: "flex", gap: "20px", border: "2px solid #2196f3", padding: "10px" }}>
      <nav style={{ display: "flex", flexDirection: "column", gap: "10px", width: "150px" }}>
        <h3>📊 Dashboard</h3>
        <Link to="/dashboard">Dashboard Home (Index)</Link>
        <Link to="/dashboard/reports">Reports</Link>
      </nav>

      <div style={{ flex: 1, backgroundColor: "#f5f5f5", padding: "20px" }}>
        {/* Pass the theme down to ALL children, including the index! */}
        <Outlet context={{ theme, setTheme }} />
      </div>
    </div>
  );
}

// -------------------------------------------------------------------
// The Index Route can consume the context!
// -------------------------------------------------------------------
function DashboardIndex() {
  // Even though this is an index route, it is still rendered inside the Outlet.
  // Therefore, it has full access to the Outlet Context.
  const { theme, setTheme } = useOutletContext();

  const isDark = theme === "dark";

  return (
    <div style={{ 
      backgroundColor: isDark ? "#333" : "#fff", 
      color: isDark ? "#fff" : "#333",
      padding: "20px",
      borderRadius: "8px",
      transition: "all 0.3s ease"
    }}>
      <h3>Dashboard Welcome Page</h3>
      <p>Current Theme: {theme}</p>
      
      <button 
        onClick={() => setTheme(isDark ? "light" : "dark")}
        style={{ padding: "8px 16px", cursor: "pointer" }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

function DashboardReports() {
  const { theme } = useOutletContext();
  const isDark = theme === "dark";

  return (
    <div style={{ 
      backgroundColor: isDark ? "#333" : "#fff", 
      color: isDark ? "#fff" : "#333",
      padding: "20px",
      borderRadius: "8px"
    }}>
      <h3>Reports</h3>
      <p>Theme persists here too: {theme}</p>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Index Routes & Context</h1>
      
      <nav style={{ display: "flex", gap: "15px", marginBottom: "20px", paddingBottom: "10px", borderBottom: "1px solid #ccc" }}>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Go to Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          {/* Index Route */}
          <Route index element={<DashboardIndex />} />
          <Route path="reports" element={<DashboardReports />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;