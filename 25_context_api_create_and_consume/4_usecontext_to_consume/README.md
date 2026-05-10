# 4. `useContext` to Consume

Now that we know how to create a context and provide a value, the final step is **consuming** (reading) the value inside a component.

---

## The `useContext` Hook

`useContext` is a React Hook that reads the value from the nearest Provider above the component in the tree.

```jsx
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Button() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Click</button>;
}
```

That's it. One line. No prop drilling.

---

## How It Works

```txt
App
  ↓ ThemeContext.Provider value="dark"
    Page
      Toolbar
        Button
          → useContext(ThemeContext) returns "dark"
```

`useContext` looks **up** the component tree for the nearest `ThemeContext.Provider` and returns its `value`.

---

## Multiple Consumers

Any number of components can call `useContext` for the same context:

```jsx
function Header() {
  const user = useContext(UserContext); // reads user
  return <h1>{user.name}</h1>;
}

function Badge() {
  const user = useContext(UserContext); // also reads user
  return <span>{user.role}</span>;
}
```

Both receive the same value from the same Provider.

---

## Reactivity

When the Provider's `value` changes, **every component that calls `useContext` for that context will re-render automatically**.

```txt
Provider value changes
  ↓
All useContext consumers re-render with the new value
```

You don't need to do anything extra. React handles the subscription behind the scenes.

---

## What If There Is No Provider?

If a component calls `useContext(ThemeContext)` but there is no `ThemeContext.Provider` above it, it gets the **default value** from `createContext`:

```jsx
const ThemeContext = createContext("light");

function Button() {
  const theme = useContext(ThemeContext);
  // If no Provider above → theme is "light" (the default)
}
```

---

## The Complete 3-Step Flow

```txt
1. Create    →  const MyContext = createContext(defaultValue)
2. Provide   →  <MyContext.Provider value={data}>
3. Consume   →  const data = useContext(MyContext)
```

---

## Summary

| Step     | API                          | Purpose                            |
| -------- | ---------------------------- | ---------------------------------- |
| Create   | `createContext(default)`     | Define a shared data channel       |
| Provide  | `<Context.Provider value={}>`| Supply data to the component tree  |
| Consume  | `useContext(Context)`        | Read the data in any child component|
