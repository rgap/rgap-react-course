import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
  ScrollRestoration,
  useLoaderData,
} from "react-router-dom";

// --- FAKE POSTS DATABASE ---
const POSTS = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  slug: `post-${i + 1}`,
  title: `Article #${i + 1}: Deep Dive Into Topic ${i + 1}`,
  excerpt: `A comprehensive overview of topic ${i + 1} with detailed examples and practical use cases...`,
  body: Array.from(
    { length: 12 },
    (_, j) =>
      `Paragraph ${j + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  ),
}));

// --- LOADERS ---
const postsLoader = () => POSTS;
const postLoader = ({ params }) => {
  const post = POSTS.find((p) => p.slug === params.slug);
  if (!post) throw new Response("Not Found", { status: 404 });
  return post;
};

// --- LAYOUT ---
function Layout() {
  return (
    <div style={{ fontFamily: "'Georgia', serif" }}>
      <nav
        style={{
          position: "sticky",
          top: 0,
          background: "#37474f",
          color: "white",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          zIndex: 100,
        }}
      >
        <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: "bold", fontSize: "18px" }}>
          📰 Blog
        </Link>
        <Link to="/posts" style={{ color: "#b0bec5", textDecoration: "none" }}>
          All Articles
        </Link>
      </nav>
      <main style={{ maxWidth: "750px", margin: "0 auto", padding: "30px 20px" }}>
        <Outlet />
      </main>

      {/* ScrollRestoration works perfectly across both the list and detail pages */}
      <ScrollRestoration />
    </div>
  );
}

// --- PAGES ---
function Home() {
  return (
    <>
      <h1>Welcome to the Blog</h1>
      <p style={{ color: "#666", lineHeight: "1.7" }}>
        This demo shows how <code>&lt;ScrollRestoration /&gt;</code> works on long
        list-to-detail navigation flows. Go to All Articles, scroll down, click an
        article — it opens at the top. Hit Back — you land exactly where you were!
      </p>
      <Link
        to="/posts"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 20px",
          background: "#37474f",
          color: "white",
          textDecoration: "none",
          borderRadius: "4px",
        }}
      >
        Browse Articles →
      </Link>
    </>
  );
}

function PostList() {
  const posts = useLoaderData();
  return (
    <>
      <h1>All Articles ({posts.length})</h1>
      <p style={{ color: "#888", marginBottom: "24px" }}>
        Scroll down, pick an article deep in the list, read it, then hit Back.
      </p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post) => (
          <li
            key={post.id}
            style={{
              borderBottom: "1px solid #eee",
              padding: "16px 0",
            }}
          >
            <Link
              to={`/posts/${post.slug}`}
              style={{ color: "#1a237e", textDecoration: "none", fontWeight: "bold", fontSize: "17px" }}
            >
              {post.title}
            </Link>
            <p style={{ color: "#666", margin: "6px 0 0", fontSize: "14px" }}>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

function PostDetail() {
  const post = useLoaderData();
  return (
    <>
      <Link to="/posts" style={{ color: "#888", textDecoration: "none", fontSize: "14px" }}>
        ← Back to Articles
      </Link>
      <h1 style={{ marginTop: "16px" }}>{post.title}</h1>
      {post.body.map((para, i) => (
        <p key={i} style={{ lineHeight: "1.9", marginBottom: "18px", color: "#333" }}>
          {para}
        </p>
      ))}
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
      { path: "posts", element: <PostList />, loader: postsLoader },
      { path: "posts/:slug", element: <PostDetail />, loader: postLoader },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}