// Importing the 'React' object from the 'react' library.
// In modern React (17+), importing React is not always required when using JSX,
// but it's necessary when using functions like 'createElement' directly.
import React from "react";

export default function App() {
  // 'React.createElement()' is a function used to create a React element manually,
  // instead of using JSX syntax. It allows you to define the element structure directly.
  // The 'createElement' function takes three main arguments:

  // 1st argument: The type of the HTML element you want to create (here, it's "div").
  // This can be any valid HTML tag (e.g., "div", "h1", "span") or a custom React component.

  // 2nd argument: An object, which we are leaving empty here, as we are not adding any specific attributes.

  // 3rd argument: This is the content or children of the element. In this example,
  // the content is a simple string "Hello, React!".
  // You can also pass other React elements or components as children.

  return React.createElement("div", {}, "Hello, React!");
}
