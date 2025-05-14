import { useState } from "react";

function VariableExample() {
  // 1. Declare a CONSTANT VARIABLE using 'const'
  const appName = "React Variable Example";

  // 2. Declare a NONCONSTANT VARIABLE using 'let' (can be reassigned)
  let greeting = "Hello, World!";

  // 3. Declare JSX VARIABLE (a variable to store JSX)
  const jsxVariable = (
    <div>
      {/* This is JSX stored in a variable */}
      <h3>This is some JSX stored in a variable!</h3>
    </div>
  );

  // 4. Declare a STATE VARIABLE using 'useState' (for managing dynamic data)
  const [count, setCount] = useState(0);

  // Function to update the state variable
  const incrementCount = () => {
    setCount(count + 1); // Update state
  };

  return (
    <div>
      <h1>{appName}</h1> {/* Using a constant variable */}
      <h2>{greeting}</h2> {/* Using a let variable */}
      <p>
        {/* Display the value of the state variable */}
        The current count is: {count}
      </p>
      {/* Render the JSX stored in the variable */}
      {jsxVariable}
      {/* Button to update the state variable */}
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}

export default VariableExample;
