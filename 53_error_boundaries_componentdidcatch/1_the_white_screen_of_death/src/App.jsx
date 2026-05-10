import React, { useState } from "react";

// A perfectly fine component
function Header() {
  return <h2 style={{ backgroundColor: "#333", color: "white", padding: "15px" }}>Store Dashboard</h2>;
}

// A highly vulnerable component
function FragileWidget() {
  const [shouldCrash, setShouldCrash] = useState(false);

  // If this state is true, we intentionally cause a Javascript Type Error
  if (shouldCrash) {
    const user = null;
    // This will throw: "Cannot read properties of null (reading 'name')"
    return <p>{user.name}</p>;
  }

  return (
    <div style={{ border: "2px solid #2196f3", padding: "20px", marginTop: "20px" }}>
      <h3>Vulnerable Widget</h3>
      <p>This widget is prone to breaking.</p>
      <button 
        onClick={() => setShouldCrash(true)}
        style={{ padding: "10px", backgroundColor: "#f44336", color: "white", border: "none", cursor: "pointer" }}
      >
        Trigger Component Crash
      </button>
    </div>
  );
}

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>The White Screen of Death</h1>
      <p>React is incredibly rigid when it comes to errors. If a single component throws an error during rendering, React will unmount the entire application.</p>
      
      <Header />
      <FragileWidget />
      
      <p style={{ marginTop: "30px", color: "#666" }}>
        <strong>Task:</strong> Click the red button above. Notice how the Header and this text disappear completely, leaving only a blank white screen (or a red error overlay if you are running the Vite dev server).
      </p>
    </div>
  );
}

export default App;