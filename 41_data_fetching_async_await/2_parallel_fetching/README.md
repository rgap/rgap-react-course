# 2. Parallel Fetching

If a component needs multiple pieces of data, and those pieces of data do **not** depend on each other, you should fetch them in parallel.

---

## The Accidental Waterfall

Beginners almost always write code like this:

```jsx
// ❌ ACCIDENTAL WATERFALL
const loadData = async () => {
  // Wait 2 seconds...
  const users = await fetch("/api/users").then(r => r.json());
  
  // Wait another 2 seconds...
  const products = await fetch("/api/products").then(r => r.json());
  
  // Total time: 4 seconds!
};
```

This is terribly inefficient. The `products` request has nothing to do with the `users` request. Why is it waiting for the `users` request to finish before it even *starts*?

---

## The Solution: `Promise.all`

To run tasks in parallel, we use a built-in JavaScript method called `Promise.all()`.

You pass it an array of Promises. It will run them all simultaneously, and it returns a single array containing all the results!

```jsx
// ✅ PARALLEL FETCHING
const loadData = async () => {
  
  // 1. Create the promises (do NOT await them yet)
  const usersPromise = fetch("/api/users");
  const productsPromise = fetch("/api/products");
  
  // 2. Await both of them simultaneously!
  const [usersRes, productsRes] = await Promise.all([
    usersPromise, 
    productsPromise
  ]);
  
  // 3. Parse JSON simultaneously!
  const [users, products] = await Promise.all([
    usersRes.json(),
    productsRes.json()
  ]);
  
  // Total time: 2 seconds!
};
```

If Request A takes 2 seconds and Request B takes 2 seconds, `Promise.all` fires them at the exact same time. The total loading time is only **2 seconds**.

**Rule of Thumb:**
Whenever you see two `await` statements stacked on top of each other, ask yourself: *"Does the second request need data from the first request?"* If the answer is no, refactor it into a `Promise.all`!
