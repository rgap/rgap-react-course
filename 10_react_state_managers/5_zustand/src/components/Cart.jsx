import React from "react";
import { useStore } from "../store/useStore";

// The Cart component displays the cart count and provides buttons to add or remove items
const Cart = () => {
  const cartCount = useStore(state => state.cartCount);
  const addToCart = useStore(state => state.addToCart);
  const removeFromCart = useStore(state => state.removeFromCart);

  return (
    <div>
      <h2>Cart</h2>
      <p>Items in cart: {cartCount}</p>
      <button onClick={addToCart}>Add to Cart</button>
      <button onClick={removeFromCart}>Remove from Cart</button>
    </div>
  );
};

export default Cart;
