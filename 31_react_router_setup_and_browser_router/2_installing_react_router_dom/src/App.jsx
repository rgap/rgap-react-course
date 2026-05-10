import React from "react";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Installing React Router</h1>
      
      <p>
        React Router is a third-party library. It does not come built into React.
      </p>

      <h2>1. The Package Name</h2>
      <p>
        The package is called <strong>react-router-dom</strong>.
      </p>
      <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
        npm install react-router-dom
      </pre>

      <h2>2. Why "dom"?</h2>
      <p>
        There are two main packages:
      </p>
      <ul>
        <li><code>react-router</code> (the core logic)</li>
        <li><code>react-router-dom</code> (bindings specifically for the web browser)</li>
      </ul>
      <p>
        If you were building a React Native mobile app, you would use <code>react-router-native</code>. 
        Since we are building for the web, we use <code>react-router-dom</code>.
      </p>
      
      <p style={{ marginTop: "20px", color: "green", fontWeight: "bold" }}>
        ✅ I have already run `npm install react-router-dom` in this folder!
      </p>
    </div>
  );
}

export default App;