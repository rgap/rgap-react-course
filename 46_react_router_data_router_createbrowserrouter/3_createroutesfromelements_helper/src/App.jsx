import React from "react";
import { 
  createBrowserRouter, 
  RouterProvider, 
  createRoutesFromElements, 
  Route, 
  Outlet, 
  Link 
} from "react-router-dom";

// --- Components ---
function Layout() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <nav style={{ backgroundColor: "#4caf50", padding: "15px", display: "flex", gap: "15px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
      </nav>
      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}

function Home() {
  return <h2>🏠 Home</h2>;
}

function Contact() {
  return <h2>📞 Contact Us</h2>;
}

// --- The Helper Function ---
// Many developers hate reading nested arrays of objects!
// `createRoutesFromElements` allows you to write standard JSX, and it translates
// it into the object array behind the scenes.
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;