import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Button() {
  // Now the context value is an OBJECT with { theme, toggleTheme }
  const { theme, toggleTheme } = useContext(ThemeContext);

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
      Theme is: {theme} (click to toggle)
    </button>
  );
}

function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: theme === "dark" ? "#222" : "#f5f5f5",
        color: theme === "dark" ? "#fff" : "#000",
        borderBottom: "1px solid #ccc",
      }}
    >
      <h2>Header (reads theme from context)</h2>
    </div>
  );
}

export { Button, Header };
