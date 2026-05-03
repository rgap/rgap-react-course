import { makeAutoObservable } from "mobx";

// The CartStore class manages the state of the cart and provides actions to modify it
class CartStore {
  cartCount = 0;

  constructor() {
    // makeAutoObservable makes the state and actions observable and automatically binds them
    makeAutoObservable(this);
  }

  // Action to add an item to the cart
  addToCart = () => {
    this.cartCount += 1;
  };

  // Action to remove an item from the cart
  removeFromCart = () => {
    if (this.cartCount > 0) {
      this.cartCount -= 1;
    }
  };
}

// Create an instance of the CartStore
const cartStore = new CartStore();
export default cartStore;
