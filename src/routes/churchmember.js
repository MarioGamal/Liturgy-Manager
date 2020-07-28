import express from 'express';
const churchmember = require('../controllers/events/churchmember');


const router = express.Router();

router.get('/', churchmember.find);
router.get('/search', churchmember.search);
router.get('/:id', churchmember.findOne);
router.put('/', churchmember.putInfo);
router.delete('/:id', churchmember.delete);

export default router;