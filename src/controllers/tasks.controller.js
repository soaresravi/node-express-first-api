const taskService = require('../services/tasks.service');

async function listTasks(req, res, next) {

    try {
      
        const tasks = await taskService.getAllTasks(); //espera o firestore responder
        return res.json(tasks); //devolve json
  
    } catch (error) {
        next(error);
    }
}

async function createTask(req, res, next) {

    try {

        const { title } = req.body; //pega o titulo enviado

        if (!title) {
            return res.status(400).json({ error: 'Título não é obrigatório'}); //validaçao basica
        } 

        const task = await taskService.createTask(title); //cria no firestore
        res.status(201).json(task); //recurso criado

    } catch (error) {
        next(error);
    }
}

async function updateTask(req, res, next) {

    try {

        const { id } = req.params; //id da url
        const { done } = req.body; //dados p atualizar

        await taskService.updateTask(id, done);
        return res.status(204).send();

    } catch (error) {
        next(error);
    }
}

async function deleteTask(req, res, next) {

    try {

        const { id } = req.params;

        await taskService.deleteTask(id);
        return res.status(204).send(); //sucesso sem conteudp
  
    } catch (error) {
        next(error);
    }
    
}

module.exports = { //exporta as funçoes pro router
    listTasks,
    createTask,
    updateTask,
    deleteTask
};

// req.body vem do express. nao guarda dados. fazendo validaçao