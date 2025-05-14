
# Basic React App (CORS Issue)

This project is a continuation of the basic React app that now separates the JSX code into an external `App.jsx` file. However, there is a known issue when running this project directly from the file system, resulting in the app not displaying as expected.

## Project Structure

```bash
./
├── index.html
└── App.jsx
```

### `index.html`

This file sets up the basic structure of the HTML document. It includes:

- React and ReactDOM from a CDN for rendering the app.
- Babel for transforming JSX directly in the browser.
- A `div` with the `id` of `root`, where the React app will be rendered.
- A script that loads `App.jsx` using Babel to transform the JSX.

### `App.jsx`

This file contains the JSX code for the React app. It defines a simple `App` component that renders a `h1` element with the message "Hello, world!".

The app is rendered using `ReactDOM.createRoot`, which is the newer API for rendering in React 18 and above.

### Known Issue: CORS Error

When running this project directly from your file system, you may encounter the following error in the browser's console:

```
Access to XMLHttpRequest at 'file://path-to-project/App.jsx' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted.
```

This error occurs because modern browsers enforce a **same-origin policy** for security reasons, and loading files via the `file://` protocol causes a Cross-Origin Resource Sharing (CORS) error.

## How to Run

1. Make sure the `index.html` and `App.jsx` are in the same directory.
2. Open `index.html` in your browser.
3. You may see a CORS error in the console, and the "Hello, world!" message may not appear due to this issue.

## Key Points

- **React**: A JavaScript library for building user interfaces.
- **ReactDOM**: Used for rendering React components to the DOM.
- **JSX**: A syntax extension for JavaScript that looks similar to HTML.
- **Babel**: A tool used to transform JSX into regular JavaScript.
- **CORS Issue**: Running this project from the file system causes a cross-origin error due to the `file://` protocol.

## CDN Libraries Used

- [React](https://unpkg.com/react/umd/react.development.js)
- [ReactDOM](https://unpkg.com/react-dom/umd/react-dom.development.js)
- [Babel](https://unpkg.com/@babel/standalone/babel.min.js)

## Notes

This setup is useful for quickly prototyping React applications, but the CORS issue needs to be addressed when running the project from the local file system.
