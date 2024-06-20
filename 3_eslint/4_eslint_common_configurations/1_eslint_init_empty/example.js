// example.js

import { add } from "./utils/math.js"; // No ESLint error for using ES6 module import

// This variable is intentionally unused to test the "no-unused-vars" rule
const unusedVar = 42; // ESLint warning: 'unusedVar' is assigned a value but never used (no-unused-vars)

console.log("The sum of 2 and 3 is:", add(2, 3)); // No ESLint error due to "no-console": ["off"]

// This will test the "quotes" rule and "semi" rule
const message = "Hello, world!"; // ESLint error if double quotes are used instead of single
console.log(message); // No ESLint error due to "no-console": ["off"]

// This will test the "indent" rule
if (true) {
  console.log("This line is indented with 2 spaces"); // ESLint error if not indented with 2 spaces
}

// This will test the "linebreak-style" rule
console.log("This script is using unix style line breaks"); // ESLint error if line breaks are not Unix style
