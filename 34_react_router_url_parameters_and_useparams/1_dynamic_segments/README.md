# 1. Dynamic Segments

So far, all of our routes have been **static**.

```jsx
<Route path="/about" element={<About />} />
```
This route *only* matches if the URL is exactly `/about`.

---

## The Problem

Imagine building Twitter. Every user has a profile page:
- `twitter.com/elonmusk`
- `twitter.com/billgates`
- `twitter.com/reactjs`

You cannot write a static route for every single user on the planet.

```jsx
// ❌ THIS IS IMPOSSIBLE
<Routes>
  <Route path="/elonmusk" element={<Profile />} />
  <Route path="/billgates" element={<Profile />} />
  {/* ... 1 billion more routes ... */}
</Routes>
```

We need a way to say: *"If the URL is a slash followed by literally anything, render the Profile component."*

---

## Dynamic Segments (URL Parameters)

You can turn any part of a URL into a variable by prefixing it with a colon `:`.

```jsx
<Route path="/:username" element={<Profile />} />
```

Now, this single route acts as a catch-all for a specific pattern. It will match `/elonmusk`, `/billgates`, and `/apple`.

These variables are called **URL Parameters**.

---

## Example: An E-commerce Store

If you are building an online store, your products might live under the `/products` path, followed by their unique ID.

```jsx
<Routes>
  <Route path="/products" element={<ProductDirectory />} />
  
  {/* Matches /products/1, /products/99, /products/ipad */}
  <Route path="/products/:productId" element={<ProductDetails />} />
</Routes>
```

In the `<Route>`, we named the variable `:productId`. 

But there is a missing piece to this puzzle. When the `<ProductDetails>` component renders, how does it know if it's supposed to fetch data for product #1 or product #99? 

It needs a way to extract the value out of the URL. We will learn how to do that in the next lesson.
