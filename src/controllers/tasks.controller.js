const taskService = require('../services/tasks.service');

async function listTasks(req, res) {
    const tasks = await taskService.getAllTasks(); //espera o firestore responder
    res.json(tasks); //devolve json
}

async function createTask(req, res) {
   
    const { title } = req.body; //pega o titulo enviado

    if (!title) {
        return res.status(400).json({ error: 'Título não é obrigatório'}); //validaçao basica
    } 

    const newTask = await taskService.createTask(title); //cria no firestore
    res.status(201).json(newTask); //recurso criado
}

module.exports = { //exporta as funçoes pro router
    listTasks,
    createTask
};

// req.body vem do express. nao guarda dados. fazendo validaçao