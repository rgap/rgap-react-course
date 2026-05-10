import React, { useReducer, useState } from "react";

const initialState = {
  todos: [],
  nextId: 1,
};

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: state.nextId, text: action.payload, completed: false },
        ],
        nextId: state.nextId + 1,
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed),
      };

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [inputText, setInputText] = useState("");

  function handleAdd(e) {
    e.preventDefault();
    if (!inputText.trim()) return;
    dispatch({ type: "ADD_TODO", payload: inputText.trim() });
    setInputText("");
  }

  const remaining = state.todos.filter((t) => !t.completed).length;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "500px" }}>
      <h1>Todo List with useReducer</h1>

      <form onSubmit={handleAdd} style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Add a todo..."
          style={{ flex: 1, padding: "8px", fontSize: "16px" }}
        />
        <button type="submit">Add</button>
      </form>

      {state.todos.length === 0 ? (
        <p style={{ color: "#999" }}>No todos yet. Add one above!</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {state.todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px",
                borderBottom: "1px solid #eee",
              }}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
              />
              <span
                style={{
                  flex: 1,
                  textDecoration: todo.completed ? "line-through" : "none",
                  color: todo.completed ? "#999" : "#000",
                }}
              >
                {todo.text}
              </span>
              <button
                onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
                style={{ color: "red", border: "none", cursor: "pointer", background: "none" }}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}

      <div style={{ marginTop: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span>{remaining} item(s) remaining</span>
        <button onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>
          Clear Completed
        </button>
      </div>

      <div style={{ marginTop: "20px", borderTop: "1px solid #ccc", paddingTop: "15px" }}>
        <h2>Actions Used</h2>
        <ul>
          <li><code>ADD_TODO</code> — adds a new todo with payload text</li>
          <li><code>TOGGLE_TODO</code> — toggles completed status by id</li>
          <li><code>DELETE_TODO</code> — removes a todo by id</li>
          <li><code>CLEAR_COMPLETED</code> — removes all completed todos</li>
        </ul>
      </div>
    </div>
  );
}

export default App;