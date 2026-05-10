# 4. `useSearchParams` AS State

This is one of the most powerful and important concepts in React Router.

**The URL is a state manager.**

---

## The Bad Way (using `useState`)

Imagine building a product list with category filters (shoes, shirts, hats). 
A beginner will almost always build it like this:

```jsx
function Products() {
  // ❌ Storing the filter in memory
  const [filter, setFilter] = useState("all");

  return (
    <div>
      <button onClick={() => setFilter("shoes")}>Shoes</button>
      <List filter={filter} />
    </div>
  );
}
```

This works perfectly fine, until the user tries to share the page.
1. User clicks "Shoes".
2. User copies the URL (`mywebsite.com/products`).
3. User texts the URL to a friend.
4. Friend opens the URL. The `useState` initializes to `"all"`.
5. Friend sees Shirts and Hats, not the Shoes they were promised.

---

## The Professional Way (using `useSearchParams`)

Instead of storing the filter in React's memory (`useState`), store it in the URL!

```jsx
function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // ✅ Extract the filter directly from the URL!
  const filter = searchParams.get("filter") || "all";

  return (
    <div>
      {/* Update the URL instead of calling setState */}
      <button onClick={() => setSearchParams({ filter: "shoes" })}>Shoes</button>
      <List filter={filter} />
    </div>
  );
}
```

Now, the URL is the **Single Source of Truth**.

If the user clicks "Shoes", the URL changes to `mywebsite.com/products?filter=shoes`.
If they text that link to a friend, the friend's browser will load the page, React Router will extract `filter=shoes`, and the component will instantly render the Shoes!

### What state should go in the URL?
Anything that a user might reasonably want to bookmark or share.
- Search queries (`?q=react`)
- Sorting options (`?sort=price-desc`)
- Filters (`?category=shoes&size=10`)
- Pagination (`?page=3`)
- Active tabs in a UI (`?tab=billing`)

### What state should stay in `useState`?
Transient, temporary, or sensitive data.
- User input as they are typing (before they hit Submit)
- Is a dropdown menu currently open (`isOpen=true`)
- Password fields
