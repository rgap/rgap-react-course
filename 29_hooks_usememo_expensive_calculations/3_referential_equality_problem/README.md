# 3. The Referential Equality Problem

`useMemo` has a second use case that has nothing to do with expensive calculations. It is used to solve the **referential equality problem**.

---

## What is Referential Equality?

In JavaScript, primitives (strings, numbers, booleans) are compared by their **value**:

```js
5 === 5           // true
"hello" === "hello" // true
```

But objects and arrays are compared by their **reference in memory** (their address):

```js
{} === {}         // false!
[] === []         // false!
```

Even if two objects look identical, if they are created in different places in memory, JavaScript considers them different.

---

## The Problem in React

Every time a component re-renders, all the code inside it runs again.

```jsx
function App() {
  const [count, setCount] = useState(0);

  // This creates a BRAND NEW object in memory every single render
  const config = { mode: "dark" };

  useEffect(() => {
    console.log("Config changed!");
  }, [config]); // Dependency array!

  return <button onClick={() => setCount(c => c + 1)}>Click</button>;
}
```

What happens when you click the button?

1. `count` state changes.
2. Component re-renders.
3. JavaScript creates a **new object** in memory and assigns it to `config`.
4. React looks at the dependency array: `Is the new config === the old config?`
5. JavaScript says: `{} === {} is false`.
6. React thinks the config changed, so it runs the `useEffect`.

**Result:** The `useEffect` runs on every render, even though the config values (`mode: "dark"`) never actually changed.

---

## Why does this matter?

If that `useEffect` was fetching data from an API, changing the `count` would trigger an unnecessary API call. If it was attaching an event listener, it would detach and reattach it unnecessarily.

We need a way to tell React: "Please don't recreate this object unless its contents actually need to change."

This is the second superpower of `useMemo`, which we will fix in the next lesson.
