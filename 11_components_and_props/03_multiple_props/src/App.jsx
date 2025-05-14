// A functional component can receive multiple props.
// In this example, the PersonInfo component accepts 'name' and 'age' as props.
function PersonInfo(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <p>Age: {props.age}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      {/* Passing multiple props to the PersonInfo component */}
      <PersonInfo name="Alice" age={25} />
      <PersonInfo name="Bob" age={30} />
    </div>
  );
}

export default App;
