import React, { useState, useEffect } from "react";

function ChildComponent() {
  console.log("Child rendered");

  useEffect(() => {
    // This runs when the component mounts
    console.log("🟢 Child mounted");

    // The function returned by useEffect is the CLEANUP function.
    // It runs when the component unmounts.
    return () => {
      console.log("🔴 Child unmounted (Cleanup ran)");
    };
  }, []);

  return (
    <div style={{ border: "2px solid blue", padding: "10px", marginTop: "10px" }}>
      <p>I am the Child Component!</p>
    </div>
  );
}

function App() {
  const [showChild, setShowChild] = useState(true);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Unmounting with useEffect</h1>
      <p>Open the console and click the button to see the unmounting log.</p>
      
      <button onClick={() => setShowChild(!showChild)}>
        {showChild ? "Unmount Child" : "Mount Child"}
      </button>

      {/* When showChild is false, ChildComponent is removed from the DOM (unmounted) */}
      {showChild && <ChildComponent />}
      
      <div style={{ marginTop: "20px" }}>
        <h2>What is Unmounting?</h2>
        <p>
          Unmounting is the phase when a component is removed from the DOM.
        </p>
        
        <h2>How do we detect it?</h2>
        <p>
          We return a <strong>cleanup function</strong> from our <code>useEffect</code>.
          React will call this function right before the component is destroyed.
        </p>
      </div>
    </div>
  );
}

export default App;