import express from 'express';
const router = express.Router();

import { createUser, authenticate } from '../../controllers/usersControllers.js';

router.post('/create', createUser)
router.post('/autenticate', authenticate)

export default router;