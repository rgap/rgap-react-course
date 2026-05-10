# 4. Paginated Data Fetching

When dealing with large datasets (like a Twitter timeline or a list of Amazon products), APIs will rarely send you all the data at once. They will send it in "pages" (e.g., 10 items at a time).

Fetching paginated data requires a slightly different approach to our `useEffect` logic.

---

## 1. The Dependency Array

Up until now, we've used an empty dependency array `[]` to fetch data exactly once.

For pagination, we need to track the current page in state:
```jsx
const [page, setPage] = useState(1);
```

We must add this `page` variable to our dependency array! 

```jsx
useEffect(() => {
  fetchData(page);
}, [page]); // <-- Re-runs the effect when the page changes!
```

Now, we don't have to manually call a `fetch` function when the user clicks "Load More". We simply update the state (`setPage(2)`), and React automatically triggers the `useEffect` for us!

---

## 2. Merging Arrays

When you fetch Page 1, you set the data.
When you fetch Page 2, if you just call `setData(newPosts)`, you will **overwrite and delete** Page 1!

To build an infinite-scroll style interface, you must **merge** the new data with the existing data.

Because we are relying on the previous state to calculate the next state, we must use the functional form of `setState` with the spread operator:

```jsx
const newPosts = await response.json();

// ✅ CORRECT: Merge old and new arrays!
setPosts(prevPosts => [...prevPosts, ...newPosts]);
```

### Note on Strict Mode
If you are running React in Strict Mode (which Vite does by default in development), React will intentionally run your `useEffect` twice on mount to help you catch bugs. 

If you are using the array merging pattern above, you might notice that Page 1 fetches twice, resulting in 10 items instead of 5 on the initial load. 

**This is normal in development.** It will not happen in production. If you want to prevent it in development, you can either implement complex duplicate-checking logic, or temporarily disable Strict Mode in `main.jsx`.
