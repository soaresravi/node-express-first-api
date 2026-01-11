const db = require('../config/firebase');

async function getAllTasks() {
   
    const snapshot = await db.collection('tasks').get(); //busca todos os documentos de tasks. snapshot: resultado bruto
    
    const tasks = snapshot.docs.map(doc => ({
        id: doc.id, 
        ...doc.data() //campos
    })); //array de objetos

    return tasks; //retorna as tarefas pro controller
}

async function createTask(title) { //cria uma nova tarefa (aq q faz ir pro firestore)
    
    const docRef = await db.collection('tasks').add({ //cria um doc novo
        title,
        done: false
    }); //firebase gera o id automaticamente

    return {
        id: docRef.id,
        title,
        done: false
    }; //devolve a task ja no formato da api
}

async function updateTask(id, data) { //atualiza uma tarefa
    
    const taskRef = db.collection('tasks').doc(id); //referencia documento pelo id
    await taskRef.update(data); //atualiza pelos ccampos enviados
    const updatedTask = await taskRef.get(); //busca tarefa atualizada

    return {
        id: updatedTask.id,
        ...updatedTask.data()
    };
}

async function deleteTask(id) { //deleta
    const taskRef = db.collection('tasks').doc(id);
    await taskRef.delete();
}

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
};