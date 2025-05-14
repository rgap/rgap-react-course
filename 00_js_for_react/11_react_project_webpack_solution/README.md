# Webpack and Babel Setup (Fixed Project)

This project builds upon the previous broken setup and fixes the issues by using Webpack to bundle the JavaScript and JSX files, allowing React and ReactDOM to be imported and used correctly. Babel is used to transpile modern JavaScript and JSX syntax into browser-compatible code.

## Project Structure

```bash
./
├── .babelrc
├── index.html
├── webpack.config.js
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

This file serves as the entry point of the application. The bundled JavaScript file (`bundle.js`) is loaded through the `<script>` tag.

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

    <script src="dist/bundle.js" type="module"></script>
  </body>
</html>
```

### `webpack.config.js`

This file contains the Webpack configuration. It defines the entry point (`App.jsx`), output file (`bundle.js`), and rules for processing JavaScript and JSX files using Babel.

```javascript
const path = require("path");

module.exports = {
  mode: "development", // or 'production', depending on your use case
  entry: "./App.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
```

### `App.jsx`

This file contains the React component code, which is bundled using Webpack and transpiled by Babel.

```javascript
import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return <h1>Hello, world!</h1>;
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

### `package.json`

The `package.json` file includes the necessary dependencies and scripts. The `webpack` script bundles the files using Webpack, and Babel is used to transpile the JavaScript and JSX files.

```json
{
  "scripts": {
    "build": "webpack"
  },
  "dependencies": {
    "http-server": "^14.1.1",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@babel/cli": "^7.24.7",
    "@babel/core": "^7.24.7",
    "@babel/preset-env": "^7.24.7",
    "@babel/preset-react": "^7.24.7",
    "babel-loader": "^8.0.0",
    "webpack": "^5.0.0",
    "webpack-cli": "^4.0.0"
  }
}
```

## How to Run

1. **Install dependencies**:
   Run `npm install` to install the necessary dependencies for Webpack, Babel, and React.

2. **Compile the bundle**:
   Run the build script to bundle the files:

   ```bash
   npm run build
   ```

3. **Run the local server**:
   Start the local server:

   ```bash
   npx http-server
   ```

4. **Open `index.html`**:
   Open the `index.html` file in a browser at `http://localhost:8080` to view the rendered React component.

5. **Expected Outcome**:
   The page should display the text "Hello, world!" without any issues, and the application is now bundled correctly using Webpack.

## Key Points

- **Webpack**: Bundles JavaScript files and dependencies, resolving the module issues encountered in the previous setup.
- **Babel**: Transpiles modern JavaScript and JSX into browser-compatible code.
- **React and ReactDOM**: Properly bundled and used in the application, fixing the previous module-related issues.

## Notes

This project demonstrates how to correctly bundle a React application using Webpack and Babel, fixing the issues related to module imports and ensuring compatibility with browser environments.
