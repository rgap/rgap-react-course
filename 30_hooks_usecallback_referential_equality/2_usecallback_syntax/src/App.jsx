import React, { useState, useEffect, useCallback } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  // We wrap the function in useCallback.
  // It returns the EXACT SAME function reference on every render,
  // UNLESS the dependency (number) changes.
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]); 
  // ☝️ "Only recreate this function if `number` changes."

  useEffect(() => {
    console.log("getItems function changed! Fetching items...");
    // Imagine we actually fetch data here
  }, [getItems]); 

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#fff",
    color: darkTheme ? "#fff" : "#333",
    padding: "20px",
    minHeight: "100vh",
    fontFamily: "Arial",
  };

  return (
    <div style={themeStyles}>
      <h1>useCallback Syntax</h1>
      
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

      <div style={{ marginTop: "20px", maxWidth: "600px", backgroundColor: "#f9f9f9", padding: "15px", color: "black" }}>
        <h2>Check the Console</h2>
        <p>
          1. Clear the console.
        </p>
        <p>
          2. Click <strong>Toggle Theme</strong>.
        </p>
        <p>
          <strong>Notice:</strong> The effect does NOT run anymore!
        </p>
        <p>
          Because we used <code>useCallback</code>, React saved the function reference in memory. 
          When we toggled the theme, the component re-rendered, but <code>useCallback</code> gave us the exact same function back.
        </p>
        <p>
          Because <code>oldFunction === oldFunction</code> is true, the <code>useEffect</code> correctly skipped running.
        </p>
      </div>
    </div>
  );
}

export default App;