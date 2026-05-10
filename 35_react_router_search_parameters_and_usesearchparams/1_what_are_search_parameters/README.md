# 1. What are Search Parameters?

In the previous module, we learned about URL Parameters (Dynamic Segments). 

For example: `/users/:userId` matches `/users/123`.

This is great for identifying a **specific resource**.

But what if you want to **filter, sort, or paginate** a large list of resources?

---

## The Query String

If you go to Amazon and search for "laptops" and sort by "Price: Low to High", look at your URL bar. It will look something like this:

`amazon.com/s?k=laptops&s=price-asc-rank`

Everything after the question mark `?` is called the **query string** or **search parameters**.

### Anatomy

1. **`?`** - Starts the query string.
2. **`k=laptops`** - A key-value pair (`k` is the key, `laptops` is the value).
3. **`&`** - The ampersand separates multiple key-value pairs.
4. **`s=price-asc-rank`** - Another key-value pair.

---

## When to use URL Params vs Search Params

A common interview question is knowing when to use which.

### Use URL Parameters (Dynamic Segments)
When identifying a **specific, single entity** that is required for the page to exist.
- Example: `/users/123` (User ID 123)
- Example: `/products/apple-watch` (The Apple Watch product)

### Use Search Parameters (Query Strings)
When modifying a list of items using **optional** modifiers like sorting, filtering, or pagination.
- Example: `/shoes?color=red&size=10` (Filtering)
- Example: `/articles?sort=newest` (Sorting)
- Example: `/search?q=react&page=2` (Searching and Pagination)

---

## Routing with Search Parameters

In React Router, you **do not** include search parameters in your `<Route>` paths.

```jsx
// ❌ WRONG
<Route path="/shoes?color=red" element={<Shoes />} />

// ✅ RIGHT
<Route path="/shoes" element={<Shoes />} />
```

React Router completely ignores everything after the `?` when figuring out which component to render. 

This means that `/shoes`, `/shoes?color=red`, and `/shoes?size=10&sort=asc` will ALL render the exact same `<Shoes />` component!

In the next lesson, we will learn how the `<Shoes />` component can actually read those variables.
