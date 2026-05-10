export const fakeDB = {
  posts: [
    { id: 1, title: "Learn React Router", content: "It is very cool." },
    { id: 2, title: "Master Actions", content: "They make forms easy." }
  ],
  
  async getPosts() {
    await new Promise(res => setTimeout(res, 800)); // Simulate delay
    return [...this.posts];
  },

  async addPost(post) {
    await new Promise(res => setTimeout(res, 800)); // Simulate network save
    const newPost = { id: Date.now(), ...post };
    this.posts.push(newPost);
    return newPost;
  }
};
