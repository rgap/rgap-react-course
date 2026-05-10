# 1. The `<Form>` Component

In standard React, building a form is tedious. You have to:
1. Create state variables for every input.
2. Add `onChange` handlers to every input to update the state.
3. Write an `onSubmit` handler.
4. Call `e.preventDefault()` so the page doesn't refresh.
5. Create an object out of your state.
6. Make a `fetch` request using `POST` to send it to the server.

---

## Returning to HTML Basics

Before Single Page Applications (SPAs) existed, HTML forms worked completely automatically.

```html
<form method="POST" action="/api/users">
  <input name="username" />
  <button type="submit">Submit</button>
</form>
```
When a user clicked submit, the browser would automatically package up the data, send a `POST` request to `/api/users`, and then refresh the page with the result.

React Router 6.4 brings this simplicity back.

---

## The React Router `<Form>`

React Router provides a custom `<Form>` component. (Notice the capital **F**).

```jsx
import { Form } from "react-router-dom";

<Form method="post" action="/users/new">
  <input name="username" />
  <button type="submit">Create User</button>
</Form>
```

When the user clicks submit, React Router intercepts the browser's default behavior. 
- It prevents the page refresh automatically.
- It gathers all the input data automatically.
- Instead of sending a network request to the backend, it sends the data to a special function called an **Action**.

In the next lesson, we will write our first Action function to catch this data!
