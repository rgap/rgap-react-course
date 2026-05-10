# 1. When useState Gets Complex

`useState` is great for simple, independent pieces of state:

```jsx
const [count, setCount] = useState(0);
const [name, setName] = useState("");
```

But when state becomes **complex** or **interdependent**, `useState` starts to cause problems.

---

## Signs That useState Is Not Enough

### 1. Too Many State Variables

```jsx
const [name, setName] = useState("");
const [age, setAge] = useState("");
const [email, setEmail] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);
const [error, setError] = useState(null);
```

Six state variables. Six setter functions. It is hard to see the "shape" of the state.

### 2. Multiple Setters for One Action

When you submit a form, you might need to call multiple setters at once:

```jsx
function handleSubmit() {
  setIsSubmitting(true);
  setError(null);
  setIsSuccess(false);
}
```

This is one logical action ("submit"), but it requires three separate state updates. If you forget one, the state becomes inconsistent.

### 3. Related Transitions Are Scattered

The rules for how state changes are spread across many event handlers. It is hard to see all the possible state transitions in one place.

---

## What We Want

Instead of calling many setters for each action, we want to:

1. Describe **what happened** with a simple object.
2. Have **one function** that knows how to update all the state.

```txt
Instead of:
  setIsSubmitting(true)
  setError(null)
  setIsSuccess(false)

We want:
  dispatch({ type: "SUBMIT" })
```

One action. One place that handles it. This is the **reducer pattern**.

---

## When to Consider useReducer

- State has 3 or more related variables.
- Multiple state variables must change together for a single action.
- The next state depends on the previous state in complex ways.
- You want all state transition logic in one place.
