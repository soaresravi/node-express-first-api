const taskService = require('../services/tasks.service');

async function listTasks(req, res) {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
}

async function createTask(req, res) {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({ error: 'Título não é obrigatório'});
    }

    const newTask = await taskService.createTask(title);
    res.status(201).json(newTask);
}

module.exports = { //exporta as funçoes pro router
    listTasks,
    createTask
};

// req.body vem do express. nao guarda dados. fazendo validaçao