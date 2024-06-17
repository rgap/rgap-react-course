import { observer } from "mobx-react";
import React from "react";

// The Cart component displays the cart count and provides buttons to add or remove items
const Cart = observer(({ store }) => (
  <div>
    <h2>Cart</h2>
    <p>Items in cart: {store.cartCount}</p>
    <button onClick={store.addToCart}>Add to Cart</button>
    <button onClick={store.removeFromCart}>Remove from Cart</button>
  </div>
));

export default Cart;
