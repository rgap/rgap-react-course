import React from "react";
import { CounterProvider } from "./CounterContext";
import { Display, Controls } from "./Components";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Custom Hooks for State & Dispatch</h1>

      {/* App just wraps the tree with the custom Provider */}
      <CounterProvider>
        <Display />
        <Controls />
      </CounterProvider>

      <div style={{ marginTop: "20px" }}>
        <h2>The Professional Pattern</h2>
        <p>In this lesson, we separated context into two parts:</p>
        <ul>
          <li><code>StateContext</code> for the data</li>
          <li><code>DispatchContext</code> for the actions</li>
        </ul>
        <p>We also created custom hooks: <code>useCounterState()</code> and <code>useCounterDispatch()</code>.</p>
        <p><strong>Open the console!</strong> Notice that when you click buttons, <code>Display</code> re-renders (because state changed), but <code>Controls</code> does NOT re-render (because dispatch never changes). Performance optimization achieved!</p>
      </div>
    </div>
  );
}

export default App;