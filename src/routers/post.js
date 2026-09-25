import { Router } from 'express';
import { postHandler } from '../handlers/post.js';

const router = Router();

router.get('/', (req, res) => postHandler.getAll(req, res));
router.get('/:id', (req, res) => postHandler.getById(req, res));
router.post('/', (req, res) => postHandler.create(req, res));

export default router;