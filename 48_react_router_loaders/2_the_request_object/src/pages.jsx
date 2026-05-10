import React from "react";
import { useLoaderData } from "react-router-dom";

// 1. The Loader Function receives `request` from React Router
export const searchLoader = async ({ request }) => {
  // `request` is a standard Web Request object!
  // We can create a URL object out of it to easily access the query string.
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("q");

  // If there's no search term, return an empty array instantly
  if (!searchTerm) return [];

  // Simulate network delay
  await new Promise(res => setTimeout(res, 800));

  // We can pass the search term directly into our API call!
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const allPosts = await response.json();
  
  // Filter the posts based on the query
  const filtered = allPosts.filter(post => post.title.includes(searchTerm));
  
  // We return both the results AND the original search term
  return { results: filtered, searchTerm };
};

// 2. The Component
export function SearchResults() {
  // We receive exactly what the loader returned!
  const { results, searchTerm } = useLoaderData();

  if (!searchTerm) return <p>Please enter a search term.</p>;

  return (
    <div>
      <h3>Found {results.length} results for "{searchTerm}"</h3>
      {results.map(post => (
        <div key={post.id} style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
          <h4 style={{ margin: "0 0 5px 0" }}>{post.title}</h4>
          <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
