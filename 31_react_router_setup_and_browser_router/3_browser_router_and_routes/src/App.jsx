import React from "react";
// Step 2: Import Routes and Route
import { Routes, Route } from "react-router-dom";

// Our "Page" components
function Home() {
  return <h2 style={{ color: "blue" }}>🏠 Home Page</h2>;
}

function About() {
  return <h2 style={{ color: "green" }}>ℹ️ About Us</h2>;
}

function Contact() {
  return <h2 style={{ color: "purple" }}>📞 Contact Page</h2>;
}

function NotFound() {
  return <h2 style={{ color: "red" }}>❌ 404 - Page Not Found</h2>;
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>BrowserRouter and Routes</h1>
      
      <p style={{ fontStyle: "italic" }}>
        Change the URL in your browser to <strong>/about</strong> or <strong>/contact</strong> and press Enter!
      </p>

      <div style={{ border: "2px dashed #ccc", padding: "20px", marginTop: "20px" }}>
        
        {/* Step 3: Define your Routes */}
        {/* <Routes> acts like a switch statement. It looks at the current URL and renders the matching <Route> */}
        <Routes>
          {/* path is the URL path. element is the component to render. */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* The asterisk * is a wildcard. It matches anything that didn't match above. */}
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>

      <div style={{ marginTop: "30px" }}>
        <h2>How to test this:</h2>
        <p>Because we don't have navigation buttons yet, you have to type the URL manually in your browser's address bar.</p>
        <ul>
          <li>Go to <code>http://localhost:5173/about</code></li>
          <li>Go to <code>http://localhost:5173/contact</code></li>
          <li>Go to <code>http://localhost:5173/gibberish</code> (to see the 404 page)</li>
        </ul>
      </div>
    </div>
  );
}

export default App;