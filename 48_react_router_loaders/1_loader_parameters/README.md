# 1. Loader Parameters

In the standard React Router architecture, when you navigate to a dynamic route like `/users/:userId`, you extract the `userId` using the `useParams()` hook inside your component.

But loaders run *outside* the component. How can a loader know which `userId` it is supposed to fetch?

---

## The Loader Arguments

Whenever React Router executes a loader function, it automatically passes in an arguments object.

This object contains a `params` property. The `params` property works exactly like the `useParams` hook: it holds all the dynamic segments of the current URL!

```javascript
// router.jsx
{
  path: "/users/:userId",
  loader: userLoader
}
```

```javascript
// The loader function receives the object, and we destructure `params`
export const userLoader = async ({ params }) => {
  // We can access params.userId directly!
  const res = await fetch(`/api/users/${params.userId}`);
  return res.json();
};
```

This is incredibly powerful because it means your component doesn't even need to know what URL it is on. The loader handles all the URL parsing and data fetching, and simply hands the finished data down to the component via `useLoaderData()`.
