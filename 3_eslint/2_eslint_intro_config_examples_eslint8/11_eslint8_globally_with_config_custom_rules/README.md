# ESLint Basic Setup

This will display errors in VS Code.

For VS Code to show ESLint errors and warnings, you need to have an ESLint configuration file (.eslintrc.json) in your project directory.

## Step 1: Install ESLint Globally

First, install ESLint globally on your system using npm:

```bash
npm install eslint@8
```

## Step 2: Create a JavaScript File

Create a simple JavaScript file called `example.js`.

## Step 3: ESLint config file

## What This Configuration Can Do:

- **Environment Recognition:** It can recognize specific JavaScript environments (e.g., ES6, Node, browser), reducing false positives for global variables and syntax specific to those environments.
- **Undeclared Variable Errors:** It can show errors for variables that are used without being declared.
- **Unused Variable Warnings:** It can show warnings or errors for variables that are declared but never used.
- **Console Usage Warnings:** It can show warnings for the use of console.log or other console methods.
- **Coding Style Violations:** It can enforce or display coding style rules, such as indentation, quote style, or spacing.
- **Deprecated Syntax:** It can warn you about deprecated or discouraged JavaScript features.
- **Best Practices:** It can enforce or display rules related to best practices, such as preventing the use of console.log.
- **Potential Errors:** It can catch potential errors like accidental assignment in conditions (e.g., if (x = 10) instead of if (x == 10)).
- **Custom Rules:** It can enforce custom rules or plugins that you might want to apply to your codebase.

## What This Configuration Cannot Do:

- **Complexity and Best Practice Violations:** It will not enforce rules related to code complexity, such as cyclomatic complexity, or best practices beyond undeclared and unused variables.
- **ESLint Recommended Rules:** It will not enforce the default recommended rules from ESLint, which cover a broader range of common issues and best practices.
