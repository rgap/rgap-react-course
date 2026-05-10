# 1. The Basic `useFetch` Hook

As your application grows, you will need to fetch data in many different components.

Writing `useState`, `useEffect`, `try/catch/finally`, and `AbortController` over and over again is tedious and error-prone.

---

## Extracting Logic

React Hooks are just JavaScript functions. This means we can extract complex hook logic into our own **Custom Hooks**.

A custom hook is simply a function that starts with the word `use` and calls other React hooks inside of it.

```javascript
// src/useFetch.js
export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ... all our fetching, try/catch, and abort logic
  }, [url]);

  return { data, isLoading, error };
}
```

Now, your UI components can focus strictly on rendering, rather than network management!

```jsx
function PostDetails({ id }) {
  // One line of code!
  const { data, isLoading, error } = useFetch(`/api/posts/${id}`);

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;
  return <h1>{data.title}</h1>;
}
```

In the following modules, we will make this hook much more powerful.
