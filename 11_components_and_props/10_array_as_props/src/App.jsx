// Define a functional component that accepts an array of items as props and renders them
function List(props) {
  return (
    <ul>
      {props.items.map((item, index) => (
        // The 'key' attribute is required by React to uniquely identify each element in the list
        // React uses 'key' to track elements and optimize rendering, ensuring that only changed items
        // are re-rendered. Without 'key', React would re-render all elements, which can affect performance.

        // index contains the values 0, 1, 2, ... for each item in the array
        // using a unique ID for each item is recommended, in this case the values are unique so we can use index
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function App() {
  const fruits = ["Apple", "Banana", "Cherry"];
  const vegetables = ["Carrot", "Broccoli", "Spinach"];

  return (
    <div>
      {/* Passing an array prop 'items' to the List component */}
      <h2>Fruits</h2>
      <List items={fruits} />

      <h2>Vegetables</h2>
      <List items={vegetables} />
    </div>
  );
}

export default App;
