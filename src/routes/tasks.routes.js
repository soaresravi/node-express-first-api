const express = require('express');
const router = express.Router(); //mini servidor de rotas. organiza elas
const controller = require('../controllers/tasks.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.use(authMiddleware);

router.get('/', controller.listTasks); //quando é get /tasks
router.post('/', controller.createTask); //quando é post /tasks
router.put('/:id', controller.updateTask); //atualiza: put
router.delete('/:id', controller.deleteTask);

module.exports = router; //exporta pra ser usado no server