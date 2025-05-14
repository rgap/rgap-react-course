// The Greeting component uses a default value for the 'name' prop if it isn't provided.
function Greeting(props) {
  // If 'props.name' is not passed, it will default to "Guest"
  // because props will be equal to an empty object {}
  const name = props.name || "Guest";
  return <h1>Hello, {name}!</h1>;
}

function App() {
  return (
    <div>
      {/* Passing a name prop */}
      <Greeting name="Alice" />
      {/* Not passing a name prop, so it will default to "Guest" */}
      <Greeting />
    </div>
  );
}

export default App;
