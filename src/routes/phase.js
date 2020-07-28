import express from 'express';
const phase = require('../controllers/events/phase')

const router = express.Router();

router.get('/', phase.find)
router.post('', phase.create)
router.put('/:id',phase.update)

export default router;