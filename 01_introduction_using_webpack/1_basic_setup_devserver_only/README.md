# Basic React App with Webpack and Babel

This project is a simple React setup using Webpack and Babel. It follows a common React project structure, with separate folders for source files, and uses `webpack-dev-server` for development.

## Project Structure

```bash
./
├── index.html
├── webpack.config.js
├── package.json
└── src/
    ├── main.js
    └── App.js
```

### `index.html`

This file serves as the main entry point for the application. It contains the root `div` where the React app will be mounted, and it includes a reference to the bundled JavaScript file.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Basic React App</title>
  </head>
  <body>
    <div id="root"></div>
    <!-- Root element where React will mount the app -->
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

### `webpack.config.js`

This file contains the Webpack configuration, responsible for bundling JavaScript and JSX files and injecting them into the HTML template. It also sets up the development server using `webpack-dev-server`.

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./src/main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
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
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  devServer: {
    static: path.resolve(__dirname),
    compress: true,
    port: 3000,
  },
};
```

### `package.json`

This file contains the project dependencies and scripts for development and production. It includes React, ReactDOM, Webpack, Babel, and related plugins.

```json
{
  "name": "basic-setup",
  "version": "1.0.0",
  "scripts": {
    "dev": "webpack serve --mode development --open",
    "build": "webpack --mode production"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@babel/core": "^7.24.7",
    "@babel/preset-env": "^7.24.7",
    "@babel/preset-react": "^7.24.7",
    "babel-loader": "^8.0.0",
    "webpack": "^5.95.0",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^5.1.0",
    "html-webpack-plugin": "^5.3.1"
  }
}
```

### `src/main.js`

This file contains the main entry point for the React application. It imports React and ReactDOM, and renders the `App` component into the DOM.

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### `src/App.js`

This file defines the main React component of the application. It is a simple functional component that returns a greeting message.

```javascript
import React from "react";

export default function App() {
  return <h1>Hello, React!</h1>;
}
```

## How to Run

1. **Install dependencies**:
   Run `npm install` to install the necessary dependencies for Webpack, Babel, and React.

2. **Start the development server**:
   Run the `dev` script to launch the Webpack development server:

   ```bash
   npm run dev
   ```

3. **Open the application**:
   The development server should automatically open the application in your browser at `http://localhost:3000`.

4. **Build for production**:
   To build the project for production, run the `build` script:

   ```bash
   npm run build
   ```

5. **Expected Outcome**:
   The page should display the text "Hello, React!" without any issues, and the development server will automatically reload the app whenever changes are made.

## Key Points

- **Webpack**: Bundles JavaScript and JSX files, resolving module dependencies, and simplifies the development process with hot reloading.
- **Babel**: Transpiles modern JavaScript and JSX into browser-compatible code.
- **React**: Simple, functional component structure, with JSX for creating user interfaces.

## Notes

This project demonstrates a basic React setup using Webpack and Babel, following a typical structure seen in modern React applications.
