import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // ❌ BAD: We are using 'count' inside the effect, 
    // but we lied to React by passing an empty array [].
    const intervalId = setInterval(() => {
      console.log(`Interval running. Current count is: ${count}`);
      // This will only ever set count to 0 + 1 = 1!
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); // <--- The lie!

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>The Stale Closure Problem</h1>
      <p>The timer below is broken. It will stop at 1!</p>
      
      <h2>Count: {count}</h2>
      
      <div style={{ marginTop: "20px", color: "red" }}>
        <h3>Why is it broken?</h3>
        <p>
          Open your console. You will see it constantly logging: <br/>
          <code>Interval running. Current count is: 0</code>
        </p>
        <p>
          Because we passed an empty array <code>[]</code>, the effect only ran on the 
          <strong>first render</strong>. During the first render, <code>count</code> was exactly 0.
        </p>
        <p>
          The interval function is "trapped" in the past. It will forever see <code>count</code> as 0, 
          so it keeps calculating <code>0 + 1 = 1</code>. This is called a <strong>Stale Closure</strong>.
        </p>
      </div>
    </div>
  );
}

export default App;