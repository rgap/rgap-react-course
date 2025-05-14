import useCounter from "./useCounter";

function App() {
  // Using the custom hook
  const [count, increment] = useCounter();

  return (
    <div>
      <h1>Count: {count}</h1>
      {/* Button to increment the count */}
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
