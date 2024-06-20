// Environment Recognition Error
// This might cause an error because ESLint doesn't recognize the specific environment.
// In ES6, 'let' and 'const' are standard.
let someVar = "Hello, World!";
const anotherVar = 42;

// Undeclared Variable Error
// ESLint should catch 'undeclaredVar' as being used without declaration.
undeclaredVar = "I am not declared";

// Unused Variable Warning
// 'unusedVar' is declared but never used.
let unusedVar = "I am declared but never used";

// Console Usage Warning
// ESLint should warn about the use of 'console.log'.
console.log("This is a console log");

// Coding Style Violation
// Mixed spaces and tabs, incorrect indentation, and inconsistent quote style.
let styleViolation = "This should be a single quote";

// Deprecated Syntax
// Using 'var' instead of 'let' or 'const'.
let deprecatedSyntax = "Deprecated syntax";

// Best Practices
// 'console.log' should be discouraged as per best practices.
console.log("Best practice violation");

// Potential Error
// Accidental assignment in condition.
if ((someVar = anotherVar)) {
  console.log("This is an accidental assignment in condition");
}

// Custom Rules
// Custom rules might be violated here if they were set, such as function naming conventions.
function my_function() {
  console.log("Custom rule violation");
}

// Complexity and Best Practice Violations
// Complex function without enforcing cyclomatic complexity.
function complexFunction(a, b, c) {
  if (a > b) {
    if (b > c) {
      return a + b + c;
    }
  } else {
    return a * b * c;
  }
}

// ESLint Recommended Rules
// Various issues that might be caught by default recommended ESLint rules.
let eslintRecommendedRules = "Default rules might flag this";
