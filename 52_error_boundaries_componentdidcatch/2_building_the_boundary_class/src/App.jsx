import React, { useState } from "react";
import { ErrorBoundary } from "./ErrorBoundary.jsx";

function Header() {
  return <h2 style={{ backgroundColor: "#4caf50", color: "white", padding: "15px" }}>Store Dashboard</h2>;
}

function FragileWidget() {
  const [shouldCrash, setShouldCrash] = useState(false);

  if (shouldCrash) {
    const user = null;
    return <p>{user.name}</p>;
  }

  return (
    <div style={{ border: "2px solid #2196f3", padding: "20px", marginTop: "20px" }}>
      <h3>Vulnerable Widget</h3>
      <button 
        onClick={() => setShouldCrash(true)}
        style={{ padding: "10px", backgroundColor: "#f44336", color: "white", border: "none", cursor: "pointer" }}
      >
        Trigger Component Crash
      </button>
    </div>
  );
}

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>The Class Boundary</h1>
      <Header />
      
      {/* We wrap the fragile component in our new ErrorBoundary! */}
      {/* If FragileWidget crashes, the ErrorBoundary catches it and displays its fallback UI. */}
      {/* The Header above remains completely intact! */}
      <ErrorBoundary>
        <FragileWidget />
      </ErrorBoundary>
      
    </div>
  );
}

export default App;