// Define the actions that modify the state
export const actions = {
  addToCart({ state }) {
    state.cartCount += 1;
  },
  removeFromCart({ state }) {
    if (state.cartCount > 0) {
      state.cartCount -= 1;
    }
  },
};
