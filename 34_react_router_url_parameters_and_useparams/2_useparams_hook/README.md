# 2. The `useParams` Hook

When a component is rendered by a dynamic route, it usually needs to know what the dynamic value is.

For example, a `Profile` component needs to know if the URL was `/elonmusk` or `/billgates` so it can fetch the correct data.

---

## Extracting Parameters

React Router gives us the `useParams` hook to read the URL.

```jsx
import { useParams } from "react-router-dom";

// Assume Route is: <Route path="/:username" element={<Profile />} />

function Profile() {
  // Call the hook to get the params object
  const params = useParams();

  // Access the specific variable by the name you gave it in the Route
  const user = params.username;

  return <h1>Profile for {user}</h1>;
}
```

### The Destructuring Shortcut

Because `useParams` returns a simple JavaScript object, you will almost always see it destructured immediately:

```jsx
function Profile() {
  const { username } = useParams();
  
  return <h1>Profile for {username}</h1>;
}
```

---

## Important Rule: Everything is a String!

If your route is `/products/:id` and the user visits `/products/42`, what is the type of `id`?

**It is always a string.**

```jsx
const { id } = useParams();
console.log(typeof id); // "string"
console.log(id === 42); // FALSE!
console.log(id === "42"); // TRUE
```

If you need to do math with the parameter, or do strict equality checks with numbers from your database, you must convert it to a number first.

```jsx
const { id } = useParams();
const numericId = parseInt(id, 10);
```

---

## How we use this in practice

The most common pattern in React is to grab the ID from `useParams`, and pass it directly into a `useEffect` to fetch data.

```jsx
function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product data from our API
    api.getProductById(id).then(data => setProduct(data));
  }, [id]); // Whenever the URL ID changes, re-fetch!

  if (!product) return <p>Loading...</p>;
  return <h1>{product.name}</h1>;
}
```
