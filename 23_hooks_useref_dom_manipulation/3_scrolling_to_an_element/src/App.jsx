import React, { useRef } from "react";

function App() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  function scrollTo(ref) {
    // scrollIntoView is a native DOM method.
    // It scrolls the page so that the element becomes visible.
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const sectionStyle = {
    height: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "32px",
    borderBottom: "2px solid #ccc",
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Navigation bar */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "#333",
          color: "white",
          padding: "10px 20px",
          display: "flex",
          gap: "10px",
          zIndex: 10,
        }}
      >
        <button onClick={() => scrollTo(section1Ref)}>Go to Section 1</button>
        <button onClick={() => scrollTo(section2Ref)}>Go to Section 2</button>
        <button onClick={() => scrollTo(section3Ref)}>Go to Section 3</button>
      </nav>

      {/* Sections */}
      <div ref={section1Ref} style={{ ...sectionStyle, backgroundColor: "#e3f2fd" }}>
        📘 Section 1
      </div>
      <div ref={section2Ref} style={{ ...sectionStyle, backgroundColor: "#e8f5e9" }}>
        📗 Section 2
      </div>
      <div ref={section3Ref} style={{ ...sectionStyle, backgroundColor: "#fff3e0" }}>
        📙 Section 3
      </div>
    </div>
  );
}

export default App;