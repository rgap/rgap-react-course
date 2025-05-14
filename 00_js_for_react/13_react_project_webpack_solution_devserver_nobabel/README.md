# Webpack and Babel with Configuration Inside Webpack Config

This project demonstrates how to set up a React application using Webpack and Babel, with the Babel configuration included directly inside the Webpack configuration file. This approach simplifies the setup by avoiding a separate `.babelrc` file.

## Project Structure

```bash
./
├── index.html
├── webpack.config.js
├── README.md
├── package.json
└── App.jsx
```

### `index.html`

This file serves as the entry point of the application. It loads the bundled JavaScript file (`bundle.js`) through the `<script>` tag.

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
    <script src="./bundle.js" type="module"></script>
  </body>
</html>
```

### `webpack.config.js`

This file contains both the Webpack and Babel configuration. It bundles JavaScript and JSX files and transpiles them using Babel. The Babel configuration (presets for modern JavaScript and JSX) is embedded within the Webpack configuration itself.

```javascript
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./App.jsx",
  output: {
    filename: "./bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname),
    compress: true,
    port: 3000,
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

The `package.json` file includes the necessary dependencies and scripts. The `start` script runs the Webpack development server, and the `build` script bundles the files using Webpack.

```json
{
  "scripts": {
    "start": "webpack serve --open",
    "build": "webpack"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@babel/cli": "^7.24.7",
    "@babel/core": "^7.24.7",
    "@babel/preset-env": "^7.24.7",
    "@babel/preset-react": "^7.24.7",
    "babel-loader": "^8.0.0",
    "webpack": "^5.95.0",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^5.1.0"
  }
}
```

## How to Run

1. **Install dependencies**:
   Run `npm install` to install the necessary dependencies for Webpack, Babel, and React.

2. **Start the development server**:
   Run the start script to launch the Webpack development server:

   ```bash
   npm start
   ```

3. **Open the application**:
   The development server should automatically open the application in your browser at `http://localhost:3000`.

4. **Expected Outcome**:
   The page should display the text "Hello, world!" without any issues, and the development server will automatically reload the app whenever changes are made.

## Key Points

- **Webpack**: Bundles JavaScript and JSX files, resolving module dependencies.
- **Babel**: Transpiles modern JavaScript and JSX into browser-compatible code. The Babel configuration is included inside the Webpack config file for simplicity.
- **Development Server**: The Webpack development server allows for hot reloading and easy testing during development.

## Notes

This project demonstrates how to set up a React application with Webpack, Babel, and a development server, using a single Webpack configuration file that includes both Webpack and Babel settings.
