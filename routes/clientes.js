var express = require('express');
var router = express.Router();

const clienteController = require('../controllers/clienteController');
const nomeMiddleware = require('../middlewares/middlewareClientes/nomeMiddleware');
const sobrenomeMiddleware = require('../middlewares/middlewareClientes/sobrenomeMiddleware');
const idadeMiddleware = require('../middlewares/middlewareClientes/idadeMiddleware');
const { validateCliente } = require('../middlewares/validation.middleware');

/* GET rota da cliente listing. */
router.get('/', clienteController.findAll);

/* PUT rota da cliente listing. */
router.put('/', clienteController.update);

/* POST rota da cliente listing. */
router.post(
  '/',
  nomeMiddleware.validateName,
  sobrenomeMiddleware.validateFamilyName,
  idadeMiddleware.validateAge,
  validateCliente, 
  clienteController.save,
);

/* DELETE rota da cliente listing. */
router.delete('/:id', clienteController.remove);

module.exports = router;
