# 3. Loading & Error States

Data fetching over the internet is unpredictable.
- It takes time (Loading).
- It can fail (Errors).

If you don't handle these states, your application will look broken. A user might stare at a blank screen for 3 seconds wondering if the app froze, or see a catastrophic crash if the API goes offline.

---

## The Big Three

When fetching data in React, it is an industry standard to manage **three** pieces of state:

1. `data`: The actual payload from the server.
2. `isLoading`: A boolean indicating if the network request is still running.
3. `error`: A string or object representing what went wrong (if anything).

```jsx
const [data, setData] = useState(null);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);
```
*(Notice that `isLoading` starts as `true`. If we are fetching on mount, we know immediately that we are in a loading state!)*

---

## Try / Catch / Finally

To safely manage these three states, we wrap our `async/await` fetch logic in a `try/catch/finally` block.

```jsx
useEffect(() => {
  const loadData = async () => {
    try {
      const response = await fetch("...");
      
      // Checking for 404 or 500 errors
      if (!response.ok) throw new Error("Server error!");
      
      const json = await response.json();
      setData(json); // SUCCESS
    } catch (err) {
      setError(err.message); // FAILURE
    } finally {
      setIsLoading(false); // REGARDLESS OF OUTCOME
    }
  };

  loadData();
}, []);
```

### The `finally` block
The `finally` block is executed *after* the `try` and `catch` blocks finish, regardless of whether the code succeeded or threw an error. 
This is the perfect place to set `isLoading(false)`, because whether the data arrived or the network crashed, we are no longer "loading"!

---

## Rendering the UI

Once we have our state, our component rendering logic becomes very simple and declarative.

```jsx
// 1. If loading, show spinner
if (isLoading) return <Spinner />;

// 2. If error, show error message
if (error) return <ErrorMessage message={error} />;

// 3. Otherwise, we know we have data! Render the actual UI.
return <DataDisplay data={data} />;
```
