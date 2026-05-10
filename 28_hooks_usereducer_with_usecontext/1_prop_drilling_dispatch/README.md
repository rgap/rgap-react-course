# 1. Prop Drilling with useReducer

`useReducer` is fantastic for managing complex state, but it does not solve the **prop drilling** problem. 

If you define `useReducer` in the `App` component, you still have to pass `state` and `dispatch` down to every child component that needs them.

---

## The Problem

```jsx
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <main>
      <Header state={state} />
      <MainContent state={state} dispatch={dispatch} />
      <Sidebar dispatch={dispatch} />
    </main>
  );
}
```

If `MainContent` renders a list of `Item` components, it has to pass `dispatch` to each `Item`.
If `Item` renders a `DeleteButton`, it has to pass `dispatch` to `DeleteButton`.

```txt
App (owns state & dispatch)
  ↓ passes dispatch
MainContent (doesn't use dispatch)
  ↓ passes dispatch
Item (doesn't use dispatch)
  ↓ passes dispatch
DeleteButton (FINALLY calls dispatch) ✅
```

---

## Why is this bad?

1. **Boilerplate:** You have to write `dispatch={dispatch}` everywhere.
2. **Refactoring is hard:** If you move a component, you have to rewire all the props.
3. **Middlemen components:** Components that don't care about state or actions are forced to know about them just to pass them along.

---

## The Solution

We already learned how to solve prop drilling: the **Context API**!

By combining `useReducer` and `useContext`, we can create a powerful global state management system. We will explore this in the next lessons.
