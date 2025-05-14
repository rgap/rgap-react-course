// You can disable the ESLint warning "missing prop validation" for the entire file by placing the comment at the top:
// Or you can disable ESLint for a specific block (not at the top)

/* eslint-disable react/prop-types */

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

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

// The other way would be by using Typescript but that won't be covered yet
