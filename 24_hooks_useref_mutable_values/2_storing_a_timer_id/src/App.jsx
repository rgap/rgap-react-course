import React, { useState, useRef, useEffect } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // We store the interval ID in a ref, not in state.
  // We don't want to re-render when we save the timer ID.
  // We only need it so we can call clearInterval later.
  const intervalRef = useRef(null);

  function start() {
    if (isRunning) return; // Prevent double start
    setIsRunning(true);

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    console.log("Started. Interval ID:", intervalRef.current);
  }

  function stop() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
    console.log("Stopped.");
  }

  function reset() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
    setSeconds(0);
    console.log("Reset.");
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Storing a Timer ID in a Ref</h1>

      <h2 style={{ fontSize: "48px", fontFamily: "monospace" }}>{seconds}s</h2>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={start} disabled={isRunning}>▶ Start</button>
        <button onClick={stop} disabled={!isRunning}>⏸ Stop</button>
        <button onClick={reset}>🔄 Reset</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h2>Why use a ref here?</h2>
        <p>
          The interval ID is just a number (e.g., <code>42</code>). 
          We never display it on the screen. We only need it to call{" "}
          <code>clearInterval</code> later.
        </p>
        <p>
          If we stored it in state, every time we saved the ID, React would
          re-render the component — a completely unnecessary re-render.
        </p>
      </div>
    </div>
  );
}

export default Stopwatch;