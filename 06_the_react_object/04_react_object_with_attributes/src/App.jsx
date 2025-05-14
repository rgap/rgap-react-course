import React from "react";

export default function App() {
  // React.createElement creates a 'div' element
  return React.createElement(
    "div",
    {
      id: "container",
      title: "This is a container",
    },
    "Hello, React!" // Child/content of the div element
  );
}
