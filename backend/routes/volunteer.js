import express from 'express'
import {signIn, signUp } from '../controllers/volunteer.js'

const router = express.Router()

router.post('/vol/signup', signUp);
router.post('/vol/signin', signIn);

export default router;
