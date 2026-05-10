import React, { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";

// 1. The Loader
export const profileLoader = async ({ params }) => {
  // A FAST request (takes 200ms)
  const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`).then(res => res.json());
  
  // A SLOW request (takes 3 seconds)
  const slowPostsPromise = new Promise(resolve => {
    setTimeout(async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.userId}`);
      resolve(await res.json());
    }, 3000);
  });

  // We use `defer()` instead of returning the object directly!
  // We `await` the fast data so it blocks the page transition (guaranteeing it exists on mount).
  // We DO NOT await the slow data! We just pass the raw Promise into the object!
  return defer({
    user: await userPromise, 
    posts: slowPostsPromise // <--- Unresolved Promise!
  });
};

// 2. The Component
export function Profile() {
  // We get the deferred object
  const data = useLoaderData();

  return (
    <div style={{ border: "2px solid #ff5722", padding: "20px", borderRadius: "8px" }}>
      {/* 3. The fast data is immediately available */}
      <h2>👤 {data.user.name}</h2>
      <p>Email: {data.user.email}</p>

      <hr style={{ margin: "20px 0" }} />
      <h3>📝 User Posts (Slow)</h3>
      
      {/* 4. We wrap the slow Promise in a <Suspense> boundary */}
      <Suspense fallback={<p style={{ color: "#ff5722" }}>⏳ Fetching massive post database...</p>}>
        
        {/* 5. We use the <Await> component to tell React Router to wait for the Promise to resolve */}
        <Await resolve={data.posts}>
          {/* 6. Once resolved, it passes the data down to a render function! */}
          {(resolvedPosts) => (
            <ul style={{ paddingLeft: "20px" }}>
              {resolvedPosts.slice(0, 3).map(post => (
                <li key={post.id} style={{ marginBottom: "10px" }}>{post.title}</li>
              ))}
            </ul>
          )}
        </Await>

      </Suspense>
    </div>
  );
}
