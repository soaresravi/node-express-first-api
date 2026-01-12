const db = require('../config/firebase');
const bcrypt = require('bcryptjs');

async function createUser(email, password) {
    
    const hashedPassword = await bcrypt.hash(password, 10); //senha criptografada

    const userRef = await db.collection('users').add({
        email,
        password: hashedPassword
    });

    return {
        id: userRef.id,
        email
    };
}

async function findUserByEmail(email) {
    
    const snapshot = await db
    .collection('users')
    .where('email', '==', email)
    .limit(1)
    .get();
    
    if (snapshot.empty) return null;
    const doc = snapshot.docs[0];

    return {
        id: doc.id,
        ...doc.data()
    };
}

module.exports = {
    createUser,
    findUserByEmail
};