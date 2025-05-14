# Babel and JSX Compilation Tutorial (Issue: Nothing Displayed in Browser)

This is a continuation of the Babel and JSX compilation tutorial. In this version, the project includes an `index.html` file that attempts to load and display the React component. However, when running the project, **nothing is displayed in the browser**.

## Project Structure

```bash
./
├── .babelrc
├── index.html
├── compiled.js
├── README.md
├── package.json
└── App.jsx
```

### `.babelrc`

This file configures Babel to use the `@babel/preset-env` for modern JavaScript features and `@babel/preset-react` for JSX transformation.

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

### `index.html`

This file serves as the entry point of the application. It includes a `div` with the `id` of `root` where the React component should be rendered. It also attempts to load the `App.jsx` script.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello World</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="App.jsx" type="text/javascript"></script>
  </body>
</html>
```

### `compiled.js`

This file contains the compiled JavaScript code that has been transpiled by Babel from `App.jsx` into backwards-compatible JavaScript.

```javascript
"use strict";

var App = function App() {
  return /*#__PURE__*/ React.createElement("h1", null, "Hello, world!");
};
```

### `App.jsx`

This file contains the original JSX code for the `App` component.

```javascript
const App = () => {
  return <h1>Hello, world!</h1>;
};
```

### `package.json`

The `package.json` file includes the necessary Babel dependencies for compiling modern JavaScript and JSX into browser-compatible code.

```json
{
  "devDependencies": {
    "@babel/cli": "^7.24.7",
    "@babel/core": "^7.24.7",
    "@babel/preset-env": "^7.24.7",
    "@babel/preset-react": "^7.24.7"
  }
}
```

## Issue

When opening the `index.html` file in a browser, nothing is displayed. There may be an issue related to the way the files are loaded or compiled, but no error messages are given directly in the browser.

## How to Run

1. **Compile the JSX code**:
   Run Babel to compile `App.jsx` into browser-compatible JavaScript:

   ```bash
   npx babel App.jsx --out-file compiled.js
   ```

2. **Open `index.html`**:
   Open the `index.html` file in a browser to view the rendered React component.
3. **Expected Outcome**:
   The page should display the text "Hello, world!", but currently, **nothing is shown**.

## Notes

This project continues to demonstrate how to use Babel for compiling modern JavaScript and JSX, but there is an unresolved issue causing the React component not to display.
