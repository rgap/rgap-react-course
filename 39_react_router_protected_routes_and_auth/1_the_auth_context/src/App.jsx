import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Home() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <div>
      <h2>🏠 Home</h2>
      {isAuthenticated ? (
        <div style={{ backgroundColor: "#e8f5e9", padding: "15px", borderRadius: "5px" }}>
          <p>Welcome back, <strong>{user.username}</strong>!</p>
          <button onClick={logout}>Log Out</button>
        </div>
      ) : (
        <div style={{ backgroundColor: "#ffebee", padding: "15px", borderRadius: "5px" }}>
          <p>You are not logged in.</p>
          <Link to="/login">Go to Login Page</Link>
        </div>
      )}
    </div>
  );
}

function Login() {
  const [username, setUsername] = useState("");
  const { login, isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <p>You are already logged in!</p>;
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", maxWidth: "300px" }}>
      <h2>Login</h2>
      <input 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Enter a username"
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <button 
        onClick={() => login(username)}
        disabled={!username}
      >
        Simulate Login
      </button>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>The Auth Context</h1>
      
      <nav style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>

      <div style={{ border: "2px dashed #ccc", padding: "20px", minHeight: "150px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>

      <div style={{ marginTop: "30px", maxWidth: "600px" }}>
        <h2>Global State</h2>
        <p>Before we can protect routes, we need a reliable way to know if a user is logged in.</p>
        <p>
          We use the standard React Context API to create a global <code>AuthProvider</code>. 
          It holds the current user state and provides <code>login()</code> and <code>logout()</code> methods.
        </p>
      </div>
    </div>
  );
}

export default App;