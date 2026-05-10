import React, { useState } from "react";

// The problem: 'theme' is defined in App, but only needed in Button.
// It must pass through Page and Toolbar, which don't use it at all.

function Button({ theme }) {
  const style = {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: theme === "dark" ? "#333" : "#eee",
    color: theme === "dark" ? "#fff" : "#000",
    border: "1px solid #999",
    cursor: "pointer",
  };
  return <button style={style}>I am a {theme} button</button>;
}

// Toolbar does NOT use 'theme'. It only passes it down.
function Toolbar({ theme }) {
  return (
    <div style={{ padding: "10px", border: "1px dashed gray", marginTop: "10px" }}>
      <p>Toolbar (I don't use theme, I just pass it down)</p>
      <Button theme={theme} />
    </div>
  );
}

// Page does NOT use 'theme'. It only passes it down.
function Page({ theme }) {
  return (
    <div style={{ padding: "10px", border: "1px dashed gray", marginTop: "10px" }}>
      <p>Page (I don't use theme, I just pass it down)</p>
      <Toolbar theme={theme} />
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>The Prop Drilling Problem</h1>

      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme (current: {theme})
      </button>

      {/* theme must travel: App → Page → Toolbar → Button */}
      <Page theme={theme} />

      <div style={{ marginTop: "20px" }}>
        <h2>The Problem</h2>
        <p>
          <code>theme</code> is defined in <strong>App</strong> and used in{" "}
          <strong>Button</strong>. But it must pass through <strong>Page</strong> and{" "}
          <strong>Toolbar</strong>, which don't use it at all.
        </p>
        <pre>{`App (owns theme)\n  → Page (passes theme)\n    → Toolbar (passes theme)\n      → Button (uses theme) ✅`}</pre>
        <p>
          This is called <strong>prop drilling</strong>. It makes code harder to
          maintain as the tree grows deeper.
        </p>
      </div>
    </div>
  );
}

export default App;