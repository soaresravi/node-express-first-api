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

async function updateTask(req, res) {
    
    const { id } = req.params; //id da url
    const data = req.body; //dados p atualizar
    
    const updatedTask = await taskService.updateTask(id, data);
    res.json(updatedTask);
}

async function deleteTask(req, res) {
    
    const { id } = req.params;

    await taskService.deleteTask(id);
    res.status(204).send(); //sucesso sem conteudp
}

module.exports = { //exporta as funçoes pro router
    listTasks,
    createTask,
    updateTask,
    deleteTask
};

// req.body vem do express. nao guarda dados. fazendo validaçao