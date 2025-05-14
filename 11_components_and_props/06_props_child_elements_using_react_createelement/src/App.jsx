import React from 'react';

function MessageContainer(props) {
  // The MessageContainer component will render its children inside a <div> element.
  // `props.children` contains any elements passed between the opening and closing tags of the component.
  return React.createElement(
    'div',
    null,
    React.createElement('h2', null, 'Message:'),
    React.createElement('div', null, props.children)
  );
}

function App() {
  return React.createElement(
    'div',
    null,
    // Passing child elements inside the MessageContainer component
    React.createElement(
      MessageContainer,
      null,
      React.createElement('p', null, 'This is a custom message inside the container!')
    )
  );
}

export default App;
