# Babel and JSX Compilation Tutorial (Solution: React and ReactDOM Scripts)

This project is a continuation of the Babel and JSX compilation tutorial. In this version, the issue where nothing was displayed in the browser has been resolved by including React and ReactDOM from a CDN in the `index.html` file.

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
- `@babel/plugin-transform-modules-umd` to compile the code into the UMD (Universal Module Definition) format.

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": ["@babel/plugin-transform-modules-umd"]
}
```

### `index.html`

This file serves as the entry point of the application. It includes the necessary React and ReactDOM scripts from a CDN to ensure the compiled code renders properly. The compiled JavaScript is also loaded.

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
    <script src="compiled.js" type="text/javascript"></script>
  </body>
</html>
```

### `App.jsx`

This file contains the original JSX code for the `App` component.

```javascript
const App = () => {
  return <h1>Hello, world!</h1>;
};

// Make sure ReactDOM renders the component in the root element
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

### `package.json`

The `package.json` file includes the necessary Babel dependencies for compiling modern JavaScript, JSX, and transforming the code into UMD format.

```json
{
  "devDependencies": {
    "@babel/cli": "^7.25.7",
    "@babel/core": "^7.25.7",
    "@babel/plugin-transform-modules-umd": "^7.25.7",
    "@babel/preset-env": "^7.25.7",
    "@babel/preset-react": "^7.25.7"
  }
}
```

## How to Run

1. **Compile the JSX code**:
   Run Babel to compile `App.jsx` into UMD-compatible JavaScript:

   ```bash
   npx babel App.jsx --out-file compiled.js
   ```

2. **Open `index.html`**:
   Open the `index.html` file in a browser to view the rendered React component.

3. **Expected Outcome**:
   The page should display the text "Hello, world!" without any issues.

## Key Points

- **React and ReactDOM**: Both are now included from a CDN in the `index.html` file, ensuring the component renders correctly.
- **Babel**: Transpiles modern JavaScript and JSX into browser-compatible code.
- **UMD (Universal Module Definition)**: Ensures the JavaScript is compatible with different module loaders and environments, including browsers.

## Notes

This project demonstrates how to use Babel to transpile JSX and modern JavaScript while ensuring compatibility with React and ReactDOM. This solution resolves the issue of nothing being displayed in the browser.
