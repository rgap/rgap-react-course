# 2. Fetching Data on Mount

In the previous lesson, we fetched data when the user clicked a button.

But most of the time, we want to fetch data **as soon as the page loads**. For example, when you visit Twitter, it immediately fetches your timeline.

---

## The Infinite Loop Problem

Beginners often try to fetch data directly in the body of the component. 

**This is a fatal error that will crash your app.**

```jsx
function BadApp() {
  const [data, setData] = useState([]);

  // ❌ THIS CAUSES AN INFINITE LOOP
  fetch("https://api.example.com/data")
    .then(res => res.json())
    .then(json => setData(json));

  return <div>{data.length} items</div>;
}
```

**Why does it loop?**
1. React renders the component.
2. The `fetch` triggers.
3. The `fetch` finishes and calls `setData()`.
4. Calling `setData()` triggers a re-render.
5. React renders the component again.
6. The `fetch` triggers again.
7. ...and so on, forever. You will accidentally DDOS the API server!

---

## The Solution: `useEffect`

Data fetching is a **Side Effect**. In React, all side effects that occur automatically must be placed inside a `useEffect` hook.

If we want the data to fetch exactly **once** (when the component first appears on the screen), we use a `useEffect` with an **empty dependency array `[]`**.

```jsx
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then(res => res.json())
      .then(json => setData(json));
  }, []); // <--- RUNS EXACTLY ONCE ON MOUNT

  return <div>{data.length} items</div>;
}
```

---

## The Async/Await Gotcha

A very common mistake when using `async/await` is trying to make the `useEffect` callback itself async:

```jsx
// ❌ WRONG: useEffect cannot return a Promise!
useEffect(async () => {
  const response = await fetch("...");
}, []);
```

React requires `useEffect` callbacks to return either nothing, or a cleanup function. `async` functions always return a Promise, which breaks React's cleanup system.

**The Correct Pattern:**
Define the async function *inside* the effect, and then immediately call it.

```jsx
// ✅ CORRECT
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch("...");
    const json = await response.json();
    setData(json);
  };

  fetchData();
}, []);
```
