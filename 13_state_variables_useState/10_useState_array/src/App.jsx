import { useState } from "react";

function App() {
  // State to manage an array of numbers
  const [numbers, setNumbers] = useState([1, 2, 3]);

  // Function to add a new number to the array
  const addNumber = () => {
    setNumbers([...numbers, numbers.length + 1]); // Add the next number to the array
  };

  return (
    <div>
      <h1>Numbers List</h1>

      {/* Display the list of numbers */}
      <ul>
        {numbers.map((number, index) => (
          // key is required for each list item to help React identify each item
          // React uses the key to keep track of the items and update them efficiently
          <li key={index}>{number}</li>
        ))}
      </ul>

      {/* Button to add a number */}
      <button onClick={addNumber}>Add Number</button>
    </div>
  );
}

export default App;
