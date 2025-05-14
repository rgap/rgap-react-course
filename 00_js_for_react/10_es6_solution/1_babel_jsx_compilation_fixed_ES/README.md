# Babel and JSX Compilation Tutorial (Using Module Type with http-server)

This project demonstrates how to use Babel to transpile JSX and modern JavaScript. The project loads the compiled JavaScript using the `type="module"` attribute, with React and ReactDOM included from a CDN as global variables. Additionally, the project includes `http-server` to run a local server and avoid potential CORS issues when loading files directly from the file system.

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

- `@babel/preset-env` for modern JavaScript features.
- `@babel/preset-react` for JSX transformation.

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

### `index.html`

This file serves as the entry point of the application. It includes the necessary React and ReactDOM scripts from a CDN to ensure the compiled code renders properly. The `type="module"` attribute in the `<script>` tag loads `compiled.js`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello World</title>
    <!-- Include React and ReactDOM -->
    <script src="https://unpkg.com/react/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.development.js" crossorigin></script>
  </head>
  <body>
    <div id="root"></div>

    <!-- Load the compiled JavaScript -->
    <script type="module" src="compiled.js"></script>
  </body>
</html>
```

### `App.jsx`

This file contains the original JSX code for the `App` component. Since React and ReactDOM are included as global variables in the `index.html` file, there is no need to import them.

```javascript
// No need to import React or ReactDOM since they are global
const App = () => {
  return <h1>Hello, world!</h1>;
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

### `package.json`

The `package.json` file includes the necessary Babel dependencies for compiling modern JavaScript and JSX. It also includes `http-server` to serve the files locally over HTTP.

```json
{
  "dependencies": {
    "http-server": "^14.1.1"
  },
  "devDependencies": {
    "@babel/cli": "^7.24.7",
    "@babel/core": "^7.24.7",
    "@babel/preset-env": "^7.24.7",
    "@babel/preset-react": "^7.24.7"
  }
}
```

### `compiled.js`

This file contains the compiled JavaScript code. Since React and ReactDOM are globally available via the CDN, there is no need to import them here.

```javascript
"use strict";

// No need to import React or ReactDOM since they are global
var App = function App() {
  return /*#__PURE__*/ React.createElement("h1", null, "Hello, world!");
};

ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/ React.createElement(App, null));
```

## How to Run

1. **Compile the JSX code**:
   Run Babel to compile `App.jsx` into a JavaScript file:

   ```bash
   npx babel App.jsx --out-file compiled.js
   ```

2. **Install `http-server`**:
   Install `http-server` if you haven't already:

   ```bash
   npm install -g http-server
   ```

3. **Run the local server**:
   Start the local server:

   ```bash
   npx http-server
   ```

4. **Open `index.html`**:
   Open the `index.html` file in a browser at `http://localhost:8080` to view the rendered React component.

5. **Expected Outcome**:
   The page should display the text "Hello, world!" without any issues.

## Key Points

- **React and ReactDOM**: Both are now included from a CDN in the `index.html` file, ensuring the component renders correctly.
- **Babel**: Transpiles modern JavaScript and JSX into browser-compatible code.
- **Module Script Type**: Using `type="module"` allows the browser to load the JavaScript file as an ES module, which is another way to structure and load the script without relying on UMD.
- **http-server**: Provides a simple local server to avoid potential CORS issues when loading files from the file system.

## Notes

This project demonstrates how to use Babel to transpile JSX and modern JavaScript while using the `type="module"` attribute in the `<script>` tag and serving files locally using `http-server`.
