# 3. `useReducer` Syntax

Now we connect the reducer pattern to React using the `useReducer` Hook.

---

## The API

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

| Part           | Description                                      |
| -------------- | ------------------------------------------------ |
| `reducer`      | The pure function: `(state, action) → newState`  |
| `initialState` | The starting state value                         |
| `state`        | The current state (like from `useState`)         |
| `dispatch`     | A function to send actions to the reducer        |

---

## Step by Step

### 1. Define the initial state

```js
const initialState = { count: 0 };
```

### 2. Define the reducer

```js
function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}
```

### 3. Call useReducer inside the component

```jsx
function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
```

### 4. Dispatch actions from event handlers

```jsx
  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </>
  );
}
```

---

## The Flow

```txt
User clicks "+"
  ↓
dispatch({ type: "INCREMENT" })
  ↓
React calls counterReducer({ count: 0 }, { type: "INCREMENT" })
  ↓
Reducer returns { count: 1 }
  ↓
React updates state and re-renders
  ↓
UI shows 1
```

---

## Actions with Payload

Sometimes an action needs to carry data:

```js
dispatch({ type: "SET", payload: 100 });
```

The reducer reads it:

```js
case "SET":
  return { count: action.payload };
```

---

## Comparing useState and useReducer

```jsx
// useState version
const [count, setCount] = useState(0);
setCount(count + 1);

// useReducer version
const [state, dispatch] = useReducer(reducer, { count: 0 });
dispatch({ type: "INCREMENT" });
```

Both do the same thing. The difference is **where the logic lives**:

| `useState`                          | `useReducer`                       |
| ----------------------------------- | ---------------------------------- |
| Logic is in event handlers          | Logic is in the reducer function   |
| Good for simple, independent state  | Good for complex, related state    |
| Setters scattered across handlers   | All transitions in one function    |
