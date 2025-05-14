# Babel and JSX Compilation Tutorial (Issue: Nothing Displayed in Browser)

This is a continuation of the Babel and JSX compilation tutorial. In this version, although the setup seems correct, **nothing is displayed in the browser**.

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

This file serves as the entry point of the application. It includes a `div` with the `id` of `root` where the React component is rendered. It loads the `compiled.js` file, which contains the transpiled code.

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

## Issue

Even though the code has been transpiled and included in the `index.html` file, **nothing is displayed in the browser**. This indicates an unresolved issue, but no error messages are provided in the console.

## How to Run

1. **Compile the JSX code**:
   Run Babel to compile `App.jsx`:

   ```bash
   npx babel App.jsx --out-file compiled.js
   ```

2. **Open `index.html`**:
   Open the `index.html` file in a browser.

3. **Expected Outcome**:
   The page should display the text "Hello, world!", but currently, **nothing is shown**.

## Notes

This project demonstrates how to use Babel to transpile JSX and modern JavaScript, but an unresolved issue is preventing the content from being displayed in the browser.
