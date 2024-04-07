const validatepreco = (request, response, next) => {
    const { body } = request;
    if (body.preco == undefined || body.idade === '') {
        return response.status(400)
            .json({ message: 'O campo "idade" é obrigatório' });
    }
    if (isNaN(parseInt(body.preco)) || parseInt(body.preco) < 0 || parseInt(body.preco) > 100000) {
        return response.status(400)
            .json({ message: 'O campo "idade" deve ser inteiro positivo e valor possível' });
    }
    next();
};
module.exports = { validatepreco };