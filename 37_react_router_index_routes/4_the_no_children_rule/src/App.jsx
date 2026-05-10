import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

function Home() {
  return <h2>🏠 Home Page</h2>;
}

function AdminLayout() {
  return (
    <div style={{ display: "flex", gap: "20px", border: "2px solid #f44336", padding: "10px" }}>
      <nav style={{ display: "flex", flexDirection: "column", gap: "10px", width: "150px" }}>
        <h3>🛡️ Admin</h3>
        <Link to="/admin">Dashboard (Index)</Link>
        <Link to="/admin/logs">Logs</Link>
        {/* Notice how we can't link to children of the index route, because they don't exist! */}
      </nav>

      <div style={{ flex: 1, backgroundColor: "#ffebee", padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}

// -------------------------------------------------------------------
// The Index Route
// -------------------------------------------------------------------
function AdminIndex() {
  return (
    <div>
      <h3 style={{ color: "#c62828" }}>Admin Dashboard</h3>
      <p>This is the leaf node of the /admin URL.</p>
      
      {/* 
        ❌ BAD IDEA: An Outlet inside an Index route 
        Since Index routes cannot have children, this Outlet will ALWAYS be empty!
      */}
      <div style={{ border: "2px dashed red", padding: "10px", marginTop: "20px" }}>
        <p><em>An Outlet inside an index route will never render anything!</em></p>
        <Outlet /> 
      </div>
    </div>
  );
}

function AdminLogs() {
  return <div><h3>System Logs</h3><p>Log data...</p></div>;
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>The No Children Rule</h1>
      
      <nav style={{ display: "flex", gap: "15px", marginBottom: "20px", paddingBottom: "10px", borderBottom: "1px solid #ccc" }}>
        <Link to="/">Home</Link>
        <Link to="/admin">Go to Admin</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* The Parent Layout */}
        <Route path="/admin" element={<AdminLayout />}>
          
          {/* 
            The Index Route.
            Notice it is self-closing. 
            React Router does not allow <Route index> to have nested <Route> elements!
          */}
          <Route index element={<AdminIndex />} />
          
          {/* 
            ❌ INVALID SYNTAX
            If you try to do this, React Router will throw an error:
            <Route index element={<AdminIndex />}>
              <Route path="something" element={<Something />} />
            </Route>
          */}

          <Route path="logs" element={<AdminLogs />} />
        </Route>
      </Routes>

      <div style={{ marginTop: "30px", maxWidth: "600px", color: "red" }}>
        <p><strong>Remember:</strong> Index routes are LEAF nodes. They cannot be parents.</p>
      </div>
    </div>
  );
}

export default App;