import React, { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

// -------------------------------------------------------------------
// 1. The Public Only Wrapper
// -------------------------------------------------------------------
function PublicOnlyRoute({ children }) {
  const { isAuthenticated } = useAuth();

  // If they are already logged in, they shouldn't be here! Send them to the dashboard.
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  // If they are NOT logged in, allow them to see the route (e.g. the Login page)
  return children;
}

// -------------------------------------------------------------------
// The Protected Route Wrapper
// -------------------------------------------------------------------
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
}

// -------------------------------------------------------------------
// Pages
// -------------------------------------------------------------------
function Home() {
  const { isAuthenticated, logout } = useAuth();
  return (
    <div>
      <h2>🏠 Home</h2>
      {isAuthenticated && <button onClick={logout}>Log Out</button>}
    </div>
  );
}

function Dashboard() {
  const { user } = useAuth();
  return (
    <div style={{ backgroundColor: "#e8f5e9", padding: "20px" }}>
      <h2 style={{ color: "green" }}>📊 Dashboard</h2>
      <p>Welcome, {user.username}!</p>
    </div>
  );
}

function Login() {
  const [username, setUsername] = useState("");
  const { login } = useAuth();
  
  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", maxWidth: "300px" }}>
      <h2>Login</h2>
      <p>Log in, then try to click the "Login Page" link again!</p>
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
      <h1>Public Only Routes</h1>
      
      <nav style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/login">Login Page (Public Only)</Link>
        <Link to="/dashboard">Dashboard (Protected)</Link>
      </nav>

      <div style={{ border: "2px dashed #ccc", padding: "20px", minHeight: "200px" }}>
        <Routes>
          {/* Anyone can view the home page */}
          <Route path="/" element={<Home />} />
          
          {/* ONLY logged-out users can view the login page! */}
          <Route 
            path="/login" 
            element={
              <PublicOnlyRoute>
                <Login />
              </PublicOnlyRoute>
            } 
          />
          
          {/* ONLY logged-in users can view the dashboard! */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;