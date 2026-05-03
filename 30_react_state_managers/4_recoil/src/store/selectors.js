import { selector } from "recoil";
import { cartCountState } from "./atoms";

// Define a selector to compute derived state based on the cart count
export const cartTotalState = selector({
  key: "cartTotalState", // Unique key for the selector
  get: ({ get }) => {
    const cartCount = get(cartCountState);
    return cartCount * 10; // Assuming each item costs 10 units
  },
});
