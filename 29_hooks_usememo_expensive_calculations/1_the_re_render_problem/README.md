# 1. The Re-Render Problem

To understand `useMemo`, we first need to understand a fundamental React behavior: **re-rendering**.

---

## The Rule of Re-Rendering

When a component's state or props change, React runs the component function from top to bottom.

```jsx
function App() {
  const [count, setCount] = useState(0);

  // This variable is recalculated on EVERY render
  const isEven = count % 2 === 0;

  return <button onClick={() => setCount(count + 1)}>Increment</button>;
}
```

Most of the time, this is perfectly fine. Calculating `count % 2 === 0` takes less than a millisecond. React is fast enough that you don't even notice.

---

## The Problem: Expensive Calculations

What if the calculation is **slow**?

```jsx
function App() {
  const [data, setData] = useState(massiveArray);
  const [theme, setTheme] = useState("light");

  // An expensive calculation (takes 500ms)
  const sortedData = sortAndFilterMassiveArray(data);

  return (
    <>
      <button onClick={() => setTheme("dark")}>Toggle Theme</button>
      <List data={sortedData} />
    </>
  );
}
```

In this example, sorting the massive array takes 500ms. 

When the array changes, we *have* to wait 500ms. That's unavoidable.

**But what happens when the user clicks "Toggle Theme"?**
1. `theme` state changes.
2. React re-renders the `App` component.
3. React runs `sortAndFilterMassiveArray(data)` **again**.
4. The user has to wait 500ms just for the background color to change!

---

## The Symptoms

If your app has an expensive calculation running on every render, you will notice:
- Typing in inputs feels laggy.
- Clicking buttons has a noticeable delay before the UI updates.
- Animations drop frames.

---

## The Goal

We want to tell React:

> "Hey, this calculation is really slow. Please remember the result. Only recalculate it if `data` actually changes. If something else triggers a re-render (like `theme`), just give me the saved result from last time."

This process is called **memoization**, and React gives us a hook for it: `useMemo`. We will see how to use it in the next lesson.
