import React from "react";
import ReactDOM from "react-dom/client";

// Everything in one file
function App() {
  return (
    <div>
      <h1>Hello from All-in-One Index File!</h1>
      <p>Everything — imports, component, and rendering — lives in index.jsx.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
