import React, { createContext, useReducer, useContext } from "react";

// 1. Reducer logic
const initialState = { count: 0 };
function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT": return { count: state.count + 1 };
    case "DECREMENT": return { count: state.count - 1 };
    default: return state;
  }
}

// 2. Create Context
const CounterContext = createContext();

// 3. Components that consume context directly!
// Notice they do NOT take 'state' or 'dispatch' as props.
function Button({ type, children }) {
  // Read dispatch from context
  const { dispatch } = useContext(CounterContext);
  return (
    <button onClick={() => dispatch({ type })} style={{ margin: "5px" }}>
      {children}
    </button>
  );
}

function Controls() {
  return (
    <div style={{ padding: "10px", border: "1px dashed gray", marginTop: "10px" }}>
      <p>Controls (No props!)</p>
      <Button type="INCREMENT">+ Increment</Button>
      <Button type="DECREMENT">- Decrement</Button>
    </div>
  );
}

function Display() {
  // Read state from context
  const { state } = useContext(CounterContext);
  return (
    <div style={{ padding: "10px", border: "1px dashed gray", marginTop: "10px" }}>
      <p>Display (No props!)</p>
      <h2>Count: {state.count}</h2>
    </div>
  );
}

function App() {
  // 4. Initialize useReducer in the top component
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>The Context + Reducer Pattern</h1>

      {/* 5. Provide BOTH state and dispatch through the context */}
      <CounterContext.Provider value={{ state, dispatch }}>
        <Display />
        <Controls />
      </CounterContext.Provider>

      <div style={{ marginTop: "20px" }}>
        <h2>The Solution</h2>
        <p>
          We wrapped the tree with <code>&lt;CounterContext.Provider value=&#123;&#123; state, dispatch &#125;&#125;&gt;</code>.
        </p>
        <p>
          Now, any component in the tree can call <code>useContext(CounterContext)</code> to get access to <code>state</code> or <code>dispatch</code>.
        </p>
        <p>No more prop drilling! Middlemen components like <code>Controls</code> and <code>Display</code> don't pass props anymore.</p>
      </div>
    </div>
  );
}

export default App;