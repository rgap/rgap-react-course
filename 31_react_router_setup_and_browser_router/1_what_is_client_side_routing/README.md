# 1. What is Client-Side Routing?

Before learning React Router, we need to understand the difference between **Server-Side Routing** and **Client-Side Routing**.

---

## 1. Traditional Server-Side Routing

In the old days (and still in many frameworks today), routing was handled by the **server**.

1. User types `mywebsite.com/about` and presses Enter.
2. The browser sends a request to the server: "Give me the `/about` page."
3. The server builds an HTML file for the About page and sends it back.
4. The browser **reloads the entire page**, turns white for a split second, and renders the new HTML.

**Pros:** Great for SEO, very standard.
**Cons:** Slow. Every click causes a full page reload.

---

## 2. Client-Side Routing (React)

React builds **Single Page Applications (SPAs)**. In an SPA, the server only ever sends **one** HTML file (`index.html`). 

1. User types `mywebsite.com/` and presses Enter.
2. The server sends `index.html` and the React JavaScript bundle.
3. React boots up and renders the Home component.

Now, what happens when the user wants to go to the About page?

1. User clicks an `<a href="/about">` link.
2. **React intercepts the click.** It stops the browser from sending a request to the server.
3. React changes the URL in the address bar to `/about`.
4. React destroys the Home component and renders the About component instantly.

**There is no page reload. No white flash. No server request.** The entire transition happens inside the browser using JavaScript. This is **Client-Side Routing**.

---

## Why Do We Need a Library?

If we just use `useState` to swap components (like in `App.jsx`), the URL in the address bar doesn't change. 

If the URL doesn't change:
- Users cannot use the browser's Back and Forward buttons.
- Users cannot bookmark a specific page.
- Users cannot share a link to a specific page with a friend.

To solve this, we need a library that listens to the browser's URL, intercepts link clicks, and tells React which component to render. 

The industry standard for this is **React Router**.
