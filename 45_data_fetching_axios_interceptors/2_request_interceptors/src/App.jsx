import React, { useState } from "react";
import { api } from "./api";

function App() {
  const [logs, setLogs] = useState([]);

  // Helper to visually log what's happening
  const addLog = (msg) => setLogs(prev => [...prev, msg]);

  const handleLogin = () => {
    // Simulate logging in by saving a token to local storage
    localStorage.setItem("my_auth_token", "super_secret_jwt_12345");
    addLog("🔑 User logged in. Token saved to localStorage.");
  };

  const handleLogout = () => {
    localStorage.removeItem("my_auth_token");
    addLog("🚪 User logged out. Token removed.");
  };

  const fetchProfile = async () => {
    try {
      addLog("---------------------------");
      addLog("🚀 Component calling api.get('/users/1')...");
      
      // Notice how the component has NO idea about tokens or headers!
      // It just asks for the data. The Interceptor handles the security.
      const response = await api.get("/users/1");
      
      addLog(`✅ Data received for: ${response.data.name}`);
    } catch (err) {
      addLog(`❌ Error: ${err.message}`);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "600px" }}>
      <h1>Request Interceptors</h1>
      <p>Open your browser console to see the Axios Interceptor in action!</p>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button onClick={handleLogin}>Simulate Login</button>
        <button onClick={handleLogout}>Simulate Logout</button>
      </div>

      <button 
        onClick={fetchProfile}
        style={{ padding: "10px 20px", backgroundColor: "#2196f3", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
      >
        Fetch Protected Data
      </button>

      <div style={{ marginTop: "30px", backgroundColor: "#333", color: "#0f0", padding: "15px", borderRadius: "5px", minHeight: "200px", fontFamily: "monospace" }}>
        {logs.map((log, i) => (
          <div key={i}>{log}</div>
        ))}
      </div>
    </div>
  );
}

export default App;