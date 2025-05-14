// A plain JavaScript version of the "Hello, World!" App component

function App() {
  // Create an h1 element
  const h1 = document.createElement("h1");

  // Set the text content to "Hello, world!"
  h1.innerText = "Hello, world!";

  // Return the h1 element
  return h1;
}

// Usage example:
// Append the App component to the root element in the document
document.getElementById("root").appendChild(App());
