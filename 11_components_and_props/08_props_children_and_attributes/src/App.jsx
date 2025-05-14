// The Card component accepts both children elements and other props like 'title' and 'style'.
// 'props.children' represents the content between the opening and closing tags of the component.
function Card(props) {
  return (
    <div style={props.style}>
      <h2>{props.title}</h2>
      {/* Render the children elements */}
      <div>{props.children}</div>
    </div>
  );
}

function App() {
  // Define a style object for the Card component
  const cardStyle = {
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    width: "300px",
    margin: "20px auto",
  };

  return (
    <div>
      {/* 
        Passing both attributes (title, style) and child elements (content inside the Card) 
        to the Card component.
      */}
      <Card title="Card Title" style={cardStyle}>
        <p>This is the content inside the card.</p>
        <button>Click Me</button>
      </Card>
    </div>
  );
}

export default App;
