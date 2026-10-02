import type { Post } from '../domain/post/entity.js'
import type { AddPost, Repository } from '../domain/post/repository.js'

export function createPostRepository(): Repository {
    let posts: Post[] = [
    {
        id: 1,
        title: 'cat',
        content: 'may',
        author: 'cat',
        category: 'cat'
    },
    {
        id: 2,
        title: 'peaple',
        content: 'hello',
        author: 'peaple',
        category: 'peaple'
    },
    ]

    function getAll(category: string, take: number) {
        let result = [...posts]

        if (category) {
            result = result.filter(post => post.category === category)
        }
        if (take) {
            result = result.slice(0, take)
        }

        return result
    }

    function getById(id: number) {
        return posts.find(post => post.id === id)
    }

    async function addPost(post: AddPost) {
        const lastPost = posts[posts.length - 1]
        const newPost: Post = {
            id: lastPost ? lastPost.id + 1 : 0,
            ...post
        }

        posts = [...posts, newPost]
        return newPost
    }

    return { getAll, getById, addPost }
}

