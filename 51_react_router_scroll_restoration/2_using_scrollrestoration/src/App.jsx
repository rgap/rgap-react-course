import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
  ScrollRestoration, // 1. Import ScrollRestoration
} from "react-router-dom";

const Article = ({ title, paragraphs = 15 }) => (
  <div>
    <h2>{title}</h2>
    {Array.from({ length: paragraphs }, (_, i) => (
      <p key={i} style={{ lineHeight: "1.8", marginBottom: "16px", color: "#444" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris. Paragraph {i + 1} of {paragraphs}.
      </p>
    ))}
  </div>
);

function Layout() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <nav style={{ position: "sticky", top: 0, backgroundColor: "#1b5e20", padding: "12px 24px", display: "flex", gap: "20px", zIndex: 100 }}>
        <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>Home</Link>
        <Link to="/about" style={{ color: "#a5d6a7", textDecoration: "none" }}>About</Link>
        <Link to="/blog" style={{ color: "#a5d6a7", textDecoration: "none" }}>Blog</Link>
      </nav>
      <main style={{ maxWidth: "700px", margin: "0 auto", padding: "30px 20px" }}>
        <Outlet />
      </main>

      {/*
        2. Drop <ScrollRestoration /> anywhere inside the router tree.
        Convention: place it in the Root Layout, alongside the <Outlet />.
        It renders NOTHING visible — it only adds scroll management behavior.
      */}
      <ScrollRestoration />
    </div>
  );
}

function Home() {
  return (
    <>
      <h1>✅ ScrollRestoration Active</h1>
      <p style={{ backgroundColor: "#e8f5e9", padding: "15px", borderRadius: "8px", color: "#2e7d32" }}>
        Scroll down, then navigate to another page. You will be taken straight to the top!
        Then use the browser Back button — your previous scroll position is restored!
      </p>
      <Article title="Home Page Content" paragraphs={20} />
    </>
  );
}

function About() {
  return (
    <>
      <h1>About Page</h1>
      <Article title="Our Story" paragraphs={20} />
    </>
  );
}

function Blog() {
  return (
    <>
      <h1>Blog Page</h1>
      <Article title="Latest Articles" paragraphs={20} />
    </>
  );
}

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