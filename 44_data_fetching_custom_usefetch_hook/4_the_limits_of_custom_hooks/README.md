# 4. The Limits of Custom Hooks

We have successfully built a robust `useFetch` hook. It handles loading states, error states, request aborting, and custom headers.

But it has a fatal flaw.

---

## The Deduplication Problem

In a real application, multiple components often need the exact same piece of data. 
- The `<Navbar>` needs the user's name to display in the top right.
- The `<Sidebar>` needs the user's name to highlight their profile.
- The `<Settings>` page needs the user's email.

If you call `useFetch('/api/user')` in all three components, **your app will fire 3 identical network requests to the server simultaneously.**

This wastes the user's cellular data, slows down the UI, and overloads your backend server.

---

## Why does this happen?

React Hooks do **not** share state. 

When you call `useState` or `useEffect` inside a custom hook, React creates an entirely isolated, independent instance of that state for whatever component called it.

The `<Navbar>`'s `useEffect` knows absolutely nothing about the `<Sidebar>`'s `useEffect`.

---

## The Solution: Caching

To fix this, we need a **Global Cache**. 

When `<Navbar>` requests `/api/user`, the fetching system needs to check the global cache first. If it's not there, it fetches it, and saves it to the cache. When `<Sidebar>` asks for it a millisecond later, the system says *"Wait! I already fetched that! Here is the cached data."*

Building a bulletproof global caching system with background revalidation and garbage collection is incredibly difficult. 

**This is why the React Community explicitly recommends AGAINST building your own data fetching hooks.**

For production applications, you should use dedicated data-fetching libraries that have caching built-in. The two industry standards are:

1. **React Query** (`@tanstack/react-query`)
2. **SWR** (`swr`)

Congratulations! You now understand exactly *why* these libraries exist and the massive problems they solve.
