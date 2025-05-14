import { useState } from "react";

// This Counter component now manages its own state using the useState HOOK.
function Counter() {
  // Initializing 'count' to 0, and setCount is the function to update it.
  const [count, setCount] = useState(0);

  // Function to increment the count value by 1.
  const incrementCount = () => {
    setCount(count + 1); // Updates the state and triggers a re-render.
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

// Stateful Component: The Counter component manages its own state.
// It does not rely on the parent for data.

// Dynamic Content: The 'count' value is dynamic and changes based on user interaction.
// The value is updated when the button is clicked, and React re-renders the component automatically.

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
