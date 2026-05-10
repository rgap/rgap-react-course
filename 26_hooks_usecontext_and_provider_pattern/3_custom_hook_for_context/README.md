# 3. Custom Hook for Context

Writing `useContext(ThemeContext)` in every consumer is repetitive. Worse, if someone forgets to wrap their component with a Provider, `useContext` will silently return the default value, leading to confusing bugs.

The solution is to create a **custom hook** that wraps `useContext`.

---

## The Pattern

### ThemeContext.jsx

```jsx
import { createContext, useState, useContext } from "react";

const ThemeContext = createContext(undefined);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(p => p === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used inside a <ThemeProvider>");
  }
  return context;
}

// Only export the Provider and the hook.
// ThemeContext itself stays private!
export { ThemeProvider, useTheme };
```

### Consumer

```jsx
import { useTheme } from "./ThemeContext";

function Button() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>{theme}</button>;
}
```

---

## Three Benefits

### 1. Simpler Consumer Code

Before:
```jsx
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
const { theme } = useContext(ThemeContext);
```

After:
```jsx
import { useTheme } from "./ThemeContext";
const { theme } = useTheme();
```

### 2. Better Error Messages

Without the custom hook, using context outside a Provider gives `undefined` with no explanation.

With the custom hook, you get:
```txt
Error: useTheme must be used inside a <ThemeProvider>
```

### 3. Encapsulation

The `ThemeContext` object is no longer exported. Consumers don't know or care that context exists. They just call `useTheme()`.

If you later change the implementation (e.g., switch from Context to Zustand), consumers don't need to change at all.

---

## This Is the Standard Pattern

In professional React codebases, you will almost always see:

```txt
1. createContext        → private, not exported
2. Custom Provider      → exported
3. Custom useXxx hook   → exported
```

This trio is called the **Provider Pattern**.
