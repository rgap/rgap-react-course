# 1. Sequential Data Fetching

Now that we understand the basics of `async/await` and `useEffect`, we can explore more advanced data fetching patterns.

Often, a component needs to make **multiple network requests** before it can render.

---

## Sequential Fetching (Dependent Requests)

Sequential fetching occurs when one network request **depends** on the result of a previous request.

For example:
1. Fetch the user's profile to get their `userId`.
2. Wait for that to finish.
3. Use the `userId` to fetch that specific user's latest posts.

Because Request B literally cannot start until Request A finishes, we must fetch them sequentially.

```jsx
const loadData = async () => {
  // 1. Fetch User
  const userRes = await fetch("/api/me");
  const user = await userRes.json();
  
  // 2. Fetch Posts (Using the user.id)
  const postsRes = await fetch(`/api/posts?userId=${user.id}`);
  const posts = await postsRes.json();
  
  // 3. Update State
  setUserData(user);
  setPostsData(posts);
};
```

---

## The Waterfall Problem

If Request A takes 2 seconds, and Request B takes 2 seconds, the total loading time is **4 seconds**.

When requests *must* be dependent, this waterfall effect is unavoidable. 

However, many beginners accidentally write sequential code for requests that do **not** depend on each other. If you are fetching a User Profile and fetching a list of Global Trending Topics, there is no reason to wait for the Profile to finish before starting the Trending Topics request!

In the next lesson, we will learn how to fix accidental waterfalls using Parallel Fetching.
