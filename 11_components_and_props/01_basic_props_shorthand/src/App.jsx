// Functional components in React can receive props as an argument.

// 'Props' stands for 'properties' and refers to the mechanism for passing
// data from a parent component to a child component in React.

// Props allows React components to be REUSABLE by giving them
// access to dynamic data that comes from their parent.

// The idea of 'props' in React comes from traditional programming patterns
// like function parameters, but in the context of UI components. It was introduced
// early in React's history, as a way to make components more flexible and composable.

function Greeting(props) {
  // The props object contains all the values passed down from the parent component.
  // Props are immutable, meaning the child component cannot modify them.
  // Here, we're accessing the 'name' prop and displaying it inside an <h1> tag.
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return (
    <div>
      {/*
        Here, we are passing the 'name' prop to the Greeting component.
        
        Each instance of the Greeting component receives a different value 
        for the 'name' prop, showing how props enable reusable components.
      */}
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
    </div>
  );
}

export default App;
