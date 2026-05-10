# 4. Navigating with `<Link>`

In a normal HTML website, you navigate between pages using the anchor tag:

```html
<a href="/about">About Us</a>
```

If you use this in a React SPA, **it will trigger a full page reload**. The browser will send a request to the server, download the HTML again, and reboot the entire React application. This defeats the entire purpose of an SPA!

---

## The `<Link>` Component

To navigate inside a React Router application without reloading the page, you must use the `<Link>` component provided by `react-router-dom`.

```jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
```

Notice that we use the **`to`** prop instead of `href`.

---

## How It Works

When you render a `<Link to="/about">`, React Router actually renders a standard HTML `<a>` tag under the hood.

However, React Router attaches an event listener to that link. When the user clicks it:
1. `event.preventDefault()` is called (stopping the browser reload).
2. React Router pushes the new URL `/about` into the browser's history API.
3. The `<Routes>` component detects the URL change and instantly swaps the components.

The result is lightning-fast, client-side navigation.

---

## What about external links?

If you are linking to a different website (like Google or Twitter), you **should** use a standard `<a>` tag! 

React Router only manages routes *inside* your application.

```jsx
// ✅ Correct: Internal navigation
<Link to="/contact">Contact Us</Link>

// ✅ Correct: External navigation
<a href="https://google.com" target="_blank">Go to Google</a>

// ❌ Incorrect: Internal navigation with <a> (causes full reload)
<a href="/contact">Contact Us</a>
```

---

## Persistent Layouts

Notice in the `App.jsx` example that the `<nav>` element is placed **outside** (above) the `<Routes>` block.

```jsx
function App() {
  return (
    <>
      <Navbar /> {/* Always visible */}
      
      <Routes>
        {/* Only this area swaps out */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
      <Footer /> {/* Always visible */}
    </>
  );
}
```

This is a powerful pattern. Because the Navbar is outside the `Routes`, it never unmounts when the user clicks a link. Only the content inside `Routes` swaps out.
