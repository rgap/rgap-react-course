import React from "react";

function App() {
  // A "Pure" React component should only calculate its output (JSX)
  // based on its input (props and state).
  
  // This is a PURE calculation. It only affects what is returned.
  const title = "What is a Side Effect?";
  
  // ❌ BAD: This is a SIDE EFFECT happening inside the render phase!
  // It reaches outside the component to change the browser's document title.
  // We should NEVER do this during render, because React might call this
  // function multiple times or interrupt it.
  document.title = "Side Effect Title"; 

  // ❌ BAD: Another side effect during render
  // console.log() is technically a side effect too, though safe for debugging.
  // But making an API call here would be disastrous!
  // fetch('https://api.example.com/data'); 

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>{title}</h1>
      <p>Look at the browser tab title. It changed!</p>
      
      <h2>What is a Side Effect?</h2>
      <p>
        A <strong>Side Effect</strong> is any operation that reaches outside the 
        React component to do something.
      </p>
      <ul>
        <li>Changing the DOM directly (like <code>document.title</code>)</li>
        <li>Fetching data from an API</li>
        <li>Setting up subscriptions or timers (<code>setInterval</code>)</li>
        <li>Writing to <code>localStorage</code></li>
      </ul>

      <h2>The Problem</h2>
      <p>
        React expects the render phase to be <strong>pure</strong>. It should just 
        return JSX. If we put side effects directly in the body of the function, 
        they will run at unpredictable times when React renders the component.
      </p>
    </div>
  );
}

export default App;