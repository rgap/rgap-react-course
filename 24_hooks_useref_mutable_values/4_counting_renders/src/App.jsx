import React, { useState, useRef } from "react";

function App() {
  const [name, setName] = useState("");

  // This ref counts how many times the component has rendered.
  // We update it directly in the body of the component (during render).
  // This is safe because writing to a ref has no side effects on React.
  const renderCount = useRef(0);
  renderCount.current = renderCount.current + 1;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Counting Renders with useRef</h1>

      <div style={{ marginBottom: "20px" }}>
        <label>Type your name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "8px", fontSize: "16px" }}
        />
      </div>

      <p>
        Hello, <strong>{name || "..."}</strong>
      </p>
      <p>
        This component has rendered{" "}
        <strong style={{ color: "red" }}>{renderCount.current}</strong> time(s).
      </p>

      <div style={{ marginTop: "20px" }}>
        <h2>Why this works</h2>
        <p>
          Every keystroke triggers a re-render (because <code>name</code> state changes).
          Each time the component function runs, we increment the ref.
        </p>
        <p>
          If we tried this with <code>useState</code>, incrementing a counter
          during render would trigger <strong>another</strong> render, creating an
          infinite loop. But <code>useRef</code> is silent — it stores the value
          without causing any re-renders.
        </p>
      </div>
    </div>
  );
}

export default App;