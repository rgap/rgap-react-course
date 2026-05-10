# 1. Context in a Separate File

In module 25, we wrote `createContext`, the Provider, and `useContext` all in the same file. That works for learning, but in real projects you should put the context in its **own file**.

---

## Why a Separate File?

When the context is in its own file, both the Provider and all consumers can import the same context object without circular dependency issues.

```txt
src/
  ThemeContext.jsx   ← createContext lives here
  App.jsx            ← imports ThemeContext, uses Provider
  Button.jsx         ← imports ThemeContext, uses useContext
```

---

## The Pattern

### ThemeContext.jsx

```jsx
import { createContext } from "react";

const ThemeContext = createContext("light");

export default ThemeContext;
```

### App.jsx (Provider)

```jsx
import ThemeContext from "./ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <Button />
    </ThemeContext.Provider>
  );
}
```

### Button.jsx (Consumer)

```jsx
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Button() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Click</button>;
}
```

---

## The Rule

The file that calls `createContext` should only do that — create and export the context.

It should NOT contain components, state, or logic. This keeps the context reusable and avoids circular imports.

---

## Summary

| File               | Responsibility                    |
| ------------------ | --------------------------------- |
| `ThemeContext.jsx`  | `createContext` + export          |
| `App.jsx`          | Import context, wrap with Provider|
| `Button.jsx`       | Import context, call `useContext` |
