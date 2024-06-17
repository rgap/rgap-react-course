// A reusable component with event handling

/**
 * Function to create a component with event handling and custom styles.
 *
 * @param {string} text - The prop (property) to display inside the component.
 * @param {Object} style - An object containing CSS styles to apply to the component.
 * @returns {HTMLElement} The component element.
 */
function createButton(text, style) {
  // Create a div element to serve as the component container
  const element = document.createElement("div");

  // Create a button element to be added to the component
  const button = document.createElement("button");

  // Set the inner text of the component container using the prop
  element.innerText = text;

  // Set the inner text of the button
  button.innerText = "Click me";

  // Add an event listener to the button for click events
  button.addEventListener("click", () => {
    // Display an alert when the button is clicked
    alert("Button clicked!");
  });

  // Apply the provided styles to the component container
  if (style) {
    Object.assign(element.style, style);
  }

  // Append the button to the component container
  element.appendChild(button);

  // Return the complete component element
  return element;
}

// Usage example:
// Create an instance of the component with text and styles, and append it to the document body
const styles = {
  color: "white",
  backgroundColor: "blue",
  padding: "10px",
  borderRadius: "5px",
};
document.body.appendChild(createButton("Styled Component", styles));
