# 1. Skeleton Loading Screens

We've learned how to track `isLoading` state, but returning `<div>Loading...</div>` or a spinning circle provides a very mediocre User Experience (UX).

The modern industry standard for loading states is **Skeleton UI**.

---

## What is a Skeleton?

A skeleton screen is a blank version of a page into which information is gradually loaded. It gives the user an immediate visual representation of what the interface is going to look like.

Think of YouTube or Facebook. When you open them on a slow connection, you don't see a giant spinning wheel in the center of the screen. You see gray boxes where the videos and posts are *going* to be.

## Why use Skeletons?

1. **Perceived Performance:** Studies show that users perceive applications with skeleton screens as loading *faster* than applications with spinning loaders, even if the actual network time is identical.
2. **Reduced Layout Shift:** If you show a tiny 20x20px spinner, and then suddenly render a massive 800px image, the screen violently jumps around (Cumulative Layout Shift). A skeleton reserves the physical space on the screen, preventing the jump.

---

## How to build them

Skeletons are incredibly simple to build in React.

1. Create a CSS class that applies a gray background and a subtle pulsing animation.
2. Create a component that returns `div`s with that class, sized to match your actual content.
3. Conditionally render the skeleton component when `isLoading` is true!

```jsx
if (isLoading) {
  return (
    <>
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
    </>
  );
}

return data.map(product => <ProductCard data={product} />);
```
