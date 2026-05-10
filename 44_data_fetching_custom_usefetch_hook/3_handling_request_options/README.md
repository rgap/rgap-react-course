# 3. Handling Request Options

By default, `fetch()` makes a `GET` request. 

But what if you need to pass an Authorization header to a protected API? Or what if you want to make a `POST` request to create a new user?

The standard `fetch` API accepts a second argument: the **options object**. We need to update our `useFetch` hook to accept this object and pass it along to the internal `fetch` call.

---

## The Infinite Loop Danger

Your first instinct might be to do this:

```javascript
// ❌ DANGEROUS
export function useFetch(url, options) {
  useEffect(() => {
    fetch(url, options);
  }, [url, options]); // <--- Adding options to dependencies
}
```

**Why is this dangerous?**

In React, when a component renders, it re-creates all inline objects.

```jsx
function App() {
  // This object is technically a BRAND NEW object in memory every single render!
  useFetch("/api", { headers: { Auth: "123" } });
}
```

Because the object is new in memory, React thinks the `options` dependency has changed. It re-runs the `useEffect`. The `useEffect` fetches data and calls `setData`. Calling `setData` triggers a re-render. The re-render creates a new `options` object. The `useEffect` triggers again.

**You just created an infinite loop!**

---

## The `useRef` Solution

To fix this, we need to completely ignore the `options` object in our dependency array.

But we can't just leave it out, or the ESLint linter will yell at us for having a missing dependency.

The standard industry solution is to capture the initial `options` object inside a `useRef`. A ref persists its value across renders, so it remains perfectly stable.

```javascript
// ✅ CORRECT
const optionsRef = useRef(options);

useEffect(() => {
  const fetchOptions = {
    ...optionsRef.current, // Spread the stable user options
    signal: controller.signal // Add our abort signal
  };
  
  fetch(url, fetchOptions);
}, [url]); // Safely ignore 'options'
```
