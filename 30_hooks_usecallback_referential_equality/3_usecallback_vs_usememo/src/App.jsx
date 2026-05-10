import React, { useMemo, useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // --- useMemo Example ---
  // Returns the VALUE returned by the function.
  // resultMemo is an array: [0, 1, 2]
  const resultMemo = useMemo(() => {
    return [count, count + 1, count + 2];
  }, [count]);

  // --- useCallback Example ---
  // Returns the FUNCTION ITSELF.
  // resultCallback is a function: () => [0, 1, 2]
  const resultCallback = useCallback(() => {
    return [count, count + 1, count + 2];
  }, [count]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>useCallback vs useMemo</h1>
      
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>

      <div style={{ marginTop: "20px", display: "flex", gap: "20px" }}>
        
        <div style={{ border: "2px solid blue", padding: "15px", flex: 1 }}>
          <h2>useMemo</h2>
          <p>Returns the <strong>result</strong> of the function.</p>
          <pre style={{ backgroundColor: "#eee", padding: "10px" }}>
{`// Type of resultMemo:
${Array.isArray(resultMemo) ? "Array" : typeof resultMemo}

// Value:
${JSON.stringify(resultMemo)}`}
          </pre>
        </div>

        <div style={{ border: "2px solid green", padding: "15px", flex: 1 }}>
          <h2>useCallback</h2>
          <p>Returns the <strong>function itself</strong>.</p>
          <pre style={{ backgroundColor: "#eee", padding: "10px" }}>
{`// Type of resultCallback:
${typeof resultCallback}

// To get the value, we must call it:
// resultCallback()
${JSON.stringify(resultCallback())}`}
          </pre>
        </div>

      </div>
    </div>
  );
}

export default App;