import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // We added 'count' to the dependency array.
    // Now the effect will re-run every time 'count' changes.
    const intervalId = setInterval(() => {
      console.log(`Interval running. Current count is: ${count}`);
      setCount(count + 1); // It sees the fresh count!
    }, 1000);

    // This cleanup runs every second to destroy the old interval!
    return () => {
      console.log(`Cleaning up interval for count: ${count}`);
      clearInterval(intervalId);
    };
  }, [count]); // <--- We fixed the lie!

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Fixing Stale Closures (The OK Way)</h1>
      <p>The timer below works! It counts up correctly.</p>
      
      <h2>Count: {count}</h2>
      
      <div style={{ marginTop: "20px", color: "blue" }}>
        <h3>What is the catch?</h3>
        <p>
          Open your console. You will see it constantly logging: <br/>
          <code>Cleaning up interval...</code><br/>
          <code>Interval running...</code>
        </p>
        <p>
          Because <code>count</code> changes every second, React has to 
          <strong>destroy the old interval</strong> and <strong>create a new interval</strong> every single second.
        </p>
        <p>
          While this works perfectly, constantly destroying and recreating 
          event listeners or network connections is bad for performance.
        </p>
      </div>
    </div>
  );
}

export default App;