import React from "react";

function App() {
  const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

  return (
    <div>
      <h1>List of Fruits (With Keys)</h1>
      <p>The console warning is gone because we added keys.</p>
      <ul>
        {fruits.map((fruit, index) => {
          // Using the string itself as a key if it's unique, or the index as a last resort.
          // In this case, fruit names are unique so they make good keys!
          return <li key={fruit}>{fruit}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
