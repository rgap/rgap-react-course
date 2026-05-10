# 2. The Reducer Pattern

Before using `useReducer`, we need to understand the **reducer pattern** itself. It is a plain JavaScript concept, not a React concept.

---

## What is a Reducer?

A **reducer** is a pure function that takes two arguments:

1. The **current state**.
2. An **action** (an object describing what happened).

And it returns the **new state**.

```js
function reducer(state, action) {
  // Calculate and return the new state
}
```

---

## What is an Action?

An **action** is a plain JavaScript object that describes what the user did.

By convention, it has a `type` property:

```js
{ type: "INCREMENT" }
{ type: "DECREMENT" }
{ type: "RESET" }
```

Some actions also carry extra data (called a **payload**):

```js
{ type: "SET_NAME", payload: "Alice" }
{ type: "ADD_TODO", payload: { id: 1, text: "Learn React" } }
```

---

## Example Reducer

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

---

## How It Works

```txt
counterReducer({ count: 0 }, { type: "INCREMENT" })
  → { count: 1 }

counterReducer({ count: 1 }, { type: "INCREMENT" })
  → { count: 2 }

counterReducer({ count: 2 }, { type: "DECREMENT" })
  → { count: 1 }

counterReducer({ count: 1 }, { type: "RESET" })
  → { count: 0 }
```

The reducer is **pure**:
- Same state + same action = same result, every time.
- It does not modify the original state. It returns a **new** object.
- It has no side effects (no API calls, no DOM changes).

---

## Why is it Called a "Reducer"?

The name comes from `Array.prototype.reduce()` in JavaScript:

```js
const total = [1, 2, 3].reduce((accumulator, current) => {
  return accumulator + current;
}, 0);
// 0 → 1 → 3 → 6
```

A reducer "reduces" a list of actions into a single state, one action at a time.

---

## Summary

| Concept   | Description                                        |
| --------- | -------------------------------------------------- |
| State     | The current data                                   |
| Action    | An object describing what happened (`{ type: "..." }`) |
| Reducer   | A pure function: `(state, action) → newState`      |
