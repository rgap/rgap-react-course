import React, { useState } from "react";
import { api } from "./api";

function App() {
  const [status, setStatus] = useState("");

  const trigger401 = async () => {
    setStatus("Fetching...");
    try {
      // We use httpstat.us to intentionally trigger a 401 response
      await api.get("https://httpstat.us/401");
      setStatus("Success!");
    } catch (err) {
      setStatus(`Component caught error: ${err.message}`);
    }
  };

  const trigger500 = async () => {
    setStatus("Fetching...");
    try {
      await api.get("https://httpstat.us/500");
      setStatus("Success!");
    } catch (err) {
      setStatus(`Component caught error: ${err.message}`);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Response Interceptors</h1>
      
      <p>When these buttons are clicked, the API will intentionally fail.</p>
      <p>The <strong>Response Interceptor</strong> will catch the error globally and trigger an alert, BEFORE handing the error down to the component!</p>

      <div style={{ display: "flex", gap: "10px", marginTop: "20px", marginBottom: "20px" }}>
        <button onClick={trigger401} style={{ padding: "10px", backgroundColor: "#ff9800", color: "white", border: "none" }}>
          Trigger 401 (Unauthorized)
        </button>
        <button onClick={trigger500} style={{ padding: "10px", backgroundColor: "#f44336", color: "white", border: "none" }}>
          Trigger 500 (Server Error)
        </button>
      </div>

      <div style={{ padding: "15px", backgroundColor: "#eee", borderRadius: "5px" }}>
        <strong>Component Local State:</strong> {status}
      </div>
    </div>
  );
}

export default App;