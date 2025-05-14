// The DisplayInfo component accepts 'info' as a prop and displays it.
function DisplayInfo(props) {
  return <p>{props.info}</p>;
}

function App() {
  const dynamicValue = "This value is calculated dynamically.";

  return (
    <div>
      {/* Passing a static string prop */}
      <DisplayInfo info="This is a static prop." />

      {/* Passing a dynamic prop (the value is stored in a variable) */}
      <DisplayInfo info={dynamicValue} />
    </div>
  );
}

export default App;
