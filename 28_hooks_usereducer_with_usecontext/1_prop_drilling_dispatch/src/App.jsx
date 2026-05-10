import React, { useReducer } from "react";

// Reducer logic
const initialState = { count: 0 };
function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Deeply nested component that needs to dispatch actions
function Button({ dispatch, type, children }) {
  return (
    <button onClick={() => dispatch({ type })} style={{ margin: "5px" }}>
      {children}
    </button>
  );
}

// Middleman component (doesn't use dispatch, just passes it down)
function Controls({ dispatch }) {
  return (
    <div style={{ padding: "10px", border: "1px dashed gray", marginTop: "10px" }}>
      <p>Controls (I just pass dispatch down)</p>
      <Button dispatch={dispatch} type="INCREMENT">+ Increment</Button>
      <Button dispatch={dispatch} type="DECREMENT">- Decrement</Button>
    </div>
  );
}

// Middleman component (doesn't use state, just passes it down)
function Display({ state }) {
  return (
    <div style={{ padding: "10px", border: "1px dashed gray", marginTop: "10px" }}>
      <p>Display (I just pass state down)</p>
      <h2>Count: {state.count}</h2>
    </div>
  );
}

function App() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Prop Drilling Dispatch</h1>
      
      <Display state={state} />
      <Controls dispatch={dispatch} />

      <div style={{ marginTop: "20px" }}>
        <h2>The Problem</h2>
        <p>
          Just like we had "prop drilling" with <code>useState</code> values, we now have prop drilling with <code>useReducer</code>.
        </p>
        <p>
          <code>Controls</code> doesn't care about the actions, but it must accept <code>dispatch</code> as a prop to pass it down to <code>Button</code>. 
        </p>
        <p>
          If our app grows deeply nested, passing <code>state</code> and <code>dispatch</code> everywhere becomes a nightmare!
        </p>
      </div>
    </div>
  );
}

export default App;