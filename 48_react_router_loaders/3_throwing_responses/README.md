# 3. Throwing Responses

In the Data Router, `errorElement` boundaries aren't just for accidental component crashes. They are designed to be the primary way you handle `404 Not Found` and `500 Server Error` HTTP status codes!

---

## Catching the Error Early

If a user navigates to `/users/999` and that user doesn't exist, we *could* return `null` from the loader, let the `<Profile>` component mount, check `if (!data) return <NotFound />`, and handle it locally.

But that clutters our component logic.

Instead, we can **throw** inside the loader!

```javascript
export const profileLoader = async ({ params }) => {
  const response = await fetch(`/api/users/${params.userId}`);
  
  if (!response.ok) {
    if (response.status === 404) {
      // 1. Throwing immediately halts the loader
      throw new Response("User not found", { status: 404 });
    }
  }

  return response.json();
};
```

## The Error Boundary

Because the loader threw an error, React Router **aborts the navigation**. The `<Profile>` component is completely bypassed and never mounts. 

Instead, React Router mounts the nearest `errorElement` and passes the thrown object into `useRouteError()`.

```jsx
// App.jsx
function GlobalErrorPage() {
  const error = useRouteError();
  
  if (error.status === 404) {
    return <h1>Resource Not Found!</h1>;
  }
}
```

This ensures your actual UI components are 100% focused on rendering the "Happy Path", knowing that if they are mounted, the data is guaranteed to exist!
