# 3. Extracting to `useFetch`

If you are building a large application, you will be fetching data in dozens of different components.

Writing `useState`, `useEffect`, `try/catch/finally`, and `AbortController` in every single component is an enormous violation of the **DRY (Don't Repeat Yourself)** principle.

---

## Custom Hooks

Because React Hooks are just JavaScript functions, we can extract all of that boilerplate logic into our own Custom Hook!

A custom hook is just a function that starts with the word `use` and calls other React Hooks inside of it.

### Creating the Hook

We create a file called `useFetch.js`.

```javascript
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

### Consuming the Hook

Now, any component in our application can fetch data with a single line of code!

```jsx
import { useFetch } from "./useFetch";

function Profile() {
  const { data, isLoading, error } = useFetch("/api/me");

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;
  
  return <h1>{data.name}</h1>;
}
```

This makes your components incredibly clean, readable, and focused entirely on the UI (rendering) rather than the heavy lifting of network management.

---

## The Modern Alternative

While building your own `useFetch` hook is a fantastic learning exercise, in a production environment, you should rarely write this yourself.

There are incredibly powerful open-source libraries that provide advanced versions of this exact hook, complete with caching, automatic retries, and pagination.

The two industry standards are:
1. **React Query** (`@tanstack/react-query`)
2. **SWR** (`swr` by Vercel)

If you are building a production app, use one of those libraries!
