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

module.exports = {
    getAllTasks,
    createTask
};