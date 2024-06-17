// Define action types as constants
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

// Action creator for adding an item to the cart
export function addToCart() {
  return { type: ADD_TO_CART };
}

// Action creator for removing an item from the cart
export function removeFromCart() {
  return { type: REMOVE_FROM_CART };
}
