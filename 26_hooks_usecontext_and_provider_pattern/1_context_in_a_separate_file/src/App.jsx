import React, { useState } from "react";
import ThemeContext from "./ThemeContext";
import Button from "./Button";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Context in a Separate File</h1>

      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme (current: {theme})
      </button>

      {/* App imports ThemeContext and provides the value */}
      <ThemeContext.Provider value={theme}>
        <div style={{ marginTop: "10px" }}>
          {/* Button imports ThemeContext and consumes the value */}
          <Button />
        </div>
      </ThemeContext.Provider>

      <div style={{ marginTop: "20px" }}>
        <h2>File Structure</h2>
        <pre>{`src/\n  ThemeContext.jsx   ← createContext (shared)\n  Button.jsx        ← useContext (consumer)\n  App.jsx           ← Provider (supplier)\n  main.jsx          ← entry point`}</pre>
        <p>
          The context lives in its own file so that both the Provider (App)
          and the Consumer (Button) can import the same context object.
        </p>
      </div>
    </div>
  );
}

export default App;