// Custom hook-like function to manage state
function useState(initialValue) {
  let state = initialValue;

  function getState() {
    return state;
  }

  function setState(newValue) {
    state = newValue;
    render(); // Re-render or update the component
  }

  return [getState, setState];
}

// Component using useState
function createCounterComponent() {
  const [getCount, setCount] = useState(0);

  const element = document.createElement("div");
  const button = document.createElement("button");

  function render() {
    element.innerText = "Count: " + getCount();
    button.innerText = "Increment";
  }

  button.addEventListener("click", () => {
    setCount(getCount() + 1);
  });

  element.appendChild(button);
  render(); // Initial render

  return element;
}

// Usage
document.body.appendChild(createCounterComponent());
