import React, { useState } from "react";

// An artificially slow function to simulate a heavy calculation
function slowFunction(num) {
  console.log("🐌 Calling slowFunction...");
  // Simulate a CPU-heavy task
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}

function App() {
  const [number, setNumber] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  // This runs on EVERY render, even if `number` hasn't changed!
  const doubleNumber = slowFunction(number);

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#fff",
    color: darkTheme ? "#fff" : "#333",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
  };

  return (
    <div style={themeStyles}>
      <h1>The Re-Render Problem</h1>
      
      <div style={{ marginBottom: "20px" }}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
          style={{ padding: "8px", fontSize: "16px", marginRight: "10px" }}
        />
        <button onClick={() => setDarkTheme((prev) => !prev)}>
          Toggle Theme
        </button>
      </div>

      <div style={{ padding: "10px", border: "1px solid gray", marginTop: "20px" }}>
        <h2>Double of {number} is {doubleNumber}</h2>
      </div>

      <div style={{ marginTop: "20px", maxWidth: "600px" }}>
        <h2>What's going wrong?</h2>
        <p>
          Type a number in the input. Notice that it's extremely slow to respond.
          That's because <code>slowFunction</code> takes a long time to run.
        </p>
        <p>
          Now, click <strong>Toggle Theme</strong>. Notice that it is <em>also</em> extremely slow!
        </p>
        <p>
          Why? When we toggle the theme, the component state changes, so React re-renders the component.
          During that re-render, it calls <code>slowFunction(number)</code> again, even though the number hasn't changed.
        </p>
      </div>
    </div>
  );
}

export default App;