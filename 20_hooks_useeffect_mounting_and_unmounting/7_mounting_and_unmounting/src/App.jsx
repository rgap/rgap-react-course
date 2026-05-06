import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // 1. SETUP (Mounting)
    console.log("🟢 Timer mounted! Starting interval...");
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // 2. CLEANUP (Unmounting)
    return () => {
      console.log("🔴 Timer unmounted! Clearing interval...");
      // If we don't clear the interval, it will keep running in the background
      // even after the Timer component is gone, causing a memory leak!
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div style={{ border: "2px solid green", padding: "10px", marginTop: "10px" }}>
      <p>Seconds elapsed: {seconds}</p>
    </div>
  );
}

function App() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Mounting and Unmounting Practical Example</h1>
      <p>Open the console to see the setup and cleanup logs.</p>
      
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Stop and Remove Timer" : "Start Timer"}
      </button>

      {showTimer && <Timer />}
      
      <div style={{ marginTop: "20px" }}>
        <h2>Why do we need Cleanup?</h2>
        <p>
          If you don't return a cleanup function to stop the <code>setInterval</code>, 
          the timer will keep ticking forever in the background even when the component is hidden.
        </p>
        <p>
          Mounting and unmounting go hand-in-hand. Every setup should have a corresponding cleanup!
        </p>
      </div>
    </div>
  );
}

export default App;