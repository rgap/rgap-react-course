import { createContext, useState, useContext } from "react";

const ThemeContext = createContext(undefined);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook that wraps useContext.
// This is the only way consumers should access the theme.
function useTheme() {
  const context = useContext(ThemeContext);

  // If someone calls useTheme() outside of a ThemeProvider,
  // context will be undefined (our default value).
  // We throw a helpful error instead of letting it silently fail.
  if (context === undefined) {
    throw new Error("useTheme must be used inside a <ThemeProvider>");
  }

  return context;
}

export { ThemeProvider, useTheme };
