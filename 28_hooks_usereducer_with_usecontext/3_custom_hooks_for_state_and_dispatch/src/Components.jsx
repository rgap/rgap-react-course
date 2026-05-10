import React from "react";
import { useCounterState, useCounterDispatch } from "./CounterContext";

function Display() {
  // Only consumes state. Will re-render when count changes.
  const state = useCounterState();
  
  console.log("Display rendered");

  return (
    <div style={{ padding: "10px", border: "1px dashed gray", marginTop: "10px" }}>
      <h2>Count: {state.count}</h2>
    </div>
  );
}

function Controls() {
  // Only consumes dispatch. Will NOT re-render when count changes!
  // (Because dispatch is stable and lives in a separate context)
  const dispatch = useCounterDispatch();

  console.log("Controls rendered");

  return (
    <div style={{ padding: "10px", border: "1px dashed gray", marginTop: "10px" }}>
      <button onClick={() => dispatch({ type: "INCREMENT" })} style={{ marginRight: "10px" }}>
        + Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        - Decrement
      </button>
    </div>
  );
}

export { Display, Controls };
