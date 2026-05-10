import React from "react";
import { useLoaderData } from "react-router-dom";

export const profileLoader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await response.json();
  
  // Simulate a heavy initial load (e.g. validating auth tokens, fetching translations)
  await new Promise(res => setTimeout(res, 3000));
  
  return data;
};

export function Profile() {
  // We can also access the root loader data here, because child routes 
  // can access parent loader data!
  const user = useLoaderData();

  return (
    <div style={{ border: "2px solid #ff5722", padding: "20px", borderRadius: "8px", maxWidth: "400px" }}>
      <h2>👤 User Profile</h2>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
    </div>
  );
}
