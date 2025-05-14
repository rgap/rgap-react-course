# Basic React App (Solved CORS Issue)

This project is a continuation of the previous basic React app that solves the Cross-Origin Resource Sharing (CORS) issue by embedding JSX code directly into the HTML file. This eliminates the need to load external `.jsx` files, thus avoiding the CORS issue encountered when running the project from the file system.

## Project Structure

```bash
./
└── index.html
```

### `index.html`

This file includes:

- React and ReactDOM from a CDN for rendering the app.
- Babel for transforming JSX directly in the browser.
- A `div` with the `id` of `root`, where the React app will be rendered.
- Inline JSX code embedded within a `<script type="text/babel">` tag to avoid CORS issues by keeping everything in one HTML file.

### How This Solves the CORS Issue

In the previous version of this project, you might have seen a CORS error when trying to load `App.jsx` from the local file system due to the browser's security policy (same-origin policy). By inlining the JSX code directly in the `index.html` file, we avoid loading an external resource, which resolves the CORS issue.

## How to Run

1. Open `index.html` in your browser.
2. You should see the text "Hello, world!" displayed on the page without any CORS errors.

## Key Points

- **React**: A JavaScript library for building user interfaces.
- **ReactDOM**: Used for rendering React components to the DOM.
- **JSX**: A syntax extension for JavaScript that looks similar to HTML, which is inlined here to avoid external file loading.
- **Babel**: A tool used to transform JSX into regular JavaScript.
- **CORS Issue Solved**: The entire project is now contained within a single HTML file, eliminating the need for cross-origin requests.

## CDN Libraries Used

- [React](https://unpkg.com/react/umd/react.development.js)
- [ReactDOM](https://unpkg.com/react-dom/umd/react-dom.development.js)
- [Babel](https://unpkg.com/@babel/standalone/babel.min.js)

## Notes

This approach solves the CORS issue by keeping everything in one file and is useful for quickly prototyping or learning React without the need for setting up a server or build tools like Webpack.
