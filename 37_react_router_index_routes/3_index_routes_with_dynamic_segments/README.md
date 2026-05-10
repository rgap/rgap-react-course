# 3. Index Routes & Dynamic Segments

One of the most powerful patterns in React Router is combining **Dynamic Segments** (URL Parameters) with **Nested Layouts** and **Index Routes**.

---

## The Scenario

Imagine a Blog system where each article has its own sub-navigation:
1. `myblog.com/posts/react-hooks` (The actual article)
2. `myblog.com/posts/react-hooks/comments` (The comments section for that article)
3. `myblog.com/posts/react-hooks/author` (Info about the author of that article)

We want a persistent layout (e.g., a sidebar with the article title and navigation links) that stays on screen while the user flips between the Article, the Comments, and the Author info.

---

## The Implementation

We can define a Parent Route that catches the dynamic segment (`:postId`) and renders the persistent layout.

Inside that Parent Route, we define our children. **The actual article content becomes the `index` route!**

```jsx
<Routes>
  {/* The Parent Layout catches the parameter */}
  <Route path="/posts/:postId" element={<BlogPostLayout />}>
    
    {/* The Index Route is the article itself */}
    {/* Matches exactly: /posts/react-hooks */}
    <Route index element={<ArticleContent />} />
    
    {/* Child routes append to the parent */}
    {/* Matches: /posts/react-hooks/comments */}
    <Route path="comments" element={<Comments />} />
    
    {/* Matches: /posts/react-hooks/author */}
    <Route path="author" element={<Author />} />
  </Route>
</Routes>
```

---

## `useParams` Inheritance

In React Router v6, any parameters matched by a parent route are automatically passed down and accessible to all child routes.

This means that `BlogPostLayout`, `ArticleContent`, `Comments`, and `Author` can ALL call `useParams()` and extract `postId`.

```jsx
// Inside the Index route:
import { useParams } from "react-router-dom";

function ArticleContent() {
  const { postId } = useParams(); // Works!
  return <h1>Reading: {postId}</h1>;
}
```
