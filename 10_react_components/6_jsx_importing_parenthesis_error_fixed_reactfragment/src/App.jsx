import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";

function App() {
  return (
    <>
      {/* This is shorthand for React.Fragment. 
          React.Fragment is used when you need to return multiple elements without adding extra nodes 
          to the DOM (like adding an unnecessary <div>).
          The empty tags <> </> are a shorthand notation for <React.Fragment></React.Fragment>.
          This is purely a convenience, saving you from typing React.Fragment explicitly. */}
      <h1>App</h1>
      <FunctionalComponent />
      <ClassComponent />
    </>
  );
}

export default App;
