// Import the React library, which is necessary for creating React components.
import React from "react";

// Import the ReactDOM library, which is responsible for rendering React components to the DOM.
import ReactDOM from "react-dom/client";

// Import the App component, which is the main component of the application.
import App from "./App";

// Render the App component inside the root element.
// The 'createRoot' method initializes a React application inside a given DOM node, in this case, the element with the ID of "root".
ReactDOM.createRoot(document.getElementById("root")).render(
  // React.StrictMode is a wrapper component that helps with highlighting potential problems in an application.
  // It does not render any visible UI. It activates additional checks and warnings for its descendants.
  <React.StrictMode>
    {/* The App component is rendered inside React.StrictMode, which will ensure that it follows best practices and highlights any issues. */}
    <App />
  </React.StrictMode>
);
