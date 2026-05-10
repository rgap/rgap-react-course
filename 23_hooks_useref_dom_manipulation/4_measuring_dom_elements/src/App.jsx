import React, { useRef, useState, useEffect } from "react";

function MeasuredBox() {
  const boxRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // getBoundingClientRect returns the size and position of the element
    // relative to the viewport.
    const rect = boxRef.current.getBoundingClientRect();
    setDimensions({ width: rect.width, height: rect.height });
    console.log("Full rect:", rect);
  }, []);

  return (
    <div style={{ marginTop: "10px" }}>
      <div
        ref={boxRef}
        style={{
          padding: "30px",
          backgroundColor: "#e8f5e9",
          border: "2px solid green",
        }}
      >
        Measure me!
      </div>
      <p>
        Width: <strong>{dimensions.width}px</strong> | Height:{" "}
        <strong>{dimensions.height}px</strong>
      </p>
    </div>
  );
}

function ResizeTracker() {
  const boxRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // ResizeObserver watches for size changes on a DOM element.
    // This is useful when an element can resize (e.g., responsive layouts).
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setSize({ width: Math.round(width), height: Math.round(height) });
      }
    });

    observer.observe(boxRef.current);

    // Cleanup: stop observing
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Resize Tracker (resize the browser window)</h3>
      <div
        ref={boxRef}
        style={{
          padding: "20px",
          backgroundColor: "#fff3e0",
          border: "2px solid orange",
          width: "80%",
        }}
      >
        I resize with the window.
      </div>
      <p>
        Width: <strong>{size.width}px</strong> | Height:{" "}
        <strong>{size.height}px</strong>
      </p>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Measuring DOM Elements</h1>
      <p>
        Sometimes you need to know the size or position of an element. React does
        not expose this information through props. You must measure the real DOM
        node using a ref.
      </p>

      <MeasuredBox />
      <ResizeTracker />

      <div style={{ marginTop: "20px" }}>
        <h2>Key APIs</h2>
        <ul>
          <li>
            <code>getBoundingClientRect()</code> — returns the size and position
            at a single point in time.
          </li>
          <li>
            <code>ResizeObserver</code> — watches for size changes over time
            (needs cleanup!).
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;