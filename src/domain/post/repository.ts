import type { Post } from './entity.js'

export interface AddPost {
    title: string
    content: string
    author: string
    category: string
}

export interface Repository {
    getAll(category: string, take: number): Post[]
    getById(id: number): Post | undefined
    addPost(post: AddPost): Promise<Post>
}