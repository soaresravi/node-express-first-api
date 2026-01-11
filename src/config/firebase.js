const admin = require('firebase-admin'); //firebase pra backend
const serviceAccount = require('./firebaseKey.json'); //cuidado pra nao subir pro github

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
}); //autentica o backend no firebase

const db = admin.firestore(); //cria a instancia pro firestore
module.exports = db; //exporta o banco pros services