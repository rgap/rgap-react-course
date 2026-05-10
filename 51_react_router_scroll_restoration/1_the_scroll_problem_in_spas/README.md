# 1. The Scroll Problem in SPAs

In a traditional multi-page website (like an old PHP site), every time a user clicks a link, the browser:
1. Makes a network request for the new HTML file.
2. Receives the response and builds a brand-new page.
3. **Automatically resets the scroll position to the top of the new page.**

This scroll reset is a free, built-in browser behavior tied to the page load lifecycle.

---

## What SPAs Do Instead

React Router intercepts link clicks and renders new components **without** loading a new page. There is no page load, so the browser never gets the opportunity to reset the scroll position.

The result: if you scroll to the bottom of a long article, then click a nav link to go to a new page, the new page renders with the scroll position exactly where you left it — usually at the bottom!

This is confusing and frustrating for users, who expect new pages to start at the top.

---

## The Problem in Action

Run this app, scroll down on any page, then click a navigation link. You will land on the new page's content mid-way through, instead of at the top.

This is the bug that `<ScrollRestoration />` was built to fix.

---

## Why Not Just Use `window.scrollTo(0, 0)`?

You could put `window.scrollTo(0, 0)` in a `useEffect` on every page component. This works, but it is:
- **Repetitive** — every page component needs it.
- **Incomplete** — it doesn't restore a previous scroll position when the user hits the browser's Back button (which is expected behavior).

React Router's `<ScrollRestoration />` handles both cases automatically.
