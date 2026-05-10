import React from "react";
import { ThemeProvider } from "./ThemeContext";
import { Button, Header } from "./Components";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ padding: "20px 20px 0" }}>Custom Hook for Context</h1>

      <ThemeProvider>
        <Header />
        <div style={{ padding: "20px" }}>
          <Button />

          <div style={{ marginTop: "20px" }}>
            <h2>The Improvement</h2>
            <p>
              Consumers no longer need to import <code>ThemeContext</code> or call{" "}
              <code>useContext</code> directly.
            </p>
            <p>
              They just call <code>useTheme()</code> — a clean, custom hook that
              hides the context implementation detail.
            </p>
            <p>
              If a consumer accidentally forgets to wrap with{" "}
              <code>&lt;ThemeProvider&gt;</code>, it gets a clear error message
              instead of a confusing <code>undefined</code>.
            </p>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;