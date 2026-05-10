import React, { useState, useMemo } from "react";

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

  // We wrap the slow function in useMemo.
  // The first argument is a function that returns the value we want.
  // The second argument is a dependency array, exactly like useEffect.
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]); 
  // ☝️ "Only re-run the slow function if `number` changes."

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#fff",
    color: darkTheme ? "#fff" : "#333",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
  };

  return (
    <div style={themeStyles}>
      <h1>useMemo Syntax</h1>
      
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
        <h2>The Fix</h2>
        <p>
          We wrapped the expensive calculation in <code>useMemo</code>.
        </p>
        <p>
          Changing the number is still slow (we can't avoid that, the math takes time). 
          But click <strong>Toggle Theme</strong> now!
        </p>
        <p>
          It's instant! When the component re-renders because of the theme change, React looks at the dependency array <code>[number]</code>. Since <code>number</code> hasn't changed, React skips the calculation and returns the cached value.
        </p>
      </div>
    </div>
  );
}

export default App;