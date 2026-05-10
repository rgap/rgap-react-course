import React from "react";
import { ThemeProvider } from "./ThemeContext";
import { Button, Header } from "./Components";

function App() {
  // App no longer manages theme state itself!
  // ThemeProvider owns the state and provides it to the tree.
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ padding: "20px 20px 0" }}>Custom Provider with State</h1>

      {/* Just wrap the tree. No state management needed in App. */}
      <ThemeProvider>
        <Header />
        <div style={{ padding: "20px" }}>
          <Button />

          <div style={{ marginTop: "20px" }}>
            <h2>What changed?</h2>
            <p>
              App no longer has <code>useState</code> or <code>toggleTheme</code>.
              All of that logic lives inside <code>ThemeProvider</code>.
            </p>
            <p>
              App only needs to wrap its children with <code>&lt;ThemeProvider&gt;</code>.
              The consumers get both the value and the updater from context.
            </p>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;