import React from "react";
import { useLoaderData } from "react-router-dom";

// 1. The Loader Function receives an object from React Router!
// We can destructure `params` out of it.
export const profileLoader = async ({ params }) => {
  // `params.userId` matches the `:userId` segment in our route definition!
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
  const data = await response.json();
  
  // Simulate delay
  await new Promise(res => setTimeout(res, 800));
  
  return data;
};

// 2. The Component
export function Profile() {
  const user = useLoaderData();

  // Notice we don't even need `useParams` in the component anymore!
  // The loader handled it completely.
  return (
    <div style={{ border: "2px solid #009688", padding: "20px", borderRadius: "8px", maxWidth: "400px" }}>
      <h2>👤 User Profile</h2>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Company: {user?.company?.name}</p>
    </div>
  );
}
