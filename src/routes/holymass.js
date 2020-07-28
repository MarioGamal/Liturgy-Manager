
import express from 'express';
import { create, findOne, update, deleteOne, findAll, bookSeat, cancelSeat, exportHolymass, searchHolymass } from '../controllers/events/holymass';

const router = express.Router();

router.get('/', findAll);
router.get('/search', searchHolymass);
router.get('/date', findOne);
router.get('/:id', findOne);
router.post('', create);
router.delete('/:id', deleteOne);
router.put('/', update);
router.post('/bookseat', bookSeat);
router.post('/cancelSeat', cancelSeat);
// router.post('/export', exportHolymass);
router.post('/:id/export', exportHolymass);

export default router;