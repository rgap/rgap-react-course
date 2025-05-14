import React from "react";

export default function App() {
  return React.createElement(
    "div",
    {
      id: "container",
      title: "This is a container",
    },
    React.createElement("h1", {}, "Welcome to React!") // Nested 'h1' inside 'div'
  );
}
