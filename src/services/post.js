import { postRepository } from '../repositories/post.js';

class PostService {
  async getAllPosts(category, take) {
    return await postRepository.getAll(category, take);
  }

  async getPostById(id) {
    return await postRepository.getById(id);
  }

  async createPost(postData) {
    return await postRepository.addPost(postData);
  }
}

export const postService = new PostService();