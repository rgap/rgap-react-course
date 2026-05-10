import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("🟢 Setup: Starting interval");

    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // ✅ Cleanup: clear the interval when the component unmounts
    return () => {
      console.log("🔴 Cleanup: Clearing interval");
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div style={{ border: "2px solid green", padding: "10px", marginTop: "10px" }}>
      <p>⏱️ Stopwatch: {seconds}s</p>
    </div>
  );
}

function DelayedMessage() {
  const [message, setMessage] = useState("Waiting...");

  useEffect(() => {
    console.log("🟢 Setup: Starting timeout");

    const timeoutId = setTimeout(() => {
      setMessage("3 seconds have passed!");
    }, 3000);

    // ✅ Cleanup: cancel the timeout if component unmounts before 3 seconds
    return () => {
      console.log("🔴 Cleanup: Clearing timeout");
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div style={{ border: "2px solid blue", padding: "10px", marginTop: "10px" }}>
      <p>💬 {message}</p>
    </div>
  );
}

function App() {
  const [showStopwatch, setShowStopwatch] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Cleanup with Timers</h1>
      <p>Open the console and toggle each component to see the cleanup logs.</p>

      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <button onClick={() => setShowStopwatch((prev) => !prev)}>
          {showStopwatch ? "Remove Stopwatch" : "Show Stopwatch"}
        </button>
        <button onClick={() => setShowMessage((prev) => !prev)}>
          {showMessage ? "Remove Message" : "Show Message"}
        </button>
      </div>

      {showStopwatch && <Stopwatch />}
      {showMessage && <DelayedMessage />}

      <div style={{ marginTop: "20px" }}>
        <h2>Two Common Timer Patterns</h2>
        <ul>
          <li>
            <code>setInterval</code> → clean up with <code>clearInterval</code>
          </li>
          <li>
            <code>setTimeout</code> → clean up with <code>clearTimeout</code>
          </li>
        </ul>
        <p>
          Try showing the "Delayed Message" and removing it before 3 seconds.
          The cleanup will cancel the timeout, so the message never appears.
        </p>
      </div>
    </div>
  );
}

export default App;