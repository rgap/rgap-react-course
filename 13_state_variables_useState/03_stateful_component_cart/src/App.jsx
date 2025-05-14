import { useState } from "react";

// Cart component managing the quantity of a single product
function Cart() {
  // Initialize product quantity state to 0
  const [quantity, setQuantity] = useState(0);

  // Function to increment the product quantity
  const incrementQuantity = () => {
    setQuantity(quantity + 1); // Updates the quantity
  };

  return (
    <div>
      <h1>Product Quantity: {quantity}</h1>
      <button onClick={incrementQuantity}>Add to Cart</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Cart />
    </div>
  );
}

export default App;
