import React from "react";
// 1. Import NavLink instead of Link
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css"; // We have some CSS in here!

function Home() { return <h2>🏠 Home Page</h2>; }
function About() { return <h2>ℹ️ About Us</h2>; }
function Contact() { return <h2>📞 Contact Page</h2>; }

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>NavLink Active State</h1>
      
      <p>Click the links below. Notice how the active link turns bold and blue!</p>

      {/* 2. Use NavLink for the navigation menu */}
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <div style={{ border: "2px dashed #ccc", padding: "20px", marginTop: "20px", minHeight: "150px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <div style={{ marginTop: "30px", maxWidth: "600px" }}>
        <h2>How does it work?</h2>
        <p>
          Unlike a standard <code>&lt;Link&gt;</code>, the <code>&lt;NavLink&gt;</code> component automatically looks at the current browser URL.
        </p>
        <p>
          If the URL matches the <code>to</code> prop of the NavLink, React Router automatically adds the CSS class <code>class="active"</code> to the generated HTML <code>&lt;a&gt;</code> tag.
        </p>
        <p>
          Open <code>src/App.css</code> to see how we styled the <code>.active</code> class!
        </p>
      </div>
    </div>
  );
}

export default App;