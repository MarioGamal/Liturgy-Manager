import express from 'express';
import { verify, communicate } from '../controllers/messenger';
const router = express.Router();

router.get('', verify);
router.post('', communicate);

export default router;
