# 2. NavLink Active State

A very common requirement in web development is highlighting the link in the navigation bar that corresponds to the current page.

If the user is on the About page, the "About" link should be bold, underlined, or a different color so the user knows where they are.

---

## The `<NavLink>` Component

React Router provides a specialized version of `<Link>` called `<NavLink>`.

You use it exactly the same way:

```jsx
import { NavLink } from "react-router-dom";

<nav>
  <NavLink to="/">Home</NavLink>
  <NavLink to="/about">About</NavLink>
  <NavLink to="/contact">Contact</NavLink>
</nav>
```

### The Magic

`<NavLink>` automatically compares its `to` prop with the current browser URL.

If they match, React Router automatically adds the CSS class name `"active"` to the anchor tag.

If the user is on `/about`, the rendered HTML looks like this:

```html
<nav>
  <a class="" href="/">Home</a>
  <a class="active" href="/about">About</a>
  <a class="" href="/contact">Contact</a>
</nav>
```

All you have to do is write some CSS targeting the `.active` class, and your navigation menu will automatically highlight the current page!

```css
a.active {
  font-weight: bold;
  color: blue;
}
```

---

## When to use Link vs NavLink

- Use **`<NavLink>`** for primary navigation menus (top navbars, sidebars) where the user needs visual feedback about what page they are currently on.
- Use **`<Link>`** for everything else (e.g., a "Read More" button, a link to a user's profile inside a blog post, a logo that links back to the home page).
