const taskService = require('../services/tasks.service');

function listTasks(req, res) {
    const tasks = taskService.getAllTasks(); //nao sabe como tarefas sao guardadas, entao pede todas
    res.json(tasks); //converte em json e responde
}

function createTask(req, res) { //funcao chamada no post tasks
   
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({ error: 'Título não é obrigatório'});
    }
    
    const newTask = taskService.createTask(title); //crie uma task com esse titulo
    res.status(201).json(newTask); //NAO cria a task aqui. json da nova task
}

module.exports = { //exporta as funçoes pro router
    listTasks,
    createTask
};

// req.body vem do express. nao guarda dados. fazendo validaçao