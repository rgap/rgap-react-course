import React, { useRef, useEffect } from "react";
import { useLoaderData, Form, useNavigation } from "react-router-dom";
import { fakeDB } from "./api.js";

// --- LOADER ---
export const postsLoader = async () => {
  console.log("📥 Loader running... fetching fresh posts!");
  return fakeDB.getPosts();
};

// --- COMPONENT ---
function App() {
  const posts = useLoaderData();
  const navigation = useNavigation();
  const formRef = useRef(null);

  // If navigation is "submitting", the action is running!
  const isSubmitting = navigation.state === "submitting";
  
  // If navigation is "loading" AND we previously submitted, 
  // it means the Action finished and the Loader is now running again!
  const isReloading = navigation.state === "loading" && navigation.formData != null;

  // Clear the form after a successful submission
  useEffect(() => {
    if (navigation.state === "idle") {
      formRef.current?.reset();
    }
  }, [navigation.state]);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>Automatic Revalidation</h1>
      
      {/* THE FORM */}
      <div style={{ border: "2px solid #ff5722", padding: "20px", borderRadius: "8px", marginBottom: "30px" }}>
        <h3>Create New Post</h3>
        <Form method="post" ref={formRef} style={{ display: "flex", gap: "10px" }}>
          <input type="text" name="title" placeholder="Post Title" required style={{ flex: 1, padding: "8px" }} />
          <button type="submit" disabled={isSubmitting || isReloading}>
            {isSubmitting ? "Saving..." : isReloading ? "Refreshing Data..." : "Post"}
          </button>
        </Form>
      </div>

      {/* THE DATA */}
      <div>
        <h3>Feed ({posts.length} Posts)</h3>
        <div style={{ opacity: isReloading ? 0.5 : 1, transition: "opacity 0.2s" }}>
          {posts.map(p => (
            <div key={p.id} style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
              <strong>{p.title}</strong>
              <p style={{ margin: "5px 0 0 0", color: "#666" }}>{p.content}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default App;