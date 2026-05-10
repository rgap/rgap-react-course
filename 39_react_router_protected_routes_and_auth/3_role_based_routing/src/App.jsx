import React, { useState } from "react";
import { Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

// -------------------------------------------------------------------
// 1. Role-Aware Wrapper
// -------------------------------------------------------------------
function ProtectedRoute({ children, requiredRole }) {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  // Rule 1: Are they logged in at all?
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // Rule 2: Did this route require a specific role?
  if (requiredRole && user.role !== requiredRole) {
    // If they are logged in, but don't have permission, send them to an unauthorized page
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}

// -------------------------------------------------------------------
// Pages
// -------------------------------------------------------------------
function Home() {
  const { user, logout } = useAuth();
  return (
    <div>
      <h2>🏠 Home</h2>
      {user && (
        <p>Logged in as: <strong>{user.username}</strong> ({user.role}) <button onClick={logout}>Logout</button></p>
      )}
    </div>
  );
}

function Dashboard() {
  return <div style={{ backgroundColor: "#e3f2fd", padding: "20px" }}><h2>📊 User Dashboard</h2></div>;
}

function AdminPanel() {
  return <div style={{ backgroundColor: "#ffebee", padding: "20px" }}><h2 style={{ color: "red" }}>🛡️ Admin Panel</h2></div>;
}

function Unauthorized() {
  return <div style={{ color: "red" }}><h2>🛑 Unauthorized</h2><p>You do not have permission to view this page.</p></div>;
}

function Login() {
  const [username, setUsername] = useState("");
  const { login, isAuthenticated } = useAuth();
  const location = useLocation();
  const fromUrl = location.state?.from || "/dashboard";

  if (isAuthenticated) return <Navigate to={fromUrl} replace />;

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", maxWidth: "300px" }}>
      <h2>Login</h2>
      <p style={{ fontSize: "12px", color: "gray" }}>Tip: Type "admin" to get the admin role.</p>
      <input 
        value={username} onChange={(e) => setUsername(e.target.value)} 
        placeholder="Username" style={{ display: "block", marginBottom: "10px" }}
      />
      <button onClick={() => login(username)}>Log In</button>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Role Based Routing</h1>
      
      <nav style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard (Any User)</Link>
        <Link to="/admin">Admin Panel (Admins Only)</Link>
      </nav>

      <div style={{ border: "2px dashed #ccc", padding: "20px", minHeight: "200px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          
          {/* Any logged in user can see this */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          
          {/* ONLY admins can see this! */}
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminPanel />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;