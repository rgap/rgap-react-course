# 2. Using `<ScrollRestoration />`

React Router 6.4 introduced a component called `<ScrollRestoration />` as part of the Data Router API.

It is a **zero-render component** — it produces no visible HTML. Its only job is to manage scroll behavior automatically during navigation.

---

## Setup: One Line of Code

The entire fix requires just two steps:

**Step 1:** Import the component.
```jsx
import { ScrollRestoration } from "react-router-dom";
```

**Step 2:** Place it once inside your Root Layout, alongside `<Outlet />`.
```jsx
function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>

      {/* That's it! One component, placed once. */}
      <ScrollRestoration />
    </>
  );
}
```

---

## What Does It Actually Do?

`<ScrollRestoration />` handles **two distinct behaviors**:

| Scenario | Behavior |
|---|---|
| User navigates **forward** (clicking a link) | Scrolls to the **top** of the new page |
| User navigates **backward** (browser Back button) | **Restores** the exact scroll position they were at on the previous page |

This is identical to how traditional multi-page websites behave, and it is exactly what users expect.

> **Important:** `<ScrollRestoration />` only works with the **Data Router** (`createBrowserRouter`). It does NOT work with the legacy `<BrowserRouter>` component.
