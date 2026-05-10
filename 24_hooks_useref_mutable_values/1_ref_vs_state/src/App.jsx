import React, { useState, useRef } from "react";

function App() {
  // STATE: changing this triggers a re-render
  const [stateCount, setStateCount] = useState(0);

  // REF: changing this does NOT trigger a re-render
  const refCount = useRef(0);

  function incrementState() {
    setStateCount((prev) => prev + 1);
    console.log("State updated! Component will re-render.");
  }

  function incrementRef() {
    refCount.current = refCount.current + 1;
    console.log(`Ref updated to ${refCount.current}. NO re-render!`);
  }

  console.log("🔄 Component rendered!");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Ref vs State</h1>
      <p>Open the console to see which updates cause re-renders.</p>

      <div style={{ display: "flex", gap: "40px", marginTop: "20px" }}>
        <div style={{ border: "2px solid blue", padding: "20px" }}>
          <h2>useState</h2>
          <p>Value on screen: <strong>{stateCount}</strong></p>
          <button onClick={incrementState}>Increment State</button>
          <p style={{ color: "blue" }}>✅ Triggers re-render</p>
          <p style={{ color: "blue" }}>✅ Shows new value on screen</p>
        </div>

        <div style={{ border: "2px solid orange", padding: "20px" }}>
          <h2>useRef</h2>
          <p>Value on screen: <strong>{refCount.current}</strong></p>
          <button onClick={incrementRef}>Increment Ref</button>
          <p style={{ color: "orange" }}>❌ Does NOT trigger re-render</p>
          <p style={{ color: "orange" }}>❌ Screen does NOT update</p>
          <p style={{ fontSize: "12px" }}>
            (Click "Increment State" to force a re-render and see the ref value update on screen)
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;