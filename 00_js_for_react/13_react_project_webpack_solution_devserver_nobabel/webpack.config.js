// webpack.config.js

const path = require("path");

module.exports = {
  mode: "development", // or 'production', depending on your use case

  // Entry point for the application
  entry: "./App.jsx",

  // Output configuration for the bundled file
  output: {
    filename: "./bundle.js", // Name of the output bundle file
    path: path.resolve(__dirname, "dist"), // Output directory, resolved to an absolute path
  },

  // Module configuration
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Regex pattern to match JavaScript/JSX files
        exclude: /node_modules/, // Exclude the node_modules directory from transpilation
        use: {
          loader: "babel-loader", // Use Babel loader to transpile JavaScript files
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  // Development server configuration
  devServer: {
    static: path.resolve(__dirname), // Serve from root where index.html is located
    compress: true, // Enable gzip compression
    port: 3000, // Port number for the server
  },
};

/*
Explanation:
- This file is the Webpack configuration file.
- `entry`: The entry point for the application. Webpack starts building the dependency graph from this file.
- `output`: Configuration for the output bundle.
  - `filename`: The name of the output bundle file (bundle.js).
  - `path`: The output directory for the bundle, resolved to an absolute path using the `path` module.
- `module`: Defines how different types of modules should be treated.
  - `rules`: An array of rules that specifies how to handle different file types.
    - Each rule is an object that describes how to process a specific type of file.
    - `test`: A regex pattern to match the file types (e.g., /\.js$/ matches JavaScript files).
    - `exclude`: Excludes the specified directory (e.g., node_modules) from being processed by the loader.
    - `use`: Specifies the loader to use for matching files (e.g., babel-loader for JavaScript files).
- The `path` module is a built-in Node.js module used to handle file and directory paths.
*/
