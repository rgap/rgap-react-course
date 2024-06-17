import { atom } from "recoil";

// Define an atom to represent the cart count state
export const cartCountState = atom({
  key: "cartCountState", // Unique key for the atom
  default: 0, // Default value
});
