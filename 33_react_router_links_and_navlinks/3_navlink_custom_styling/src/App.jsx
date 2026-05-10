import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

function Home() { return <h2>🏠 Home Page</h2>; }
function About() { return <h2>ℹ️ About Us</h2>; }

function App() {
  
  // 1. You can pass a function to the `style` prop of NavLink.
  // React Router will pass an object containing an 'isActive' boolean to this function.
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "white" : "black",
      backgroundColor: isActive ? "purple" : "lightgray",
      padding: "10px 20px",
      textDecoration: "none",
      borderRadius: "5px"
    };
  };

  // 2. You can do the exact same thing for the `className` prop!
  // This is extremely useful if you use CSS frameworks like Tailwind.
  const navLinkClass = ({ isActive }) => {
    return isActive ? "my-custom-active-class" : "my-custom-inactive-class";
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>NavLink Custom Styling</h1>
      
      <p>Sometimes the default <code>.active</code> class isn't enough, or conflicts with your CSS framework.</p>

      <nav style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <NavLink to="/" style={navLinkStyle}>
          Home
        </NavLink>
        
        <NavLink to="/about" style={navLinkStyle}>
          About
        </NavLink>
        
        {/* Example showing the className function approach */}
        <NavLink to="/contact" className={navLinkClass} style={{ padding: "10px" }}>
          Contact (Inspect me!)
        </NavLink>
      </nav>

      <div style={{ border: "2px dashed #ccc", padding: "20px", marginTop: "20px", minHeight: "150px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<h2>📞 Contact</h2>} />
        </Routes>
      </div>

      <div style={{ marginTop: "30px", maxWidth: "600px" }}>
        <h2>Inline Styles vs Classes</h2>
        <p>
          By passing a function to <code>style</code> or <code>className</code>, we gain complete programmatic control over how the link looks when it is active or inactive.
        </p>
        <p>
          This pattern is especially popular in codebases that use Tailwind CSS, because Tailwind relies heavily on long strings of utility classes rather than a single <code>.active</code> selector in a stylesheet.
        </p>
      </div>
    </div>
  );
}

export default App;