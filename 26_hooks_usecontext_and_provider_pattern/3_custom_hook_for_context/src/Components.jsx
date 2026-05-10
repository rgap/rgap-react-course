import React from "react";
import { useTheme } from "./ThemeContext";

// Consumers no longer import ThemeContext or useContext.
// They just import useTheme — much simpler!
function Button() {
  const { theme, toggleTheme } = useTheme();

  const style = {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: theme === "dark" ? "#333" : "#eee",
    color: theme === "dark" ? "#fff" : "#000",
    border: "1px solid #999",
    cursor: "pointer",
  };

  return (
    <button style={style} onClick={toggleTheme}>
      Theme: {theme} (click to toggle)
    </button>
  );
}

function Header() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: theme === "dark" ? "#222" : "#f5f5f5",
        color: theme === "dark" ? "#fff" : "#000",
        borderBottom: "1px solid #ccc",
      }}
    >
      <h2>Header</h2>
    </div>
  );
}

export { Button, Header };
