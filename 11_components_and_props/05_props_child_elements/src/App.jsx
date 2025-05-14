// The MessageContainer component will render its children inside a <div> element.
// `props.children` contains any elements passed between the opening and closing tags of the component.
function MessageContainer(props) {
  return (
    <div>
      <h2>Message:</h2>
      <div>{props.children}</div>
    </div>
  );
}

function App() {
  return (
    <div>
      {/* Passing child elements inside the MessageContainer component */}
      <MessageContainer>
        <p>This is a custom message inside the container!</p>
      </MessageContainer>
    </div>
  );
}

export default App;
