import React, { useState, useCallback } from "react";

function App() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  // ❌ BAD USE OF useCallback
  // This function is passed directly to an HTML element (<button>).
  // HTML elements don't care about referential equality. They don't have useEffects.
  // Wrapping this in useCallback just adds overhead for zero benefit.
  const handleIncrement = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  // ✅ GOOD: Plain function.
  // Yes, it's recreated on every render.
  // Yes, that is perfectly fine. Creating a function is incredibly fast.
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>When NOT to use useCallback</h1>
      
      <div style={{ marginBottom: "20px" }}>
        <input 
          type="text" 
          value={text} 
          onChange={handleTextChange} 
          placeholder="Type something..."
          style={{ padding: "8px", fontSize: "16px", marginRight: "10px" }}
        />
        <button onClick={handleIncrement} style={{ padding: "8px" }}>
          Count: {count}
        </button>
      </div>

      <div style={{ marginTop: "20px", maxWidth: "600px", lineHeight: "1.5" }}>
        <h2>The Myth of "Fast" React</h2>
        <p>
          Many developers think that recreating functions on every render makes React slow. 
          <strong>This is false.</strong> Modern JavaScript engines can create millions of functions per second.
        </p>
        <p>
          Wrapping every <code>onClick</code> handler in <code>useCallback</code> makes your code harder to read and actually <em>slower</em>, because React has to do extra work to maintain the dependency array cache.
        </p>
        <h3>Only use useCallback when:</h3>
        <ol>
          <li>You are passing the function into a <code>useEffect</code> dependency array.</li>
          <li>You are passing the function to a child component wrapped in <code>React.memo</code> (which we will learn next).</li>
        </ol>
      </div>
    </div>
  );
}

export default App;