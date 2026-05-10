import React, { useState } from "react";
import { ErrorBoundary } from "./ErrorBoundary.jsx";

// Nested components to demonstrate the stack trace!
function DeeplyNestedComponent() {
  const [shouldCrash, setShouldCrash] = useState(false);

  if (shouldCrash) {
    throw new Error("💥 BAM! A deliberate error!");
  }

  return <button onClick={() => setShouldCrash(true)}>Crash Nested UI</button>;
}

function WrapperComponent() {
  return (
    <div style={{ padding: "10px", border: "1px dashed gray", margin: "10px 0" }}>
      <DeeplyNestedComponent />
    </div>
  );
}

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1><code>componentDidCatch</code></h1>
      <p>Open your browser console before clicking the button!</p>
      
      <ErrorBoundary>
        <WrapperComponent />
      </ErrorBoundary>
      
    </div>
  );
}

export default App;