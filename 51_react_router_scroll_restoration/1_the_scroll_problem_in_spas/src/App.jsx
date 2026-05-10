import React from "react";
import { createBrowserRouter, RouterProvider, Link, Outlet } from "react-router-dom";

// Generate long dummy content
const Article = ({ title, paragraphs = 15 }) => (
  <div>
    <h2>{title}</h2>
    {Array.from({ length: paragraphs }, (_, i) => (
      <p key={i} style={{ lineHeight: "1.8", marginBottom: "16px", color: "#444" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
        Paragraph {i + 1} of {paragraphs}.
      </p>
    ))}
  </div>
);

function Layout() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <nav style={{ position: "sticky", top: 0, backgroundColor: "#1a237e", padding: "12px 24px", display: "flex", gap: "20px", zIndex: 100 }}>
        <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>Home</Link>
        <Link to="/about" style={{ color: "#90caf9", textDecoration: "none" }}>About</Link>
        <Link to="/blog" style={{ color: "#90caf9", textDecoration: "none" }}>Blog</Link>
      </nav>
      <main style={{ maxWidth: "700px", margin: "0 auto", padding: "30px 20px" }}>
        <Outlet />
      </main>
    </div>
  );
}

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <p style={{ color: "#666" }}>
        Scroll down on any page, then click a nav link to go to another page.
        Notice the browser does <strong>not</strong> scroll back to the top!
        This is the SPA scroll problem.
      </p>
      <Article title="Welcome to Our Site" paragraphs={20} />
    </>
  );
}

function About() {
  return (
    <>
      <h1>About Page</h1>
      <p style={{ color: "#666" }}>
        You navigated here — but did the page start at the top? In a traditional
        multi-page website, every navigation triggers a full page load, which
        automatically resets the scroll position to 0. SPAs don't do this!
      </p>
      <Article title="Our Story" paragraphs={20} />
    </>
  );
}

function Blog() {
  return (
    <>
      <h1>Blog Page</h1>
      <Article title="The Scroll Problem in SPAs" paragraphs={20} />
    </>
  );
}

// Using createBrowserRouter (Data Router) without ScrollRestoration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "blog", element: <Blog /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}