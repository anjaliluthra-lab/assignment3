// Maps URLs to controller functions
const router = require('express').Router();
const c = require('../controllers/workoutController');

router.get('/', c.list);
router.get('/add', c.addForm);
router.post('/add', c.add);
router.get('/edit/:id', c.editForm);
router.post('/edit/:id', c.edit);
router.post('/delete/:id', c.remove);

module.exports = router;