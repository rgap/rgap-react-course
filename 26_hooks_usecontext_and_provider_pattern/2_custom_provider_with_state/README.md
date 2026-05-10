# 2. Custom Provider with State

In module 25 and lesson 1, the `App` component owned the state and wrapped the tree with `<Context.Provider value={state}>`.

But this mixes **application logic** (App's own UI) with **shared state management** (the Provider).

A better pattern is to create a **custom Provider component** that encapsulates the context, the state, and the updater functions.

---

## The Pattern

### ThemeContext.jsx

```jsx
import { createContext, useState } from "react";

const ThemeContext = createContext("light");

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme(prev => prev === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
```

### App.jsx

```jsx
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Button />
    </ThemeProvider>
  );
}
```

App is now clean. It doesn't manage theme state. It just wraps the tree.

---

## Providing Both Value and Updater

Notice we pass an **object** as the value:

```jsx
<ThemeContext.Provider value={{ theme, toggleTheme }}>
```

This lets consumers both **read** and **change** the theme:

```jsx
const { theme, toggleTheme } = useContext(ThemeContext);
```

---

## The `children` Prop

The `ThemeProvider` component receives `children` as a prop. This is how it wraps any component tree:

```jsx
function ThemeProvider({ children }) {
  // ... state logic ...
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
```

`{children}` renders whatever components are placed inside `<ThemeProvider>...</ThemeProvider>`.

---

## Why This Is Better

| Before (state in App)         | After (custom Provider)         |
| ----------------------------- | ------------------------------- |
| App manages theme state       | ThemeProvider manages theme state|
| App has Provider JSX           | App just wraps with ThemeProvider|
| Logic mixed with UI           | Logic separated from UI         |
| Hard to reuse                 | Easy to reuse across projects   |
