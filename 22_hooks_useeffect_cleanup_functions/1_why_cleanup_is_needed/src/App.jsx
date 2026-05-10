import React, { useState, useEffect } from "react";

// ❌ BAD: This component has a memory leak!
function LeakyTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // We start a timer...
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // ...but we never clean it up!
    // When this component is removed from the screen,
    // the interval keeps running in the background forever.

    // No return statement = no cleanup = memory leak!
  }, []);

  return (
    <div style={{ border: "2px solid red", padding: "10px", marginTop: "10px" }}>
      <p>⏱️ Leaky Timer: {seconds}s</p>
    </div>
  );
}

function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Why Cleanup is Needed</h1>
      <p>Open the console, then toggle the timer off and on a few times.</p>

      <button onClick={() => setShowTimer((prev) => !prev)}>
        {showTimer ? "Remove Timer" : "Show Timer"}
      </button>

      {showTimer && <LeakyTimer />}

      <div style={{ marginTop: "20px" }}>
        <h2>The Problem</h2>
        <p>
          Every time you remove and re-add the timer, a <strong>new interval</strong> is created.
          But the old ones are <strong>never stopped</strong>.
        </p>
        <p>
          After toggling a few times, you will have many intervals running at the
          same time, all fighting to update a component that may not even exist
          anymore. This is called a <strong>memory leak</strong>.
        </p>
      </div>
    </div>
  );
}

export default App;