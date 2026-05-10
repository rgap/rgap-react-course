# 3. Multiple URL Parameters

A single URL can have as many dynamic segments as you need.

Imagine an application like GitHub. To view the source code of a specific file in a specific repository owned by a specific user, the URL might look like this:

`github.com/facebook/react/blob/main/package.json`

There are a lot of variables in that URL!

---

## Defining Multiple Parameters

You can place the colon `:` anywhere in the path string, as many times as you like, separated by slashes.

```jsx
<Routes>
  {/* Extracts organization, repo, and filename */}
  <Route 
    path="/:org/:repo/blob/main/:filename" 
    element={<FileViewer />} 
  />
</Routes>
```

If the user goes to `/facebook/react/blob/main/package.json`, React Router matches the path exactly.

Notice that `/blob/main/` acts as an anchor—it must literally match the string for this route to be triggered.

---

## Extracting Multiple Parameters

Because `useParams` returns an object containing all the parameters, you simply destructure all the keys you need:

```jsx
function FileViewer() {
  const { org, repo, filename } = useParams();

  return (
    <div>
      <h1>Viewing {filename}</h1>
      <p>In the {repo} repository owned by {org}.</p>
    </div>
  );
}
```

---

## Warning: Parameter Name Clashes

Be careful if you combine Multiple Parameters with Nested Routes.

```jsx
<Routes>
  <Route path="/store/:id" element={<StoreLayout />}>
    {/* ❌ BAD: The child parameter overwrites the parent parameter! */}
    <Route path="products/:id" element={<Product />}>
  </Route>
</Routes>
```

If the URL is `/store/seattle/products/apple`, what is the value of `id` inside `<Product>`? 

Because both routes used `:id`, the child will overwrite the parent. `id` will be "apple", and "seattle" will be lost.

**The Fix:** Always give your parameters descriptive, unique names.

```jsx
<Routes>
  <Route path="/store/:storeId" element={<StoreLayout />}>
    {/* ✅ GOOD: Unique parameter names */}
    <Route path="products/:productId" element={<Product />}>
  </Route>
</Routes>
```
Now `useParams()` will safely return `{ storeId: "seattle", productId: "apple" }`.
