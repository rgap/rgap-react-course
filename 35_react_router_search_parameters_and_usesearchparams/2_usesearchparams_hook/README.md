# 2. The `useSearchParams` Hook

To read the query string from the URL, React Router gives us the `useSearchParams` hook.

## The Syntax

```jsx
import { useSearchParams } from "react-router-dom";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  // ...
}
```

Notice that it returns an **array**, exactly like `useState`!
- `searchParams` is an object that holds the current values in the URL.
- `setSearchParams` is a function used to update the URL (we will learn this in the next lesson).

---

## Reading Values

This is the most common mistake beginners make:

```jsx
// ❌ THIS WILL NOT WORK
const query = searchParams.query;
```

The `searchParams` object is **not** a standard plain JavaScript object. It is a special browser object called `URLSearchParams`. 

To read a value out of it, you **must use the `.get()` method**.

```jsx
// URL is /products?color=red&size=10

const color = searchParams.get("color"); // "red"
const size = searchParams.get("size");   // "10"
const brand = searchParams.get("brand"); // null (doesn't exist)
```

---

## Warning: Everything is a String!

Just like URL Parameters (`useParams`), every single value extracted from a query string is a string.

If the URL is `/products?page=2`:

```jsx
const page = searchParams.get("page");
console.log(typeof page); // "string"
console.log(page === 2);  // FALSE
```

If you need to do math (like incrementing the page number), you must parse it:

```jsx
const pageStr = searchParams.get("page") || "1"; // Default to "1" if missing
const pageNum = parseInt(pageStr, 10);
```
