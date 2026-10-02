import { Router } from 'express'
import type { PostHandlers } from '../handlers/post.js'

export function createPostRouter(postHandlers: PostHandlers) {
	const router = Router()

	router.get('/posts', postHandlers.getAll)
	router.get('/posts/:id', postHandlers.getById)
	router.post('/posts', postHandlers.addPost)

	return router
}