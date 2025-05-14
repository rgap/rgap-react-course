// Example demonstrating the use of `return` with parentheses and the effects of Automatic Semicolon Insertion (ASI).

// Function with correct usage of `return` and parentheses on the same line
function addValues(a, b) {
  // Here, the `return` statement is followed by parentheses.
  // The parentheses group the expression (a + b), making it clear what is being returned.
  return a + b;
}

// Calling the function with values 5 and 10
console.log(addValues(5, 10)); // Outputs: 15

// Function that demonstrates the problem caused by ASI (Automatic Semicolon Insertion)
function wrongReturnExample(a, b) {
  // If you write `return` on one line and the expression on the next line,
  // JavaScript will automatically insert a semicolon after the `return` statement.
  // This causes the function to return `undefined`.
  return; // JavaScript inserts a semicolon here automatically.
}

// Calling the function will return `undefined` because of the ASI issue
console.log(wrongReturnExample(5, 10)); // Outputs: undefined

// Correct usage when you want to use parentheses on a new line
function correctNewLineReturn(a, b) {
  // When using parentheses on a new line, you must ensure the opening parenthesis is
  // directly after `return`, preventing ASI from inserting a semicolon.
  return (
    a + b // The grouped expression is properly evaluated and returned.
  );
}

// Calling the function returns the correct value
console.log(correctNewLineReturn(5, 10)); // Outputs: 15
