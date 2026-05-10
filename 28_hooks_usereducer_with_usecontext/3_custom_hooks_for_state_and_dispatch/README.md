# 3. Custom Hooks for State and Dispatch

In the previous lesson, we passed `{ state, dispatch }` as a single object into one Context Provider.

While this works, it has a hidden performance flaw: every time `state` changes, a new `{ state, dispatch }` object is created. This forces **every component** that reads the context to re-render, even if that component only uses `dispatch` (like a Button).

The professional pattern solves this by splitting them into **two separate contexts**.

---

## Two Contexts

We create one context for the state data, and one for the dispatch function:

```jsx
const StateContext = createContext();
const DispatchContext = createContext();
```

Then, in our custom Provider, we nest them:

```jsx
function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}
```

---

## Why Splitting Them Helps Performance

`dispatch` is a stable function provided by `useReducer`. It **never changes** for the lifetime of the component.

If a Button only consumes `DispatchContext`, it will **never** be forced to re-render when the `state` changes, because `DispatchContext`'s value never changes!

```txt
StateContext value changes (count goes 0 → 1)
  ↓
Display component re-renders ✅ (it needs the new state)

DispatchContext value stays the SAME
  ↓
Button component does NOT re-render ✅ (huge performance win)
```

---

## Custom Hooks

To make consuming easy, we create two custom hooks:

```jsx
function useCounterState() {
  const context = useContext(StateContext);
  if (context === undefined) throw new Error("...");
  return context;
}

function useCounterDispatch() {
  const context = useContext(DispatchContext);
  if (context === undefined) throw new Error("...");
  return context;
}
```

Now, consumers are incredibly clean:

```jsx
// I just read data!
function Display() {
  const state = useCounterState();
  return <p>{state.count}</p>;
}

// I just send actions!
function Button() {
  const dispatch = useCounterDispatch();
  return <button onClick={() => dispatch({ type: "INC" })}>+</button>;
}
```

This is the exact same pattern used by major state management libraries.
