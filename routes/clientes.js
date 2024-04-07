var express = require('express');
var router = express.Router();

const clienteController = require('../controllers/clienteController');
const nomeMiddleware = require('../middlewares/middlewareClientes/nomeMiddleware');
const sobrenomeMiddleware = require('../middlewares/middlewareClientes/sobrenomeMiddleware');
const idadeMiddleware = require('../middlewares/middlewareClientes/idadeMiddleware');



/* GET roda da cliente listing. */
router.get('/', clienteController.findAll);

/* PUT roda da cliente listing. */
router.put('/', clienteController.update);

/* POST roda da cliente listing. */
router.post('/',nomeMiddleware.validateName,sobrenomeMiddleware.validateFamilyName,idadeMiddleware.validateAge,clienteController.save,);

/* DELETE roda da cliente listing. */
router.delete('/:id', clienteController.remove);

module.exports = router;