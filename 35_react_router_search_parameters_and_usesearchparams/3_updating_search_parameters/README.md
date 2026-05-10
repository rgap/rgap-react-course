# 3. Updating Search Parameters

We can read the URL parameters, but how do we change them?

For example, the user types "shoes" into an input box and clicks Search. We want to update the URL to `/search?q=shoes`.

---

## `setSearchParams`

Remember that `useSearchParams` returns an array with two items. The second item is a setter function.

```jsx
const [searchParams, setSearchParams] = useSearchParams();
```

To update the URL, you simply call `setSearchParams` and pass it an object representing the new parameters.

```jsx
// This updates the URL to: ?color=red&size=10
setSearchParams({ color: "red", size: "10" });
```

React Router will automatically intercept this, rewrite the browser's URL, and trigger a re-render of your component so it can read the new parameters!

---

## Overwriting vs Merging

**Important:** Passing an object to `setSearchParams` will completely overwrite the existing query string.

If the URL is `?color=red` and you call:
```jsx
setSearchParams({ size: "10" });
```
The URL becomes `?size=10`. The color parameter was erased!

If you want to **merge** a new parameter while keeping the old ones, you have to read them first. Luckily, React Router lets you pass the existing `searchParams` object as a starting point.

```jsx
// 1. URL is ?color=red

// 2. We want to ADD size=10, but keep color=red
function handleSizeChange() {
  // Pass a function to the setter (just like with useState!)
  setSearchParams((prevParams) => {
    // Modify the URLSearchParams object directly
    prevParams.set("size", "10");
    // Return the updated object
    return prevParams;
  });
}

// 3. URL becomes ?color=red&size=10
```

---

## Removing Parameters

To completely wipe the query string (e.g., a "Clear Filters" button), just pass an empty object:

```jsx
setSearchParams({});
```

If you only want to delete one specific parameter (e.g., removing the `size` filter but keeping `color`):

```jsx
setSearchParams((prevParams) => {
  prevParams.delete("size");
  return prevParams;
});
```
