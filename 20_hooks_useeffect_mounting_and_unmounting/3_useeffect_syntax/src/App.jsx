import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  // Example 1: No Dependency Array
  // Runs after EVERY render
  useEffect(() => {
    console.log("A. I run after EVERY render!");
  });

  // Example 2: Empty Dependency Array
  // Runs ONLY ONCE (when the component mounts)
  useEffect(() => {
    console.log("B. I run ONLY ONCE on mount!");
  }, []);

  // Example 3: Array with dependencies
  // Runs on mount AND whenever 'count' changes
  useEffect(() => {
    console.log(`C. I run because count is now: ${count}`);
    
    // Optional Cleanup function
    return () => {
      console.log(`C-Cleanup. Cleaning up effect for count: ${count}`);
    };
  }, [count]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>useEffect Syntax Variations</h1>
      <p>Open the console and click the button to see which effects run!</p>
      
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(c => c + 1)}>
        Increment Count
      </button>

      <div style={{ marginTop: "20px" }}>
        <h3>The 3 pieces of useEffect:</h3>
        <ol>
          <li><strong>Setup Function:</strong> The main code that runs.</li>
          <li><strong>Dependency Array:</strong> Controls WHEN the effect runs.</li>
          <li><strong>Cleanup Function (Optional):</strong> Runs before the next effect or on unmount.</li>
        </ol>
      </div>
    </div>
  );
}

export default App;