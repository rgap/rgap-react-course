# 4. Automatic Revalidation

You have now reached the absolute pinnacle of React Router 6.4's design philosophy.

In standard React, if you have a list of posts on the screen, and you submit a form to create a new post, you must:
1. Wait for the `POST` request to succeed.
2. Manually trigger your `useFetch` hook to run again.
3. Wait for the `GET` request to finish.
4. Update React State to re-render the UI.

React Router completely automates this.

---

## The Magic of the Data Router

Whenever an `action` function successfully completes, React Router makes a monumental assumption: **If you mutated data, the data on the screen is probably stale.**

Therefore, React Router will automatically execute the `loader` function for every single route currently visible on the screen!

### The Flow:
1. User clicks "Submit" on a `<Form>`.
2. Router state becomes `submitting`.
3. The `action` function runs and saves the data to the database.
4. The `action` finishes.
5. Router state changes from `submitting` to `loading`.
6. **The `loader` function automatically runs!**
7. The `loader` fetches the fresh data from the database.
8. The `loader` finishes.
9. Router state becomes `idle`.
10. The UI automatically re-renders with the new data from `useLoaderData()`.

You do not have to write a single line of state management code to achieve this. You write one function to fetch (`loader`), one function to save (`action`), and React Router seamlessly synchronizes the UI for you.
