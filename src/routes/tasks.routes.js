const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { //get lista tarefas
    return res.json({ message: 'Listar tarefas'});
});

router.post('/', (req, res) => { //post cria
    return res.json({ message: 'Criar tarefa' });
});

module.exports = router;