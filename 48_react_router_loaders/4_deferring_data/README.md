# 4. Deferring Data

React Router's default behavior is to **block navigation** until every single Promise in the loader resolves.

If your dashboard fetches a `userProfile` (takes 100ms) and an `analyticsReport` (takes 5 seconds), the user will stare at a loading spinner for 5 seconds before the page changes. 

This is bad UX. We want to show the user profile immediately, and let the analytics report load in the background.

---

## `defer`

React Router 6.4 introduced the `defer()` utility specifically for this scenario.

Instead of returning a plain object from your loader, you return `defer({})`.

Inside the `defer` object, you can pass **unresolved Promises**. React Router will NOT wait for them to finish before completing the navigation!

```javascript
export const dashboardLoader = async () => {
  // We 'await' the fast, critical data. Navigation WILL be blocked until this is done.
  const criticalUser = await fetchUser();
  
  // We DO NOT 'await' the slow data. We just store the Promise variable.
  const slowAnalyticsPromise = fetchAnalytics();

  return defer({
    user: criticalUser,
    analytics: slowAnalyticsPromise
  });
}
```

---

## `<Suspense>` and `<Await>`

Because the analytics data is an unresolved Promise when the component mounts, you cannot render it directly.

You must wrap the UI in two components:
1. `<Suspense>`: A standard React component that provides a `fallback` UI (like a spinner) while the Promise is pending.
2. `<Await>`: A special React Router component that takes the unresolved Promise via the `resolve` prop. Once the Promise finishes, it hands the resulting data down to a callback function to render the UI.

```jsx
import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';

function Dashboard() {
  const data = useLoaderData();

  return (
    <div>
      <h1>Welcome {data.user.name}</h1>
      
      <Suspense fallback={<Spinner />}>
        <Await resolve={data.analytics}>
          {(resolvedAnalytics) => <Chart data={resolvedAnalytics} />}
        </Await>
      </Suspense>
    </div>
  );
}
```

This represents the absolute bleeding edge of React application architecture!
