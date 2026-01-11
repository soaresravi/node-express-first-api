const express = require('express'); //importa o express
const taskRoutes = require('./routes/tasks.routes');
const app = express(); //cria a aplicação

app.use(express.json());

app.get('/', (req, res) => { //cria uma rota. get: alguem acessou  RAIZ DA API. req: request (oq o cliente envia). res(repsonse): oq eu devolvo
    res.send('Api rodando!! Olá mundo'); //envia uma resposta
});

app.use('/tasks', taskRoutes);

app.listen(3000, () => { //liga o servidor (porta 3000 padrao)
    console.log('Servidor rodando em http://localhost:3000');
});