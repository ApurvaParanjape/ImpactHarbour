import express from 'express'
import { createPost, deletePost, getPosts, updatePost } from '../controllers/posts.js'

const router = express.Router();

router.get('/',getPosts)
router.post('/createPost/:orgId',createPost)
router.post('/updatePost/:postId',updatePost)
router.post('/deletePost/:postId',deletePost)

export default router;