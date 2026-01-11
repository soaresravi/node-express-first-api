const express = require('express');
const router = express.Router(); //mini servidor de rotas. organiza elas
const tasksController = require('../controllers/tasks.controller');

router.get('/', tasksController.listTasks); //quando é get /tasks
router.post('/', tasksController.createTask); //quando é post /tasks
router.put('/:id', tasksController.updateTask); //atualiza: put
router.delete('/:id', tasksController.deleteTask);

module.exports = router; //exporta pra ser usado no server