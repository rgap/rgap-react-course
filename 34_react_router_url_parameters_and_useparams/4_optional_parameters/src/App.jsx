import React from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>🌎 Language Portal</h2>
      <ul style={{ lineHeight: "1.8" }}>
        {/* URL with NO parameter */}
        <li><Link to="/welcome">Default Welcome Page (English)</Link></li>
        
        {/* URLs WITH parameters */}
        <li><Link to="/welcome/es">Welcome Page in Spanish</Link></li>
        <li><Link to="/welcome/fr">Welcome Page in French</Link></li>
      </ul>
    </div>
  );
}

function WelcomeMessage() {
  // Extract the language parameter
  const { lang } = useParams();

  // If the parameter is missing (undefined), fallback to a default value
  const activeLanguage = lang || "en";

  let greeting;
  if (activeLanguage === "en") greeting = "Hello, welcome to our site!";
  if (activeLanguage === "es") greeting = "¡Hola, bienvenido a nuestro sitio!";
  if (activeLanguage === "fr") greeting = "Bonjour, bienvenue sur notre site!";

  return (
    <div style={{ backgroundColor: "#fff3e0", padding: "20px", border: "1px solid #ffb74d", borderRadius: "5px" }}>
      <h2>💬 Message</h2>
      
      <p style={{ fontSize: "24px", fontStyle: "italic", color: "#e65100" }}>
        {greeting}
      </p>

      <p style={{ marginTop: "20px", fontSize: "14px", color: "#666" }}>
        (Active language code: <strong>{activeLanguage}</strong>)
      </p>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Optional Parameters</h1>
      
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Back to Home</Link>
      </nav>

      <div style={{ border: "2px dashed #ccc", padding: "20px", minHeight: "200px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* 
            Notice the QUESTION MARK (?) at the end of the parameter.
            This makes the :lang segment optional!
            It will match "/welcome" AND "/welcome/es"
          */}
          <Route path="/welcome/:lang?" element={<WelcomeMessage />} />
          
        </Routes>
      </div>

      <div style={{ marginTop: "30px", maxWidth: "600px" }}>
        <h2>The Question Mark</h2>
        <p>
          By adding a <code>?</code> after the parameter name (<code>path="/welcome/:lang?"</code>), React Router knows this segment is optional.
        </p>
        <p>
          If the user goes to <code>/welcome</code>, the route matches, but <code>useParams().lang</code> will be <strong>undefined</strong>. We can easily handle this in our component by assigning a default value!
        </p>
      </div>
    </div>
  );
}

export default App;