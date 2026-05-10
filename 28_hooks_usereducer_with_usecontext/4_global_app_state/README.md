# 4. Global App State

Combining `useReducer` and `useContext` allows you to create a **global application state** architecture that scales very well.

In this lesson, we manage `user`, `theme`, and `notifications` all in one central store.

---

## Centralized Store Concept

A real application might have many different domains of state. You can either:
1. Create many separate Contexts (ThemeContext, AuthContext, NotificationContext).
2. Create **one Global Context** with a large reducer.

Which one to choose?

- **Separate Contexts** are better for performance, because components only re-render if the specific context they listen to changes.
- **Global Context** is easier to set up and allows actions to affect multiple domains at once (e.g., `LOGOUT` could clear the user AND clear private notifications).

---

## Global Reducer

In our `AppContext.jsx`, we have a unified state shape:

```js
const initialState = {
  user: null,
  theme: "light",
  notifications: []
};
```

And a reducer that handles actions for all domains:

```js
function appReducer(state, action) {
  switch (action.type) {
    // Auth actions
    case "LOGIN": return { ...state, user: action.payload };
    case "LOGOUT": return { ...state, user: null };
    
    // Theme actions
    case "TOGGLE_THEME": return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    
    // Notification actions
    case "ADD_NOTIFICATION": return { ...state, notifications: [...state.notifications, action.payload] };
    case "CLEAR_NOTIFICATIONS": return { ...state, notifications: [] };
    
    default: throw new Error();
  }
}
```

---

## The Benefits of This Architecture

1. **Top-Down Data Flow:** All state lives in `<AppProvider>` at the very top of the app.
2. **Anywhere Access:** Any deeply nested component can read state (`useAppState()`) or dispatch actions (`useAppDispatch()`).
3. **Debuggable:** Since all state transitions happen in `appReducer`, you could easily add a `console.log(action)` to log every state change in your app (this is exactly how Redux DevTools works!).
4. **Predictable:** State is never mutated randomly by random components. It only changes in response to strict, defined actions.

---

## Comparison to Redux

If you've heard of Redux, you'll recognize this entire pattern. Redux is built on the exact same principles:

- Single source of truth (the Store / StateContext)
- State is read-only (you cannot mutate it directly)
- Changes are made with pure functions (Reducers)
- Intent is expressed via Actions

For many React applications today, `useReducer` + `useContext` is completely sufficient, meaning you don't need to install external libraries like Redux to get a robust global state management system.
