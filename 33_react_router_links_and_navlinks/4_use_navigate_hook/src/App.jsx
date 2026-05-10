import React, { useState } from "react";
// 1. Import useNavigate hook
import { Routes, Route, useNavigate } from "react-router-dom";

function Home() {
  // 2. Call the hook to get the navigate function
  const navigate = useNavigate();

  // 3. Use it in event handlers!
  const handleLogin = () => {
    console.log("Authenticating user...");
    
    // Simulate a network request taking 1 second
    setTimeout(() => {
      console.log("Login successful! Redirecting to dashboard...");
      
      // Programmatically navigate to the dashboard
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div>
      <h2>🏠 Home Page</h2>
      <p>Clicking the button below will simulate a login process.</p>
      
      {/* Notice this is a normal <button>, NOT a <Link> */}
      <button 
        onClick={handleLogin}
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer", backgroundColor: "#4caf50", color: "white", border: "none", borderRadius: "5px" }}
      >
        Log In
      </button>
    </div>
  );
}

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // We can also use the 'replace' option programmatically!
    navigate("/", { replace: true });
  };

  return (
    <div style={{ backgroundColor: "#e8f5e9", padding: "20px" }}>
      <h2 style={{ color: "green" }}>📊 Dashboard</h2>
      <p>Welcome to the secure dashboard.</p>
      
      <button onClick={handleLogout} style={{ padding: "5px 10px" }}>
        Log Out (Uses Replace)
      </button>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>The useNavigate Hook</h1>
      
      <div style={{ border: "2px dashed #ccc", padding: "20px", minHeight: "200px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>

      <div style={{ marginTop: "30px", maxWidth: "600px" }}>
        <h2>Programmatic Navigation</h2>
        <p>
          We don't always want to navigate instantly when the user clicks. Sometimes we need to run code first (like authenticating a user, or submitting a form to a database).
        </p>
        <p>
          By calling <code>useNavigate()</code>, React Router gives us a function that we can call inside our event handlers to redirect the user whenever we are ready.
        </p>
      </div>
    </div>
  );
}

export default App;