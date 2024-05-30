const clienteService = require('../services/clienteService');
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 30, checkperiod: 35 });

const findAll = async (request, response) => {
    const cacheKey = 'clientes_all';
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
        console.log('Returning data from cache');
        return response.status(200).json(cachedData);
    }

    try {
        const clientes = await clienteService.findAll();
        cache.set(cacheKey, clientes);
        console.log('Returning data from database');
        return response.status(200).json(clientes);
    } catch (error) {
        return response.status(500).json({ "[ERROR/SERVER]": error.message });
    }
};

const save = async (request, response) => {
    try {
        const result = await clienteService.save(request.body);
        if (result) {
            cache.del('clientes_all');
            return response.status(200).json();
        } else {
            return response.status(400).json({ "[ERROR/SERVER]": "Falha ao salvar cliente" });
        }
    } catch (error) {
        return response.status(500).json({ "[ERROR/SERVER]": error.message });
    }
};

const update = async (request, response) => {
    try {
        const result = await clienteService.update(request.body);
        if (result) {
            cache.del('clientes_all');
            return response.status(200).json();
        } else {
            return response.status(400).json({ "[ERROR/SERVER]": "Falha ao atualizar cliente" });
        }
    } catch (error) {
        return response.status(500).json({ "[ERROR/SERVER]": error.message });
    }
};

const remove = async (request, response) => {
    const { id } = request.params;
    try {
        const result = await clienteService.remove(id);
        if (result) {
            cache.del('clientes_all');
            return response.status(200).json();
        } else {
            return response.status(400).json({ "[ERROR/SERVER]": "Falha ao remover cliente" });
        }
    } catch (error) {
        return response.status(500).json({ "[ERROR/SERVER]": error.message });
    }
};

module.exports = {
    findAll,
    save,
    remove,
    update
};
