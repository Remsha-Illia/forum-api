import type { AddPost, Repository } from '../domain/post/repository.js
import type { PostService } from './post.types.js'

export function createPostService(postRepository: Repository): PostService {
    async function addPost(post: AddPost) {
        const allPosts = postRepository.getAll(post.category, Number.MAX_SAFE_INTEGER)
        const existingPost = allPosts.find(existing => existing.title === post.title)
        if (existingPost) {
            return null
        }
        return postRepository.addPost(post)
    }

    return {
        getAll: (category, take) => postRepository.getAll(category, take),
        getById: id => postRepository.getById(id),
        addPost
    }
}
