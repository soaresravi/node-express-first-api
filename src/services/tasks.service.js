const db = require('../config/firebase');

async function getAllTasks() {
    const snapshot = await db.collection('tasks').get();
    
    const tasks = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    return tasks;
}

async function createTask(title) {
    
    const docRef = await db.collection('tasks').add({
        title,
        done: false
    });

    return {
        id: docRef.id,
        title,
        done: false
    };
}

module.exports = {
    getAllTasks,
    createTask
};