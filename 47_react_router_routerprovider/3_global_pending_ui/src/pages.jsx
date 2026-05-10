import React from "react";
import { useLoaderData } from "react-router-dom";

export const profileLoader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await response.json();
  
  // Simulate a 2 second delay so we can see the Global Pending UI in action
  await new Promise(res => setTimeout(res, 2000));
  
  return data;
};

export function Profile() {
  const user = useLoaderData();

  return (
    <div style={{ border: "2px solid #3f51b5", padding: "20px", borderRadius: "8px" }}>
      <h2>👤 User Profile</h2>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Company: {user.company.name}</p>
    </div>
  );
}
