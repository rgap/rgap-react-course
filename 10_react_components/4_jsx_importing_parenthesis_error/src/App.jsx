import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";

function App() {
  // This return statement has an issue because there are multiple adjacent JSX elements 
  // (the <h1> element, <FunctionalComponent />, and <ClassComponent />) not wrapped in a single parent element.
  // In JSX, you can only return one parent element from a component.
  // If you want to return multiple elements, you must wrap them inside a single parent element, like a <div> or a React.Fragment.

  return(
    <h1>App</h1>
    <FunctionalComponent />
    <ClassComponent />
  );
  // However, because they are not enclosed in a single parent element, this will cause an error.

  // Correct approach: wrap all these components inside a single parent, such as a <div> or React.Fragment:
  // return (
  //   <div>
  //     <h1>App</h1>
  //     <FunctionalComponent />
  //     <ClassComponent />
  //   </div>
  // );
}

export default App;
