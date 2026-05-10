# 4. Custom Scroll Keys with `getKey`

By default, `<ScrollRestoration />` stores a scroll position for each unique URL visited. It uses the full URL (`pathname + search + hash`) as the storage key.

This is correct for most cases, but sometimes you need fine-grained control over what counts as a "unique scroll position."

---

## The Tab Interface Problem

Consider a page with tabbed content, like `/feed?tab=Technology` and `/feed?tab=Design`.

By default, `<ScrollRestoration />` treats these as **two separate scroll positions** because the URLs are different. This is actually the **correct and desired behavior** for tab interfaces!

But imagine a different case where you only want to track scroll by pathname, ignoring query strings (e.g., a search results page where the query changes constantly):

```jsx
<ScrollRestoration
  getKey={(location) => {
    // Only use the pathname — ignore search params
    return location.pathname;
  }}
/>
```

---

## The `getKey` Prop

`getKey` is a function that receives the `location` object and returns a **string** that will be used as the scroll storage key.

```jsx
<ScrollRestoration
  getKey={(location) => {
    // Default behavior (explicit):
    return location.pathname + location.search;

    // OR: Only by pathname (ignores ?query=...)
    // return location.pathname;

    // OR: Completely custom logic
    // return someCustomKeyGenerator(location);
  }}
/>
```

---

## The `location` Object

Inside `getKey`, the `location` object has the same shape as `window.location`:

| Property | Example |
|---|---|
| `location.pathname` | `/feed` |
| `location.search` | `?tab=Technology` |
| `location.hash` | `#section-3` |
| `location.key` | A unique React Router ID per navigation entry |

Using `location.key` as the key gives every single navigation its own unique scroll position — even if you visit the same URL twice. This is the behavior of a traditional browser.
