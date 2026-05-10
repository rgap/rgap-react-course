# 2. `createContext`

The first step to using Context is to **create** one.

---

## How to Create a Context

```jsx
import { createContext } from "react";

const ThemeContext = createContext("light");
```

`createContext` takes one argument: a **default value**.

It returns a **Context object** that contains two components:

```txt
ThemeContext.Provider  →  provides a value to the tree
ThemeContext.Consumer  →  reads the value (legacy way)
```

---

## Where to Call `createContext`

You call `createContext` **outside** of any component, usually at the top of a file or in a dedicated file like `ThemeContext.js`.

```txt
// ThemeContext.js
import { createContext } from "react";

const ThemeContext = createContext("light");
export default ThemeContext;
```

This is because context is created **once** and shared across many components. It should not be recreated on every render.

---

## What is the Default Value?

The default value is used as a **fallback** when a component tries to read the context but there is **no Provider** above it in the tree.

```jsx
const ThemeContext = createContext("light");
```

This means:
- If a Provider supplies a value → the component gets the Provider's value.
- If there is no Provider → the component gets `"light"`.

In practice, you almost always wrap your app with a Provider, so the default value is rarely used. But it is useful for:
- Testing components in isolation.
- TypeScript type inference.

---

## The Context Object

The object returned by `createContext` is not a value. It is a **description** of a shared channel.

```txt
createContext("light")
  ↓
Returns: { Provider, Consumer, _currentValue, ... }
```

You never read the context object directly. You use `Provider` to send values and `useContext` to receive them.

---

## Summary

| Step                        | Code                                |
| --------------------------- | ----------------------------------- |
| Create a context            | `const MyContext = createContext(defaultValue)` |
| The context has a Provider  | `MyContext.Provider`                |
| The context has a Consumer  | `MyContext.Consumer` (legacy)       |
| Modern way to consume       | `useContext(MyContext)`             |
