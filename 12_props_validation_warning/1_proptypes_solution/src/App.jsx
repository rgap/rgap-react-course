import PropTypes from "prop-types";

// Greeting component using PropTypes for prop validation
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Adding PropTypes to define expected props
Greeting.propTypes = {
  name: PropTypes.string.isRequired, // Ensures `name` is required and of type string
};

/*
- PropTypes provides runtime validation.
- `propTypes` object ensures that the `name` prop is passed and is of the correct type (string).
- If `name` is not passed or is of the wrong type, you'll see a warning in development.
*/

function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
    </div>
  );
}

export default App;
