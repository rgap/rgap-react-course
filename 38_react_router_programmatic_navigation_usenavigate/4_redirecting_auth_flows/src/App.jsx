import React, { useState } from "react";
import { Routes, Route, Link, Navigate, useLocation } from "react-router-dom";

// -------------------------------------------------------------------
// Fake Auth Context (Simplified for demo)
// -------------------------------------------------------------------
let isAuthenticated = false; // Imagine this is a global context or Redux state

// -------------------------------------------------------------------
// The Protected Route Wrapper
// -------------------------------------------------------------------
function ProtectedRoute({ children }) {
  const location = useLocation();

  if (!isAuthenticated) {
    // 1. If not logged in, redirect them to the login page!
    // 2. We use 'state' to pass the URL they TRIED to go to, 
    //    so we can send them back there after they log in.
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // If they ARE authenticated, render the child components normally!
  return children;
}

// -------------------------------------------------------------------
// Pages
// -------------------------------------------------------------------
function Home() {
  return <h2>🏠 Home Page</h2>;
}

function Dashboard() {
  return (
    <div style={{ backgroundColor: "#e8f5e9", padding: "20px", borderRadius: "5px" }}>
      <h2 style={{ color: "green" }}>🛡️ Secure Dashboard</h2>
      <p>You can only see this if you are logged in!</p>
    </div>
  );
}

function Login() {
  const [loggedIn, setLoggedIn] = useState(isAuthenticated);
  
  // Extract the URL the user came from (or default to dashboard)
  const location = useLocation();
  const fromUrl = location.state?.from || "/dashboard";

  const handleLogin = () => {
    isAuthenticated = true;
    setLoggedIn(true);
  };

  const handleLogout = () => {
    isAuthenticated = false;
    setLoggedIn(false);
  };

  // If they just logged in, redirect them to where they wanted to go!
  if (loggedIn) {
    return <Navigate to={fromUrl} replace />;
  }

  return (
    <div style={{ backgroundColor: "#ffebee", padding: "20px", borderRadius: "5px" }}>
      <h2>🔒 Login Required</h2>
      {location.state?.from && (
        <p style={{ color: "red" }}>You must log in to view <code>{location.state.from}</code>.</p>
      )}
      <button onClick={handleLogin} style={{ padding: "10px", fontSize: "16px" }}>Log In Now</button>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Redirecting Auth Flows</h1>
      
      <nav style={{ marginBottom: "20px", display: "flex", gap: "15px" }}>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard (Protected)</Link>
        <Link to="/settings">Settings (Protected)</Link>
        <Link to="/login">Login Page</Link>
      </nav>

      <div style={{ border: "2px dashed #ccc", padding: "20px", minHeight: "200px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          
          {/* Wrap secure routes in our ProtectedRoute component! */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/settings" 
            element={
              <ProtectedRoute>
                <h2>⚙️ Settings</h2>
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
      
      <div style={{ marginTop: "30px", maxWidth: "600px" }}>
        <h2>Try it out!</h2>
        <ol>
          <li>Ensure you are logged out.</li>
          <li>Click the <strong>Settings</strong> link above.</li>
          <li>Notice how the ProtectedRoute intercepts the request and sends you to <code>/login</code>.</li>
          <li>Notice how it remembered that you wanted to go to <code>/settings</code>.</li>
          <li>Click Log In. It redirects you to Settings!</li>
        </ol>
      </div>
    </div>
  );
}

export default App;