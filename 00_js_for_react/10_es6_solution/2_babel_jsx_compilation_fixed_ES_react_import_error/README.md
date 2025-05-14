# Babel and JSX Compilation Tutorial (Issue: Broken Setup)

This project demonstrates an attempt to use Babel to transpile JSX and load React and ReactDOM via ES module imports. However, the setup does not work due to module-related issues when loading React and ReactDOM in the browser.

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

This file configures Babel to use:

- `@babel/preset-env` for modern JavaScript features, but with `"modules": false` to prevent Babel from transforming ES modules.
- `@babel/preset-react` for JSX transformation.

```json
{
  "presets": [["@babel/preset-env", { "modules": false }], "@babel/preset-react"]
}
```

### `index.html`

This file serves as the entry point of the application. It attempts to load the compiled JavaScript file (`compiled.js`) as an ES module.

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

    <!-- Load the compiled JavaScript as an ES module -->
    <script type="module" src="compiled.js"></script>
  </body>
</html>
```

### `App.jsx`

This file contains the JSX code for the `App` component. React and ReactDOM are imported using ES module syntax.

```javascript
import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return <h1>Hello, world!</h1>;
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

### `compiled.js`

This file contains the compiled JavaScript code, where React and ReactDOM are imported as ES modules.

```javascript
// Import React and ReactDOM from the CDN (using ES modules)
import React from "react";
import ReactDOM from "react-dom";

var App = function App() {
  return /*#__PURE__*/ React.createElement("h1", null, "Hello, world!");
};

ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/ React.createElement(App, null));
```

### `package.json`

The `package.json` file includes the necessary Babel dependencies for compiling modern JavaScript and JSX. It also includes React and ReactDOM as project dependencies.

```json
{
  "dependencies": {
    "http-server": "^14.1.1",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@babel/cli": "^7.24.7",
    "@babel/core": "^7.24.7",
    "@babel/preset-env": "^7.24.7",
    "@babel/preset-react": "^7.24.7"
  }
}
```

## Why This Setup Doesn't Work

### 1. **ES Module Imports in the Browser**:

Although the `compiled.js` file is loaded as an ES module (`type="module"`), the imports for React and ReactDOM are not working as expected. This happens because React and ReactDOM are typically bundled for browser use or served through a CDN. When using ES module imports directly in the browser, React and ReactDOM need to be specifically bundled for ES modules, which isn't happening here.

### 2. **React and ReactDOM Should Be Globally Available**:

In this setup, React and ReactDOM are being imported as ES modules from the project dependencies. However, since they are usually included as global variables when loaded from a CDN, this conflict causes the issue. The current approach of importing React and ReactDOM as ES modules requires that the modules be compatible with the browser's native ES module system, which they are not in this case.

### 3. **Modules Configuration in Babel**:

The `modules": false` option in the Babel configuration prevents Babel from transforming the module syntax. However, this also means the project depends on the browser's ability to handle ES modules natively, which isn't happening correctly with React and ReactDOM in this setup.

## How to Run (But It Won't Work)

1. **Compile the JSX code**:
   Run Babel to compile `App.jsx` into a JavaScript file:

   ```bash
   npx babel App.jsx --out-file compiled.js
   ```

2. **Run the local server**:
   Start the local server:

   ```bash
   npx http-server
   ```

3. **Open `index.html`**:
   Open the `index.html` file in a browser at `http://localhost:8080`. The page won't render the React component due to the issues explained above.

## Key Points

- **React and ReactDOM Imports**: Importing React and ReactDOM as ES modules is not compatible with this setup. React and ReactDOM are better served through global variables via CDN or bundled for browser use.
- **ES Modules**: The `type="module"` attribute in the `<script>` tag attempts to load `compiled.js` as an ES module, but it fails to handle React and ReactDOM imports.
- **Babel Modules Configuration**: The `"modules": false` setting leaves module transformation to the browser, but in this case, the browser fails to handle React and ReactDOM as ES modules.

## Notes

This project illustrates the challenges of using React and ReactDOM as ES modules in a browser environment without proper bundling or global variable setup. To fix this, you could either load React and ReactDOM from a CDN as global variables or bundle the project using a tool like Webpack to handle the module system correctly.
