import React from "react";

function App() {
  const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

  return (
    <div>
      <h1>List of Fruits (Without Keys)</h1>
      <p>Open the console to see the React warning about missing keys!</p>
      <ul>
        {fruits.map((fruit) => {
          return <li>{fruit}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
