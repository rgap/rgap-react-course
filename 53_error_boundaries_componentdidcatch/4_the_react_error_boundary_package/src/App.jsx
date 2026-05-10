import React, { useState } from "react";
// 1. Import the ErrorBoundary component from the library!
import { ErrorBoundary } from "react-error-boundary";

// Our fragile component
function FragileWidget() {
  const [shouldCrash, setShouldCrash] = useState(false);

  if (shouldCrash) {
    throw new Error("API completely failed to respond.");
  }

  return (
    <div style={{ border: "2px solid #2196f3", padding: "20px", marginTop: "20px" }}>
      <h3>Vulnerable Widget</h3>
      <button onClick={() => setShouldCrash(true)}>Trigger Crash</button>
    </div>
  );
}

// 2. We create a simple functional component for our Fallback UI!
// The library passes the 'error' and a 'resetErrorBoundary' function as props!
function MyFallbackComponent({ error, resetErrorBoundary }) {
  return (
    <div style={{ padding: "20px", border: "2px solid red", backgroundColor: "#ffebee", borderRadius: "8px" }}>
      <h3 style={{ color: "red", margin: "0 0 10px 0" }}>Widget Crashed</h3>
      <p style={{ fontFamily: "monospace", backgroundColor: "white", padding: "10px" }}>{error.message}</p>
      
      {/* 3. We can provide a button that allows the user to TRY AGAIN! */}
      <button 
        onClick={resetErrorBoundary}
        style={{ marginTop: "10px", padding: "8px 16px", backgroundColor: "#333", color: "white", border: "none", cursor: "pointer" }}
      >
        Try Again
      </button>
    </div>
  );
}

function App() {
  
  // 4. We can easily define our logging function
  const myErrorHandler = (error, info) => {
    console.log("Logged to Sentry:", error.message);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1><code>react-error-boundary</code></h1>
      
      {/* 5. We configure the library component with props! */}
      <ErrorBoundary 
        FallbackComponent={MyFallbackComponent}
        onError={myErrorHandler}
      >
        <FragileWidget />
      </ErrorBoundary>
      
    </div>
  );
}

export default App;