# 1. Functions and Referential Equality

In the previous module, we learned about the **referential equality problem** with objects and arrays.

It turns out, **functions are objects in JavaScript**. They suffer from the exact same problem!

---

## The Problem

Whenever a component re-renders, React executes all the code inside the component function from top to bottom.

```jsx
function App() {
  const [count, setCount] = useState(0);

  // This function is created from scratch on EVERY render
  const sayHello = () => {
    console.log("Hello!");
  };

  useEffect(() => {
    sayHello();
  }, [sayHello]); // Dependency array!

  return <button onClick={() => setCount(c => c + 1)}>Click</button>;
}
```

What happens when you click the button?

1. `count` state changes.
2. Component re-renders.
3. JavaScript creates a **new function** in memory and assigns it to `sayHello`.
4. React looks at the dependency array: `Is the new sayHello === the old sayHello?`
5. JavaScript says: `(function) === (function) is false`.
6. React thinks the function changed, so it runs the `useEffect`.

**Result:** The `useEffect` runs on every render, even though the function does the exact same thing.

---

## When is this an issue?

This usually causes bugs in two scenarios:

### 1. Functions as Dependencies

If you use a function inside `useEffect`, React's linter will force you to put that function in the dependency array. If that function is recreated on every render, your effect will run on every render (which might cause infinite loops if the effect fetches data and sets state).

### 2. Passing Functions to Optimized Child Components

If you pass a function as a prop to a child component that is wrapped in `React.memo` (an optimization technique we will learn later), the child will still re-render every time because it thinks the function prop has changed!

---

## The Solution

Just like we used `useMemo` to cache an object, React gives us a hook to cache a function: **`useCallback`**. We will learn it in the next lesson.
