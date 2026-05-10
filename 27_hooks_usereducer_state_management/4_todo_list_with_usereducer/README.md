# 4. Todo List with useReducer

This lesson brings everything together with a practical example: a **Todo List** managed entirely with `useReducer`.

---

## The State Shape

```js
const initialState = {
  todos: [],
  nextId: 1,
};
```

Each todo is an object:

```js
{ id: 1, text: "Learn React", completed: false }
```

---

## The Actions

| Action             | Payload    | What It Does                     |
| ------------------ | ---------- | -------------------------------- |
| `ADD_TODO`         | `string`   | Adds a new todo with the text    |
| `TOGGLE_TODO`      | `number`   | Toggles completed status by id   |
| `DELETE_TODO`      | `number`   | Removes a todo by id             |
| `CLEAR_COMPLETED`  | (none)     | Removes all completed todos      |

---

## The Reducer

Each case in the switch returns a **new state object** without mutating the original:

```js
case "ADD_TODO":
  return {
    ...state,
    todos: [...state.todos, { id: state.nextId, text: action.payload, completed: false }],
    nextId: state.nextId + 1,
  };

case "TOGGLE_TODO":
  return {
    ...state,
    todos: state.todos.map(todo =>
      todo.id === action.payload
        ? { ...todo, completed: !todo.completed }
        : todo
    ),
  };

case "DELETE_TODO":
  return {
    ...state,
    todos: state.todos.filter(todo => todo.id !== action.payload),
  };
```

---

## Immutability

Notice that the reducer **never modifies** the existing state. It always creates a new object:

```txt
❌ state.todos.push(newTodo);        // Mutation!
✅ [...state.todos, newTodo]          // New array
```

```txt
❌ state.todos[i].completed = true;  // Mutation!
✅ state.todos.map(t => ...)          // New array with new objects
```

This is a fundamental rule: reducers must be **pure** and must return **new** state objects.

---

## Mixing useState and useReducer

Notice that the input text uses `useState`:

```jsx
const [inputText, setInputText] = useState("");
```

This is perfectly fine. The input value is simple and independent — it doesn't need the reducer. Use the right tool for each job:

- **Simple, independent state** → `useState`
- **Complex, related state** → `useReducer`

---

## Benefits of This Pattern

1. **All logic in one place:** The reducer contains every possible state transition.
2. **Predictable:** Given a state and an action, the result is always the same.
3. **Testable:** You can test the reducer as a plain function, without React.
4. **Scalable:** Adding a new action is just adding a new case to the switch.

```js
// Testing is easy:
expect(todoReducer(state, { type: "ADD_TODO", payload: "Test" }))
  .toEqual({ todos: [{ id: 1, text: "Test", completed: false }], nextId: 2 });
```
