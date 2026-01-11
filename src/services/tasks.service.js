let tasks = [];
let nextId = 1; //simula um banco 

function getAllTasks() {
    return tasks; //retorna todas as tarefas
}

function createTask(title) {
  
    const task = {
        id: nextId++, //id automatico
        title, //vem do controller
        done: false
    };

    tasks.push(task); //salva no banco
    return task; //devolve pro contoller
}

module.exports = {
    getAllTasks,
    createTask
};
