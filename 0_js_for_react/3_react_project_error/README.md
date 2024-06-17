# Hello World Example

This example demonstrates how to use Babel to transform JSX syntax into JavaScript and render it into the DOM using React.

## Theory

### React and ReactDOM

- **React**: A JavaScript library for building user interfaces. It allows you to create reusable UI components.
- **ReactDOM**: A library that provides DOM-specific methods to render React components into the DOM.

#### Why You Need ReactDOM

- `ReactDOM` is essential for rendering React components into the DOM.
- The `React` library provides the core functionality for creating components.
- The `ReactDOM` library provides the method `ReactDOM.render` to render components.

### JSX

- JSX stands for JavaScript XML.
- It allows you to write HTML-like syntax in JavaScript, making it easier to create and visualize UI components.
- JSX is not valid JavaScript; it needs to be transformed into JavaScript using tools like Babel.

## Setup

1. Ensure you have Node.js installed. If not, download and install it from [Node.js](https://nodejs.org/).

2. Navigate to the `jsx-babel-tutorial` directory and install Babel CLI, preset-env, and preset-react:
   ```sh
   npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react
   ```

## Compiling JSX

Compile the App.jsx file into compiled.js:

```sh
npx babel App.jsx --out-file compiled.js
```

## Running the Example

Open the index.html file in a web browser. You should see "Hello, world!" displayed on the page.

## The files

1. **.babelrc**: This configuration file tells Babel to use the `@babel/preset-env` and `@babel/preset-react` presets to compile modern JavaScript and JSX syntax into browser-compatible JavaScript.
2. **index.html**: The `script` tag now includes the `type="module"` attribute, which allows you to use ES modules in the browser.
3. **App.jsx**: This file imports `React` and `ReactDOM`, defines a simple React component, and renders it into the DOM.

## The error

You may encounter the following error in the browser console:

```javascript
Uncaught ReferenceError: require is not defined
```

This error occurs because the default Babel transformation for modules uses CommonJS syntax (require), which is not natively supported in the browser. The @babel/plugin-transform-modules-umd plugin transforms the module syntax into UMD format, which works in both the browser and Node.js environments, preventing this error.
This error occurs because the default Babel transformation for modules uses CommonJS syntax (require), which is not natively supported in the browser.
