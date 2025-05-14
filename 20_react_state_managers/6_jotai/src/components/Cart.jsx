import { useAtom } from "jotai";
import { cartCountAtom } from "../store/atoms";

// The Cart component displays the cart count and provides buttons to add or remove items
const Cart = () => {
  const [cartCount, setCartCount] = useAtom(cartCountAtom);

  const addToCart = () => setCartCount(cartCount + 1);
  const removeFromCart = () => setCartCount(cartCount > 0 ? cartCount - 1 : 0);

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
