import React, { useRef } from "react";

function App() {
  // 1. Create a ref with useRef(null).
  //    This returns an object: { current: null }
  const myDivRef = useRef(null);

  function handleClick() {
    // 3. After React renders, myDivRef.current points to the real DOM element.
    //    We can now do anything the browser DOM API allows.
    console.log("The DOM element:", myDivRef.current);
    console.log("Tag name:", myDivRef.current.tagName);
    console.log("Text content:", myDivRef.current.textContent);
    console.log("Width:", myDivRef.current.offsetWidth, "px");

    // We can also change styles directly (though this is an escape hatch,
    // not the primary way to style in React).
    myDivRef.current.style.backgroundColor = "lightyellow";
    myDivRef.current.style.border = "2px solid orange";
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>useRef and the ref Attribute</h1>

      {/* 2. Attach the ref to a JSX element using the 'ref' attribute.
             React will set myDivRef.current = this DOM node after rendering. */}
      <div
        ref={myDivRef}
        style={{ padding: "20px", backgroundColor: "#f0f0f0", marginBottom: "10px" }}
      >
        I am a div. React will give my DOM node to the ref.
      </div>

      <button onClick={handleClick}>Inspect and Highlight the Div</button>

      <div style={{ marginTop: "20px" }}>
        <h2>How it works</h2>
        <ol>
          <li>
            Call <code>useRef(null)</code> to create a ref object.
          </li>
          <li>
            Pass that ref to a JSX element via <code>ref=&#123;myDivRef&#125;</code>.
          </li>
          <li>
            After the component renders, <code>myDivRef.current</code> is the real DOM node.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default App;