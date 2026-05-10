import React from "react";
import { useLoaderData } from "react-router-dom";

export const profileLoader = async ({ params }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
  
  // If the fetch fails (e.g., user 999 doesn't exist), the API returns a 404.
  if (!response.ok) {
    // We THROW a Response object. 
    // React Router immediately catches this and renders the errorElement!
    // The component below NEVER EVEN MOUNTS.
    throw new Response("This user could not be found in our database.", {
      status: response.status,
      statusText: "Not Found",
    });
  }

  return response.json();
};

export function Profile() {
  const user = useLoaderData();

  // Because the loader threw an error on 404, we are absolutely GUARANTEED 
  // that `user` is valid data here. We don't need any if(!user) checks!
  return (
    <div style={{ border: "2px solid #9c27b0", padding: "20px", borderRadius: "8px", maxWidth: "400px" }}>
      <h2>👤 {user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}
