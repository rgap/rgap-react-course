import { useState } from "react";

// A simple custom hook for managing a counter
function useCounter() {
  const [count, setCount] = useState(0);

  // Increment the count by 1
  const increment = () => {
    setCount(count + 1);
  };

  return [count, increment];
}

export default useCounter;
