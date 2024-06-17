import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../store/actions";

// The Cart component displays the cart count and provides buttons to add or remove items
const Cart = ({ cartCount, addToCart, removeFromCart }) => (
  <div>
    <h2>Cart</h2>
    <p>Items in cart: {cartCount}</p>
    <button onClick={addToCart}>Add to Cart</button>
    <button onClick={removeFromCart}>Remove from Cart</button>
  </div>
);

// mapStateToProps maps the Redux state to the component's props
const mapStateToProps = state => ({
  cartCount: state.cart.cartCount,
});

// mapDispatchToProps maps the dispatch actions to the component's props
const mapDispatchToProps = {
  addToCart,
  removeFromCart,
};

// connect is a higher-order component that connects the Cart component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
