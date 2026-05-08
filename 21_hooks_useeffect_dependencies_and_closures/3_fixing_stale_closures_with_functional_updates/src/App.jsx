import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("🟢 Effect mounted! Creating interval ONLY ONCE.");
    
    const intervalId = setInterval(() => {
      // ✅ GOOD: We are using the functional updater.
      // We pass a function to setCount. React will automatically pass 
      // the most up-to-date state value into 'prevCount'.
      // We do NOT need 'count' from the outer scope anymore!
      setCount((prevCount) => {
        console.log(`Interval running. Incrementing from: ${prevCount}`);
        return prevCount + 1;
      });
    }, 1000);

    return () => {
      console.log("🔴 Effect unmounting! Clearing interval.");
      clearInterval(intervalId);
    };
  }, []); // <--- Empty array is now correct, because we don't use 'count' inside!

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Fixing Stale Closures (The Best Way)</h1>
      <p>The timer below works perfectly and efficiently.</p>
      
      <h2>Count: {count}</h2>
      
      <div style={{ marginTop: "20px", color: "green" }}>
        <h3>Why is this better?</h3>
        <p>
          Open your console. You will see that the interval is only created ONCE.
        </p>
        <p>
          By using <code>setCount(prev =&gt; prev + 1)</code>, we told React <em>how</em> to change 
          the state, rather than calculating the new state ourselves.
        </p>
        <p>
          Because we no longer use the <code>count</code> variable inside our effect, we don't need 
          to put it in the dependency array. The closure is no longer stale!
        </p>
      </div>
    </div>
  );
}

export default App;