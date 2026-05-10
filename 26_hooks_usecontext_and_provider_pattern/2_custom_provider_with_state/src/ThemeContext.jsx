import React, { createContext, useState } from "react";

// Create the context
const ThemeContext = createContext("light");

// Custom Provider component that encapsulates both
// the context creation AND the state logic.
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  // We provide an object with the value AND the updater function.
  // This way, consumers can both READ and CHANGE the theme.
  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
