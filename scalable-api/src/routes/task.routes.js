const router = require('express').Router();
const task = require('../controllers/task.controller');
const { verifyToken } = require('../middleware/auth.middleware');

router.use(verifyToken);
router.post('/', task.createTask);
router.get('/', task.getTasks);
router.put('/:id', task.updateTask);
router.delete('/:id', task.deleteTask);

module.exports = router;
