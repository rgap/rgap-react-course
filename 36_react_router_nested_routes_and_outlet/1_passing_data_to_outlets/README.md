# 1. Passing Data to Outlets

In Module 32, we learned how to use `<Outlet />` to create persistent Layouts (like Sidebars and Navbars).

But Layouts often fetch data that the child routes need.

---

## The Problem

Imagine a Dashboard layout. When the user navigates to `/dashboard`, the `DashboardLayout` component fetches the User profile from the database to display their avatar in the sidebar.

```jsx
function DashboardLayout() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser().then(data => setUser(data));
  }, []);

  return (
    <div className="layout">
      <Sidebar user={user} />
      <main>
        <Outlet /> 
      </main>
    </div>
  );
}
```

Now, the user clicks a link to `/dashboard/settings`. The `<Outlet />` renders the `<Settings />` component.

The `<Settings />` component needs to know the user's name so they can edit it. **But how do we pass the `user` state down to the `<Settings />` component?** 

We can't pass props to `<Outlet />` the normal way!

```jsx
{/* ❌ WRONG: This is NOT how you pass props to child routes */}
<Outlet user={user} setUser={setUser} />
```

---

## The Solution: `context` prop

React Router provides a special prop exclusively for the `<Outlet />` component called `context`.

You pass whatever data you want to share into the `context` prop:

```jsx
{/* ✅ CORRECT: Pass an object containing the data */}
<Outlet context={{ user, setUser }} />
```

Now, any child component that renders inside this Outlet will have access to that `context` object. 

In the next lesson, we will learn how the child components actually retrieve it!
