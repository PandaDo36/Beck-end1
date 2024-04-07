var express = require('express');
var router = express.Router();

const clienteController = require('../controllers/clienteController');
const nomeMiddleware = require('../middlewares/nomeMiddleware');
const sobrenomeMiddleware = require('../middlewares/sobrenomeMiddleware');
const idadeMiddleware = require('../middlewares/idadeMiddleware');


 /* POST clientes*/
 router.post('/', nomeMiddleware.validateName,
 sobrenomeMiddleware.validateFamilyName,
 idadeMiddleware.validateAge,
 clienteController.save,
 );

/* GET roda da cliente listing. */
router.get('/', clienteController.findAll);

/* PUT roda da cliente listing. */
router.put('/', clienteController.update);

/* POST roda da cliente listing. */
router.post('/', clienteController.save);

/* DELETE roda da cliente listing. */
router.delete('/:id', clienteController.remove);

module.exports = router;