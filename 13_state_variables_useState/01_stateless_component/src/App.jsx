// In React, state refers to an object that holds information about a
// component's current situation.

// When the state of a component changes, React automatically re-renders
// that component, updating the displayed content to reflect the new state.

// This Counter component is stateless and relies on props for displaying data.
// It cannot manage or change the value of count on its own.
function Counter(props) {
  return <h1>Count: {props.count}</h1>;
}

// No State: The Counter component is stateless.
// Static Content: The count value is static. It stays at 0 unless manually changed by the parent.

function App() {
  return (
    <div>
      <Counter count={0} />
    </div>
  );
}

export default App;
