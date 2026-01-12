const db = require('../config/firebase');

async function getAllTasks() {

    try {

        const snapshot = await db.collection('tasks').get(); //busca todos os documentos de tasks. snapshot: resultado bruto
    
        return snapshot.docs.map(doc => ({
            id: doc.id, 
            ...doc.data() //campos
        })); //array de objetos

    } catch (error) { //joga o erro pra cima (controller)
        throw new Error('Erro ao buscar tarefas');
    }
   
}

async function createTask(title) { //cria uma nova tarefa (aq q faz ir pro firestore)
    
    try {

        const docRef = await db.collection('tasks').add({ //cria um doc novo
            title,
            done: false
        }); //firebase gera o id automaticamente

        return {
            id: docRef.id,
            title,
            done: false
        }; //devolve a task ja no formato da api

    } catch (error) {
        throw new Error('Erro ao criar tarefa')
    }
}

async function updateTask(id, done) { //atualiza uma tarefa

    try {
        await db.collection('tasks').doc(id).update({ done });
    } catch (error) {
        throw new Error('Erro ao atualizar tarefa');
    }

}

async function deleteTask(id) { //deleta

    try {
        await db.collection('tasks').doc(id).delete();
    } catch (error) {
        throw new Error('Erro ao deletar');
    }
}

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
};