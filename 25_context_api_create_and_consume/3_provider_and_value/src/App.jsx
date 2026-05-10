import React, { createContext, useState, useContext } from "react";

// Step 1: Create the context
const ThemeContext = createContext("light");

// A deeply nested component that needs the theme
function Button() {
  // Step 3: Read the value with useContext (shown here for demonstration,
  // but we will cover useContext properly in the next lesson)
  const theme = useContext(ThemeContext);

  const style = {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: theme === "dark" ? "#333" : "#eee",
    color: theme === "dark" ? "#fff" : "#000",
    border: "1px solid #999",
  };

  return <button style={style}>Theme is: {theme}</button>;
}

// These components do NOT receive or pass 'theme' as a prop!
function Toolbar() {
  return (
    <div style={{ padding: "10px", border: "1px dashed gray", marginTop: "10px" }}>
      <p>Toolbar (no theme prop!)</p>
      <Button />
    </div>
  );
}

function Page() {
  return (
    <div style={{ padding: "10px", border: "1px dashed gray", marginTop: "10px" }}>
      <p>Page (no theme prop!)</p>
      <Toolbar />
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Provider and value</h1>

      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme (current: {theme})
      </button>

      {/* Step 2: Wrap the tree with Provider and pass the value */}
      <ThemeContext.Provider value={theme}>
        <Page />
      </ThemeContext.Provider>

      <div style={{ marginTop: "20px" }}>
        <h2>What changed from lesson 1?</h2>
        <p>
          Page and Toolbar no longer have a <code>theme</code> prop!
          Button reads the theme directly from context, skipping all middlemen.
        </p>
        <pre>{`App\n  → ThemeContext.Provider value={theme}\n    → Page (no prop)\n      → Toolbar (no prop)\n        → Button → useContext(ThemeContext) ✅`}</pre>
      </div>
    </div>
  );
}

export default App;