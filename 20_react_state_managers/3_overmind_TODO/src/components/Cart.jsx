import { useActions, useAppState } from "../store";

// The Cart component displays the cart count and provides buttons to add or remove items
const Cart = () => {
  const state = useAppState();
  const actions = useActions();

  return (
    <div>
      <h2>Cart</h2>
      <p>Items in cart: {state.cartCount}</p>
      <button onClick={actions.addToCart}>Add to Cart</button>
      <button onClick={actions.removeFromCart}>Remove from Cart</button>
    </div>
  );
};

export default Cart;
