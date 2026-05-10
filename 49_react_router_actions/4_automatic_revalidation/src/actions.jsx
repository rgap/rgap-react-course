import { fakeDB } from "./api.js";

// --- ACTION ---
export const createPostAction = async ({ request }) => {
  console.log("📤 Action running... saving new post!");
  const formData = await request.formData();
  
  const newPost = {
    title: formData.get("title"),
    content: "This was added via the Action function!"
  };

  // 1. We mutate the database
  await fakeDB.addPost(newPost);

  // 2. We return null! We don't even redirect!
  return null;
  
  // 3. MAGIC HAPPENS! React Router automatically detects that an Action just finished.
  // It automatically calls all active Loaders on the page to fetch the fresh data!
};
