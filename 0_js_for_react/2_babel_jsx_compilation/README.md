# Babel Tutorial

This tutorial covers examples of using Babel to transform modern JavaScript (ES6+) features into backwards-compatible JavaScript. It includes examples ranging from basic to advanced usage, as well as an example using JSX with React.

## Steps to Compile a script with babel

1.  **Initialize the Project**:
    Run the following command to create a `package.json` file:

    ```sh
    npm init -y
    Install Babel Packages:
    Install Babel CLI and the preset for ES2015 by running the following command:
    ```

2.  **Install Babel Packages:**
    Install Babel CLI, the preset for ES2015, and the preset for React by running the following command:

    ```sh
        npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react
    ```

3.  **Create .babelrc File:**
    Create a file named .babelrc in the root directory of your project and add the following content:

    ```json
    {
      "presets": ["@babel/preset-env"]
    }
    ```

    Presets are collections of plugins that allow you to use specific sets of features in your code. The most common preset is @babel/preset-env, which allows you to use the latest JavaScript features without worrying about the target environment's compatibility.

4.  **Compile the Code:**
    Run the Babel command to compile script.js to script-compiled.js:

    ```sh
    npx babel script.js --out-file script-compiled.js
    ```
