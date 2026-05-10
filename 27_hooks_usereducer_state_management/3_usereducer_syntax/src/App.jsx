import React, { useReducer } from "react";

// 1. Define the initial state
const initialState = { count: 0 };

// 2. Define the reducer function (outside the component)
function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    case "SET":
      return { count: action.payload };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

function App() {
  // 3. Call useReducer with the reducer and initial state.
  //    It returns [state, dispatch], similar to [state, setState] from useState.
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>useReducer Syntax</h1>

      <h2 style={{ fontSize: "48px", fontFamily: "monospace" }}>{state.count}</h2>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {/* 4. Call dispatch with an action object */}
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+ Increment</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>- Decrement</button>
        <button onClick={() => dispatch({ type: "RESET" })}>↺ Reset</button>
        <button onClick={() => dispatch({ type: "SET", payload: 100 })}>Set to 100</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h2>The API</h2>
        <pre style={{ backgroundColor: "#f5f5f5", padding: "10px" }}>
{`const [state, dispatch] = useReducer(reducer, initialState);

// state    → the current state object
// dispatch → a function to send actions to the reducer`}
        </pre>

        <h2>How It Works</h2>
        <ol>
          <li>You call <code>dispatch(&#123; type: "INCREMENT" &#125;)</code>.</li>
          <li>React calls <code>counterReducer(currentState, action)</code>.</li>
          <li>The reducer returns the new state.</li>
          <li>React updates the state and re-renders the component.</li>
        </ol>
      </div>
    </div>
  );
}

export default App;