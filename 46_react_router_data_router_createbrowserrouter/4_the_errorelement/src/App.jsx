import React from "react";
import { 
  createBrowserRouter, 
  RouterProvider, 
  Link, 
  Outlet, 
  useRouteError 
} from "react-router-dom";

// --- Components ---
function RootLayout() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <nav style={{ backgroundColor: "#9c27b0", padding: "15px", display: "flex", gap: "15px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/profile" style={{ color: "white", textDecoration: "none" }}>Profile</Link>
        <Link to="/broken" style={{ color: "white", textDecoration: "none" }}>Broken Page</Link>
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

function Profile() {
  return <h2>👤 User Profile</h2>;
}

function BrokenPage() {
  // We intentionally throw an error here to crash this specific component!
  throw new Error("This page completely crashed during rendering!");
  return <h2>You will never see this.</h2>;
}

// --- The Global Error Boundary ---
function GlobalErrorPage() {
  // useRouteError gives us access to whatever error was thrown in the child routes
  const error = useRouteError();
  
  return (
    <div style={{ padding: "50px", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "50px", margin: "0" }}>💣</h1>
      <h2>Oops! Something went terribly wrong.</h2>
      <p style={{ color: "red", backgroundColor: "#ffebee", padding: "10px", display: "inline-block" }}>
        <i>{error.message || error.statusText}</i>
      </p>
      <br />
      <Link to="/" style={{ display: "inline-block", marginTop: "20px", padding: "10px 20px", backgroundColor: "#9c27b0", color: "white", textDecoration: "none", borderRadius: "5px" }}>
        Go Back Home
      </Link>
    </div>
  );
}

// --- The Router ---
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // If ANY child route throws an error, React Router will catch it and display this element!
    // Notice that it replaces the entire Layout!
    errorElement: <GlobalErrorPage />, 
    children: [
      { index: true, element: <Home /> },
      { path: "profile", element: <Profile /> },
      { path: "broken", element: <BrokenPage /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;