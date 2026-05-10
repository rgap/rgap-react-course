import React from "react";
import { useLoaderData } from "react-router-dom";

// 1. The Loader Function
// This function runs OUTSIDE the component, BEFORE the component even renders!
export const profileLoader = async () => {
  console.log("Loader started fetching data...");
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await response.json();
  
  // We simulate a slow network so you can see the delay
  await new Promise(res => setTimeout(res, 2000));
  
  console.log("Loader finished! Handing data to component.");
  return data;
};

// 2. The Component
export function Profile() {
  // Notice there is NO useState, NO useEffect, and NO loading state!
  // By the time this component renders, the data is guaranteed to exist.
  const user = useLoaderData();

  return (
    <div style={{ border: "2px solid #e91e63", padding: "20px", borderRadius: "8px" }}>
      <h2>👤 User Profile</h2>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Company: {user.company.name}</p>
    </div>
  );
}
