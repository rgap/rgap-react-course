# 2. The Context + Reducer Pattern

To solve prop drilling with `useReducer`, we can provide the `state` and `dispatch` functions through React Context.

This combination is so powerful that it is effectively a lightweight alternative to libraries like Redux.

---

## The Pattern

### 1. Create a Context

```jsx
const CounterContext = createContext();
```

### 2. Run useReducer and Provide the Value

Call `useReducer` at the top of your component tree. Then, pass **both** the `state` and `dispatch` down through the Provider as an object:

```jsx
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      <Tree />
    </CounterContext.Provider>
  );
}
```

### 3. Consume Anywhere

Now, any deeply nested component can skip prop drilling and read exactly what it needs from the context:

```jsx
function Display() {
  // Needs to read state
  const { state } = useContext(CounterContext);
  return <p>{state.count}</p>;
}

function IncrementButton() {
  // Needs to send actions
  const { dispatch } = useContext(CounterContext);
  return <button onClick={() => dispatch({ type: "INC" })}>+</button>;
}
```

---

## Why This is Powerful

1. **Global State:** You have a single source of truth (`state`).
2. **Predictable Updates:** State can only be changed by dispatching predefined actions through the `reducer`.
3. **No Prop Drilling:** Any component can access `state` or `dispatch` directly via `useContext`.

```txt
App (holds useReducer)
  ↓ provides { state, dispatch } to Context
Middleman
  Middleman
    Consumer A → uses state
    Consumer B → uses dispatch
```

---

## A Note on Performance

When you pass an object like `value={{ state, dispatch }}` into a Provider, a new object reference is created on every render. If your application is very large, this can cause unnecessary re-renders in some optimized components.

For simple apps, this is completely fine. In the next lesson, we will look at how to refine this pattern with custom hooks for a more professional structure.
