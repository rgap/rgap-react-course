import React, { useState, useEffect } from "react";

// --- Skeleton Component ---
function ArticleSkeleton() {
  return (
    <div style={{ border: "1px solid #ddd", padding: "20px", marginBottom: "20px", borderRadius: "8px" }}>
      {/* Title Placeholder */}
      <div className="skeleton" style={{ width: "60%", height: "24px", marginBottom: "15px" }}></div>
      
      {/* Body Placeholders */}
      <div className="skeleton" style={{ width: "100%", height: "12px", marginBottom: "8px" }}></div>
      <div className="skeleton" style={{ width: "100%", height: "12px", marginBottom: "8px" }}></div>
      <div className="skeleton" style={{ width: "80%", height: "12px" }}></div>
    </div>
  );
}

// --- Main Component ---
function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      try {
        // Delaying by 3 seconds to clearly see the skeleton UI
        const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
        
        // Artificially delay the parsing to simulate a slow network
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        const data = await res.json();
        setArticles(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Skeleton Loading Screens</h1>
      <p>Instead of a boring spinner, we show the user exactly what the layout will look like before the data arrives!</p>

      <div style={{ marginTop: "30px" }}>
        {isLoading ? (
          // Render 3 skeletons while loading
          <>
            <ArticleSkeleton />
            <ArticleSkeleton />
            <ArticleSkeleton />
          </>
        ) : (
          // Render actual data when ready
          articles.map(article => (
            <div key={article.id} style={{ border: "1px solid #ddd", padding: "20px", marginBottom: "20px", borderRadius: "8px" }}>
              <h2 style={{ margin: "0 0 15px 0", fontSize: "20px" }}>{article.title}</h2>
              <p style={{ margin: "0", color: "#555", lineHeight: "1.5" }}>{article.body}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;