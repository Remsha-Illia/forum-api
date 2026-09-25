class PostRepository {
  constructor() {
    this.posts = [
      { id: 1, title: 'Ubisoft Servers', content: 'Server ', author: 'Gamer', category: 'gaming' },
      { id: 2, title: 'Express Routing', content: 'Handlers and Services...', author: 'Dev1', category: 'programming' },
      { id: 3, title: 'Minecraft Servers', content: 'Setting up RCON...', author: 'Gamer', category: 'gaming' },
      { id: 4, title: 'Node.js Architecture', content: 'Router-Handler-Service-Repository', author: 'Arhon', category: 'programming' }
    ];
  }

  async getAll(category, take) {
    let result = [...this.posts];

    if (category) {
      result = result.filter(post => post.category.toLowerCase() === category.toLowerCase());
    }

    if (take) {
      const limit = parseInt(take, 10);
      if (!isNaN(limit) && limit > 0) {
        result = result.slice(0, limit);
      }
    }

    return result;
  }

  async getById(id) {
    const numericId = Number(id);
    return this.posts.find(post => post.id === numericId) || null;
  }

  async addPost(data) {
    return new Promise((resolve) => {
      const newPost = {
        id: this.posts.length > 0 ? Math.max(...this.posts.map(p => p.id)) + 1 : 1,
        title: data.title,
        content: data.content,
        author: data.author,
        category: data.category
      };
      this.posts.push(newPost);
      resolve(newPost);
    });
  }
}

export const postRepository = new PostRepository();