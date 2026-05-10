import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

// --- Components ---
function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>🏠 Home Page</h2>
      <p>Welcome to the Data Router!</p>
      <Link to="/about">Go to About</Link>
    </div>
  );
}

function About() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>📖 About Page</h2>
      <p>This application is powered by createBrowserRouter.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}

// --- 1. Create the Router ---
// Notice how we are no longer using <Routes> and <Route> JSX components!
// We are passing an array of regular JavaScript objects.
const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  }
]);

// --- 2. Provide the Router ---
function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      <header style={{ backgroundColor: "#333", color: "white", padding: "15px", textAlign: "center" }}>
        <h1>The RouterProvider</h1>
      </header>
      
      <div style={{ border: "2px dashed #ccc", marginTop: "20px" }}>
        {/* We pass our created router object into the RouterProvider component */}
        <RouterProvider router={myRouter} />
      </div>
      
      <div style={{ marginTop: "30px", color: "#666", fontSize: "14px" }}>
        <p><strong>Note:</strong> We completely replaced <code>&lt;BrowserRouter&gt;</code> in <code>main.jsx</code> with this new pattern.</p>
      </div>
    </div>
  );
}

export default App;