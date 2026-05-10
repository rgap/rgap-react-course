import React, { useState, useRef, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  // Store the previous value of count.
  // It starts as undefined because there is no "previous" on the first render.
  const prevCountRef = useRef(undefined);

  // After every render, save the current count as the "previous" value.
  // This runs AFTER the JSX has been returned and the screen has been updated.
  useEffect(() => {
    prevCountRef.current = count;
  }); // No dependency array → runs after every render

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Storing Previous State</h1>

      <h2>Current count: {count}</h2>
      <h2>
        Previous count:{" "}
        {prevCountRef.current !== undefined ? prevCountRef.current : "(none)"}
      </h2>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => setCount((c) => c + 1)}>+1</button>
        <button onClick={() => setCount((c) => c - 1)}>-1</button>
        <button onClick={() => setCount((c) => c + 5)}>+5</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h2>How does this work?</h2>
        <ol>
          <li>User clicks "+1". State changes from 0 to 1.</li>
          <li>Component re-renders. During render, the ref still holds the old value (0).</li>
          <li>JSX shows: Current = 1, Previous = 0.</li>
          <li>After render, <code>useEffect</code> runs and saves 1 into the ref.</li>
          <li>Next time, the ref will show 1 as the previous value.</li>
        </ol>
      </div>
    </div>
  );
}

export default App;