import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Alice");

  // This effect depends on BOTH 'count' and 'name'
  useEffect(() => {
    console.log(`Effect ran! Count is ${count}, Name is ${name}`);
    
    // Optional cleanup
    return () => {
      console.log("Cleanup ran");
    };
  }, [count, name]); // Multiple dependencies in the array

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Multiple Dependencies</h1>
      <p>Open the console to see when the effect runs.</p>
      
      <div style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ccc" }}>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(c => c + 1)}>
          Increment Count
        </button>
      </div>

      <div style={{ padding: "10px", border: "1px solid #ccc" }}>
        <h2>Name: {name}</h2>
        <button onClick={() => setName("Alice")}>Set Name to Alice</button>
        <button onClick={() => setName("Bob")}>Set Name to Bob</button>
        <button onClick={() => setName("Charlie")}>Set Name to Charlie</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Rules to observe:</h3>
        <ul>
          <li>The effect runs <strong>once</strong> on the initial mount.</li>
          <li>It runs again if you change the count.</li>
          <li>It runs again if you change the name.</li>
          <li>It does <strong>NOT</strong> run if you click a button that sets the state to the exact same value (e.g., clicking "Set Name to Alice" when it's already Alice).</li>
        </ul>
      </div>
    </div>
  );
}

export default App;