import React, { useState } from "react";
import { api } from "./api";

function App() {
  const [status, setStatus] = useState("Idle");

  const triggerSecuredEndpoint = async () => {
    setStatus("Fetching data...");
    try {
      // Step 1: We intentionally hit an endpoint that guarantees a 401 failure
      const response = await api.get("https://httpstat.us/401");
      
      // We will NEVER reach this line in this demo, because httpstat.us/401 ALWAYS fails.
      // But in a real app, after the interceptor refreshes the token and retries, 
      // the second request would succeed and hit this line!
      setStatus("Success!");
    } catch (err) {
      // In this demo, the retry hits httpstat.us/401 again, which fails again, 
      // so it eventually ends up here.
      setStatus(`Component finished. Final Error: ${err.message}`);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Silent Token Refresh</h1>
      
      <p>Click the button below and watch the browser console.</p>
      
      <ol style={{ lineHeight: "1.6" }}>
        <li>The component attempts to fetch data.</li>
        <li>The server returns a <strong>401 Unauthorized</strong>.</li>
        <li>The Interceptor intercepts the error, pauses the component, and reaches out to an Auth Server for a new token.</li>
        <li>Once acquired, the Interceptor <strong>retries</strong> the original request with the new token!</li>
        <li>The component remains completely oblivious that any of this happened.</li>
      </ol>

      <button onClick={triggerSecuredEndpoint} style={{ padding: "10px 20px", marginTop: "20px" }}>
        Fetch Secured Data
      </button>

      <div style={{ marginTop: "30px", padding: "15px", backgroundColor: "#f5f5f5", borderLeft: "4px solid #2196f3" }}>
        <strong>UI Status:</strong> {status}
      </div>
    </div>
  );
}

export default App;