import { postService } from '../services/post.js';

class PostHandler {
  async getAll(req, res) {
    try {
      const { category, take } = req.query;
      const posts = await postService.getAllPosts(category, take);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const post = await postService.getPostById(id);

      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }

      return res.status(200).json(post);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async create(req, res) {
    try {
      const { title, content, author, category } = req.body;

      // Валідація обов'язкових полів (422 Unprocessable Entity)
      if (!title || !content || typeof title !== 'string' || typeof content !== 'string') {
        return res.status(422).json({ 
          error: 'Validation failed: "title" and "content" are required string fields' 
        });
      }

      const newPost = await postService.createPost({ 
        title, 
        content, 
        author: author || 'Anonymous', 
        category: category || 'general' 
      });

      return res.status(201).json(newPost);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export const postHandler = new PostHandler();