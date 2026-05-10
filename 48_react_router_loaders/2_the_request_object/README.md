# 2. The `request` Object

In the previous lesson, we learned how to extract URL Parameters (`/users/:id`) using the `params` argument.

But what if you need to extract Search Parameters (Query Strings) like `?q=apples&sort=asc`? 

You cannot use the `useSearchParams()` hook inside a loader, because hooks only work inside React components!

---

## The Request Argument

The arguments object passed to every loader also contains a `request` property.

This is a standard Web API `Request` object. It contains the full, absolute URL of the current page request.

```javascript
export const searchLoader = async ({ request }) => {
  // 1. Create a standard URL object
  const url = new URL(request.url);
  
  // 2. Use the built-in searchParams property
  const searchTerm = url.searchParams.get("q");
  
  // 3. Fetch data using the term!
  const res = await fetch(`/api/search?query=${searchTerm}`);
  return res.json();
};
```

This pattern is essential for implementing Search functionality, filtering, and pagination in a Data Router application.
