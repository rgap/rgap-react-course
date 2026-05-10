import React from "react";

// A reducer is just a plain JavaScript function.
// It takes the current state and an action, and returns the new state.
// Let's explore this concept BEFORE using useReducer.

// This is a pure function. No React, no hooks.
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

function App() {
  // Let's test the reducer manually, without React.
  const initialState = { count: 0 };

  // Simulate dispatching actions:
  const state1 = counterReducer(initialState, { type: "INCREMENT" });
  const state2 = counterReducer(state1, { type: "INCREMENT" });
  const state3 = counterReducer(state2, { type: "DECREMENT" });
  const state4 = counterReducer(state3, { type: "RESET" });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>The Reducer Pattern</h1>
      <p>
        A reducer is a <strong>pure function</strong> that takes the current
        state and an action, and returns the new state.
      </p>

      <h2>Manual Simulation</h2>
      <table style={{ borderCollapse: "collapse", marginTop: "10px" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Step</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Action</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>0</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>Initial</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{JSON.stringify(initialState)}</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>1</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>INCREMENT</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{JSON.stringify(state1)}</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>2</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>INCREMENT</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{JSON.stringify(state2)}</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>3</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>DECREMENT</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{JSON.stringify(state3)}</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>4</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>RESET</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{JSON.stringify(state4)}</td>
          </tr>
        </tbody>
      </table>

      <div style={{ marginTop: "20px" }}>
        <h2>Key Idea</h2>
        <p>The reducer is <strong>pure</strong>: same input → same output, every time. No side effects.</p>
        <p>
          The <strong>action</strong> describes <em>what happened</em>.
          The <strong>reducer</strong> decides <em>how the state changes</em>.
        </p>
      </div>
    </div>
  );
}

export default App;