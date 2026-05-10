import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
  ScrollRestoration,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";

// --- FAKE DATA ---
// Two separate scrollable tabs inside the same route
const CATEGORIES = ["Technology", "Design", "Business"];
const POSTS = {
  Technology: Array.from({ length: 20 }, (_, i) => ({ id: i + 1, title: `Tech Article #${i + 1}` })),
  Design: Array.from({ length: 20 }, (_, i) => ({ id: i + 1, title: `Design Article #${i + 1}` })),
  Business: Array.from({ length: 20 }, (_, i) => ({ id: i + 1, title: `Business Article #${i + 1}` })),
};

// --- LAYOUT ---
function Layout() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <nav style={{ position: "sticky", top: 0, backgroundColor: "#4a148c", padding: "12px 24px", display: "flex", gap: "20px", zIndex: 100 }}>
        <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>Home</Link>
        <Link to="/feed?tab=Technology" style={{ color: "#ce93d8", textDecoration: "none" }}>Feed</Link>
      </nav>
      <main style={{ maxWidth: "700px", margin: "0 auto", padding: "30px 20px" }}>
        <Outlet />
      </main>

      {/*
        The getKey prop lets us define what uniquely identifies a scroll position.

        By default, ScrollRestoration uses the full URL (pathname + search) as the key.
        This means /feed?tab=Technology and /feed?tab=Design would be treated as two
        DIFFERENT scroll positions, which is correct behavior for tab-based interfaces!

        We are explicitly passing getKey here to show the concept.
        If we used ONLY the pathname as the key, switching tabs would restore scroll
        to wherever you were on the OTHER tab — which is wrong.
      */}
      <ScrollRestoration
        getKey={(location) => {
          // We use the full URL (pathname + search) as the key.
          // This gives each tab its own independent scroll position!
          return location.pathname + location.search;
        }}
      />
    </div>
  );
}

// --- PAGES ---
function Home() {
  return (
    <>
      <h1>Custom Scroll Keys</h1>
      <p style={{ lineHeight: "1.7", color: "#555" }}>
        This demo shows the <code>getKey</code> prop on <code>&lt;ScrollRestoration /&gt;</code>.
        Go to the Feed, scroll down in the Technology tab, switch to Design, scroll
        somewhere else, then switch back to Technology. Your scroll position for each
        tab is remembered independently!
      </p>
      <Link to="/feed?tab=Technology" style={{ display: "inline-block", marginTop: "16px", padding: "10px 20px", background: "#4a148c", color: "white", textDecoration: "none", borderRadius: "4px" }}>
        Go to Feed →
      </Link>
    </>
  );
}

function Feed() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "Technology";
  const posts = POSTS[activeTab] || [];

  return (
    <>
      {/* Tab Bar */}
      <div style={{ display: "flex", gap: "0", borderBottom: "2px solid #e0e0e0", marginBottom: "24px" }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSearchParams({ tab: cat })}
            style={{
              padding: "10px 20px",
              border: "none",
              borderBottom: activeTab === cat ? "3px solid #4a148c" : "3px solid transparent",
              background: "none",
              color: activeTab === cat ? "#4a148c" : "#666",
              fontWeight: activeTab === cat ? "bold" : "normal",
              cursor: "pointer",
              fontSize: "15px",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <h2>{activeTab} Feed</h2>
      <p style={{ color: "#888", fontSize: "14px", marginBottom: "20px" }}>
        Scroll position is tracked independently for each tab via <code>getKey</code>.
      </p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post) =>
          // Lots of content to scroll through
          Array.from({ length: 2 }, (_, j) => (
            <li
              key={`${post.id}-${j}`}
              style={{ borderBottom: "1px solid #f0f0f0", padding: "16px 0" }}
            >
              <strong style={{ color: "#333" }}>{post.title}</strong>
              <p style={{ color: "#777", margin: "6px 0 0", fontSize: "14px", lineHeight: "1.6" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Post {post.id}, section {j + 1}.
              </p>
            </li>
          ))
        )}
      </ul>
    </>
  );
}

// --- ROUTER ---
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "feed", element: <Feed /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}