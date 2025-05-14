# Basic React App with Local Server

This project is a continuation of the basic React app that now introduces a simple Node.js server using the `http-server` package. This server helps avoid the Cross-Origin Resource Sharing (CORS) issue by serving the files over HTTP, allowing the external `App.jsx` file to be loaded without errors.

## Project Structure

```bash
./
├── index.html
├── README.md
├── package.json
└── App.jsx
```

### `index.html`

This file includes:

- React and ReactDOM from a CDN for rendering the app.
- Babel for transforming JSX directly in the browser.
- A `div` with the `id` of `root`, where the React app will be rendered.
- A script that loads `App.jsx` using Babel to transform the JSX.

### `App.jsx`

This file contains the JSX code for the React app. It defines a simple `App` component that renders a `h1` element with the message "Hello, world!". The app is rendered using `ReactDOM.createRoot()`.

### `package.json`

This file includes the `http-server` package as a dependency, which is used to serve the app locally over HTTP. This avoids CORS issues that occur when loading files directly from the file system.

## How to Run

1. Install the dependencies by running the following command in the project directory:

   ```bash
   npm install
   ```

2. Start the local server using `http-server`:

   ```bash
   npx http-server
   ```

3. Open the browser and navigate to the local server URL (usually `http://localhost:8080` by default).
4. You should see the text "Hello, world!" displayed on the page.

## Key Points

- **React**: A JavaScript library for building user interfaces.
- **ReactDOM**: Used for rendering React components to the DOM.
- **JSX**: A syntax extension for JavaScript that looks similar to HTML.
- **Babel**: A tool used to transform JSX into regular JavaScript.
- **http-server**: A simple, lightweight web server for serving files locally, which avoids CORS issues.

## CDN Libraries Used

- [React](https://unpkg.com/react/umd/react.development.js)
- [ReactDOM](https://unpkg.com/react-dom/umd/react-dom.development.js)
- [Babel](https://unpkg.com/@babel/standalone/babel.min.js)

## Notes

By using `http-server`, you can avoid the CORS issue that occurs when loading files directly from the local file system. This setup also makes it easier to prototype or work on small React applications.
