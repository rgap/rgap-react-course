import React from 'react';

const MyComponent = () => {
  // ESLint warning for unused variable 'unusedVar'
  const unusedVar = 42;

  // No ESLint error for using double quotes
  const message = "Hello, world!";

  // ESLint will check for missing semicolons, correct JSX syntax, etc.
  return <div>{message}</div>;  // ESLint checks for correct JSX syntax and ensures a semicolon is used
};

export default MyComponent;
