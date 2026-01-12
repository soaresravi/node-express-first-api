function errorMiddleware(error, req, res, next) { //global de tratamento de erros
    
    console.error(error);

    return res.status(500).json({
        error: 'Erro interno do servidor'
    });
}

module.exports = errorMiddleware;