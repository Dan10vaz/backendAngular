import express from 'express';
const router = express.Router();

import { get, create, update, deleted } from '../../controllers/productsController.js';

router.get('/', get);
router.post('/create', create);
router.put('/update', update);
router.delete('/deleted', deleted);

export default router;