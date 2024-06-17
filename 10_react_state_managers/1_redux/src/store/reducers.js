import { combineReducers } from "redux";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./actions";

// Initial state for the cart
const initialState = {
  cartCount: 0,
};

// The cartReducer handles actions related to the cart state
function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      // Increment the cart count
      return { cartCount: state.cartCount + 1 };
    case REMOVE_FROM_CART:
      // Decrement the cart count if it's greater than zero
      return { cartCount: state.cartCount > 0 ? state.cartCount - 1 : 0 };
    default:
      // Return the current state if the action is not recognized
      return state;
  }
}

// combineReducers combines multiple reducers into a single reducing function
const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
