import React, { useState, useEffect, useMemo } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  // We wrap the object creation in useMemo.
  // It returns the EXACT SAME object reference on every render,
  // UNLESS the dependency (darkTheme) changes.
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: darkTheme ? "#333" : "#fff",
      color: darkTheme ? "#fff" : "#333",
    };
  }, [darkTheme]); 

  useEffect(() => {
    console.log("Theme changed! Running effect...");
  }, [themeStyles]);

  return (
    <div style={{ ...themeStyles, padding: "20px", minHeight: "100vh", fontFamily: "Arial" }}>
      <h1>useMemo for Referential Equality</h1>
      
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
          1. Clear the console and type a number in the input box.
        </p>
        <p>
          <strong>Notice:</strong> "Theme changed!" does NOT log anymore!
        </p>
        <p>
          Because we used <code>useMemo</code>, React saved the object reference in memory. 
          When we typed the number, the component re-rendered, but <code>useMemo</code> gave us the exact same object back.
        </p>
        <p>
          Because <code>oldObject === oldObject</code> is true, the <code>useEffect</code> correctly skipped running.
        </p>
      </div>
    </div>
  );
}

export default App;