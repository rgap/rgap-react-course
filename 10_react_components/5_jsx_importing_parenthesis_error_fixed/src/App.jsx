import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";

function App() {
  return (
    <div>
      <h1>App</h1> {/* The <h1> element is here. */}
      <FunctionalComponent /> {/* Then there's the FunctionalComponent. */}
      <ClassComponent /> {/* Finally, the ClassComponent. */}
    </div>
  );
}

export default App;
