// Import the 'path' module, which is a core Node.js module for working with file and directory paths.
const path = require("path");

// Import the 'HtmlWebpackPlugin', a plugin that simplifies the creation of HTML files to serve your bundles.
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
  // Define the plugins to be used by Webpack.
  plugins: [
    // Instantiate 'HtmlWebpackPlugin' with an options object.
    new HtmlWebpackPlugin({
      // Specify the template HTML file to be used as a base.
      template: "./index.html",
    }),
    /* 
      HtmlWebpackPlugin is a plugin that simplifies the creation of HTML files to serve your bundles.
      This plugin generates an HTML file, injects the output bundles, and writes this file to the output directory.
      The 'template' option specifies the path to the template HTML file. Webpack will use this template to generate
      the final HTML file, including references to the generated bundles (e.g., JavaScript and CSS files).
    */
  ],

  // Development server configuration
  devServer: {
    contentBase: path.join(__dirname, "dist"), // Use contentBase for Webpack Dev Server v3
    compress: true, // Enable gzip compression
    port: 3000, // Port number for the server
  },
};
