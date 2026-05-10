import React, { useState } from "react";
import { Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

// -------------------------------------------------------------------
// 1. The Wrapper Component
// -------------------------------------------------------------------
function ProtectedRoute({ children }) {
  // Grab the ACTUAL authentication state from our global context!
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to login, but remember where they wanted to go
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // User is logged in, allow them to see the route!
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
      <p>Welcome to your private dashboard, {user.username}!</p>
    </div>
  );
}

function Login() {
  const [username, setUsername] = useState("");
  const { login, isAuthenticated } = useAuth();
  
  const location = useLocation();
  const fromUrl = location.state?.from || "/dashboard";

  // If they are already logged in (e.g. they just clicked the button), redirect!
  if (isAuthenticated) {
    return <Navigate to={fromUrl} replace />;
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", maxWidth: "300px" }}>
      <h2>Login</h2>
      {location.state?.from && (
        <p style={{ color: "red", fontSize: "12px" }}>
          You must log in to access {location.state.from}
        </p>
      )}
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
      <h1>The Protected Route Wrapper</h1>
      
      <nav style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard (Protected)</Link>
      </nav>

      <div style={{ border: "2px dashed #ccc", padding: "20px", minHeight: "200px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          
          {/* 2. Wrap the protected component! */}
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