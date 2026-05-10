import React, { useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [errorType, setErrorType] = useState(null); // 'not_found', 'server_error', 'offline', etc
  const [isLoading, setIsLoading] = useState(false);

  // We let the user trigger the fetch with buttons to simulate different scenarios
  const fetchScenario = async (scenario) => {
    setIsLoading(true);
    setErrorType(null);
    setData(null);

    try {
      let url = "";
      
      // Simulate different endpoints
      if (scenario === "success") url = "https://jsonplaceholder.typicode.com/users/1";
      if (scenario === "not_found") url = "https://jsonplaceholder.typicode.com/users/99999";
      if (scenario === "server_error") url = "https://httpstat.us/500"; 

      const response = await fetch(url);

      // --- THE CRITICAL PART: Check the status code! ---
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("404");
        } else if (response.status >= 500) {
          throw new Error("500");
        } else {
          throw new Error("UNKNOWN");
        }
      }

      // If we get here, response.ok was true!
      const json = await response.json();
      setData(json);

    } catch (err) {
      // If there is no internet connection, fetch itself throws a TypeError.
      if (err.name === "TypeError") {
        setErrorType("offline");
      } 
      // Otherwise, it's one of the errors we explicitly threw above
      else if (err.message === "404") {
        setErrorType("not_found");
      } else if (err.message === "500") {
        setErrorType("server_error");
      } else {
        setErrorType("unknown");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Handling HTTP Status Codes</h1>
      
      <div style={{ display: "flex", gap: "10px", marginBottom: "30px" }}>
        <button onClick={() => fetchScenario("success")}>✅ Simulate Success</button>
        <button onClick={() => fetchScenario("not_found")}>🔍 Simulate 404</button>
        <button onClick={() => fetchScenario("server_error")}>🔥 Simulate 500</button>
      </div>

      <div style={{ padding: "20px", border: "2px solid #ccc", minHeight: "150px" }}>
        {isLoading && <p>Loading...</p>}
        
        {/* Render specific UI based on the specific error! */}
        {errorType === "not_found" && (
          <div style={{ color: "orange" }}>
            <h2>User Not Found</h2>
            <p>We searched everywhere, but this user doesn't seem to exist.</p>
          </div>
        )}

        {errorType === "server_error" && (
          <div style={{ color: "red" }}>
            <h2>Server is Down</h2>
            <p>Our database is currently experiencing issues. Please try again later.</p>
          </div>
        )}

        {errorType === "offline" && (
          <div style={{ color: "gray" }}>
            <h2>No Internet Connection</h2>
            <p>Please check your wifi and try again.</p>
          </div>
        )}

        {data && (
          <div style={{ color: "green" }}>
            <h2>{data.name}</h2>
            <p>{data.email}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;