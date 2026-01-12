const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userService = require('../services/users.services');

const JWT_SECRET = 'secreto_super_seguro'; //segredo do token. ideal: variavel do ambiente

async function register(req, res, next) {
    
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Dados obrigatórios'});
        }
        
        const user = await userService.createUser(email, password);
        return res.status(201).json(user);

    } catch (error) {
        next(error);
    }
}

async function login(req, res, next) {
    
    try {
        
        const { email, password } = req.body;
        const user = await userService.findUserByEmail(email);

        if (!user) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }

        const validPassword = await bcrypt.compare(password, user.password); //compara senha enviada com hash do banco

        if (!validPassword) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }

        const token = jwt.sign( //gera token jwt
            { userId: user.id },
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        return res.json({ token });

    } catch (error) {
        next(error);
    }
}

module.exports = {
    register,
    login,
}