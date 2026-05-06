# 3. `useEffect` Syntax

Now that we know **what `useEffect` is**, we need to understand its basic syntax.

The `useEffect` Hook can receive two arguments:

```jsx
useEffect(effectFunction, dependencyArray);
```

Where:

1. **`effectFunction`** is the function that contains the side effect.
2. **`dependencyArray`** is an optional array that controls **when the effect runs**.

---

## Basic Syntax

```jsx
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Side effect code goes here
  });

  return <h1>Hello</h1>;
}

export default App;
```

The function inside `useEffect` runs **after React finishes rendering and updating the screen**.

So the flow is:

```txt
1. Trigger
   Something causes React to render.

2. Render
   React calls the component function.
   The component returns JSX.

3. Commit
   React updates the real DOM.

4. Paint
   The browser shows the updated UI.

5. Effect
   React runs the function inside useEffect.
```

---

# The 3 Main Variations of `useEffect`

The behavior of `useEffect` depends mostly on the second argument: the **dependency array**.

There are three common variations.

---

## 1. `useEffect` Without a Dependency Array

If you do **not** pass a dependency array, the effect runs after:

1. the first render
2. every re-render

```jsx
useEffect(() => {
  console.log("I run after every render");
});
```

This means React runs the effect again every time the component updates.

Example:

```txt
First render
  ↓
Effect runs

State changes
  ↓
Component renders again
  ↓
Effect runs again

State changes again
  ↓
Component renders again
  ↓
Effect runs again
```

This version is useful sometimes, but you must be careful.

If the effect updates state every time it runs, it can accidentally create an infinite loop.

---

## 2. `useEffect` With an Empty Dependency Array

If you pass an empty array `[]`, the effect runs after the component is first shown on the screen.

```jsx
useEffect(() => {
  console.log("I run once when the component mounts");
}, []);
```

This is commonly called running **on mount**.

Mount means:

```txt
The component is added to the screen.
```

So this version means:

```txt
Run this effect after the first render only.
```

Common uses:

* loading initial data
* setting up an event listener
* starting a timer
* connecting to an external service

Example:

```jsx
useEffect(() => {
  console.log("Component appeared on the screen");
}, []);
```

Beginner note: in React Strict Mode, this may appear to run twice in development. That is React checking your effect logic. In production, it does not behave that way.

---

## 3. `useEffect` With Dependencies

If you put variables inside the dependency array, the effect runs:

1. after the first render
2. again whenever one of those dependencies changes

```jsx
useEffect(() => {
  console.log(`Count changed to ${count}`);
}, [count]);
```

This means:

```txt
Run this effect when count changes.
```

Example flow:

```txt
First render
  ↓
Effect runs

count changes
  ↓
Component renders again
  ↓
Effect runs again

name changes
  ↓
Component renders again
  ↓
Effect does not run again
  because name is not in the dependency array
```

So this:

```jsx
useEffect(() => {
  console.log(count);
}, [count]);
```

means:

```txt
This effect depends on count.
React should run it again when count changes.
```

You can also add **more than one dependency**.

---

# Comparing the 3 Variations

| Syntax                         | When it runs                                    | Simple meaning              |
| ------------------------------ | ----------------------------------------------- | --------------------------- |
| `useEffect(() => {})`          | After every render                              | Run always                  |
| `useEffect(() => {}, [])`      | After the first render                          | Run once on mount           |
| `useEffect(() => {}, [value])` | After the first render and when `value` changes | Run when this value changes |

---

# The Optional Cleanup Function

The function inside `useEffect` can also return another function.

That returned function is called a **cleanup function**.

```jsx
useEffect(() => {
  // Setup code goes here

  return () => {
    // Cleanup code goes here
  };
}, []);
```

The cleanup function is used to undo or stop something that the effect started.

For example:

* remove an event listener
* stop a timer
* cancel a subscription
* close a WebSocket connection

---

## Cleanup Example

```jsx
useEffect(() => {
  const intervalId = setInterval(() => {
    console.log("Timer running");
  }, 1000);

  return () => {
    clearInterval(intervalId);
  };
}, []);
```

In this example:

```txt
Effect
  ↓
Starts a timer

Cleanup
  ↓
Stops the timer
```

Without cleanup, the timer could continue running even after the component is removed from the screen. Tiny zombie timer, very annoying. 🧟‍♂️

---

# When Does Cleanup Run?

React runs the cleanup function:

1. before running the effect again
2. when the component is removed from the screen

Example with dependencies:

```jsx
useEffect(() => {
  console.log("Effect runs");

  return () => {
    console.log("Cleanup runs");
  };
}, [count]);
```

The flow is:

```txt
count = 0
  ↓
Effect runs

count changes to 1
  ↓
Cleanup runs first
  ↓
Effect runs again

Component is removed
  ↓
Cleanup runs
```

---

# Simple Summary

`useEffect` has this basic structure:

```jsx
useEffect(() => {
  // Effect code

  return () => {
    // Optional cleanup code
  };
}, [dependencies]);
```

The dependency array controls when the effect runs:

```txt
No array      → run after every render
Empty array   → run once on mount
With values   → run when those values change
```

The cleanup function is optional, but important when your effect starts something that needs to be stopped later.
