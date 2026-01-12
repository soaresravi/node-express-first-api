const jwt = require('jsonwebtoken');
const JWT_SECRET = 'secreto_super_seguro';

function authMiddleware(req, res, next) {
    
    const authHeader = req.headers.authorization;
    
    if (!authHeader) { //verifica se o token foi enviado
        return res.status(401).json({ error: 'Token não informado' });
    }

    const [, token] = authHeader.split(' '); //formato bearer token

    try {
       
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId; //salva a info do usuario
        next();
        
    } catch {
        return res.status(401).json({ error: 'Token inválido' });
    }
}

module.exports = authMiddleware;