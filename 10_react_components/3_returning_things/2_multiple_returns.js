// Function that returns multiple values using an array
function returnMultipleValues(a, b) {
  // Returning an array allows you to return multiple values at once.
  // Here we return both `a` and `b` together in an array.
  return [a, b];
}

// Calling the function will return an array with both values
console.log(returnMultipleValues(5, 10)); // Outputs: [5, 10]

// Function that returns multiple values using an object
function returnMultipleValuesObject(a, b) {
  // Returning an object can provide more context to the returned values.
  // We return the values with keys for better readability.
  return {
    firstValue: a, // First value associated with a descriptive key
    secondValue: b, // Second value associated with another key
  };
}

// Calling the function will return an object with both values
console.log(returnMultipleValuesObject(5, 10)); // Outputs: { firstValue: 5, secondValue: 10 }
