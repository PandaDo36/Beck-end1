var express = require('express');
var router = express.Router();

const produtosController = require('../controllers/produtosController');
const nomeMiddleware = require('../middlewares/middlewareProdutos/nomeMiddleware');
const descricaoMiddleware = require('../middlewares/middlewareProdutos/descricaoMiddleware');
const precoMiddleware = require('../middlewares/middlewareProdutos/precoMiddleware');



/* GET roda da cliente listing. */
router.get('/', produtosController.findAll);

/* PUT roda da cliente listing. */
router.put('/', produtosController.update);

/* POST roda da cliente listing. */
router.post('/',nomeMiddleware.validateName,descricaoMiddleware.validateFamilyDescricao,precoMiddleware.validatepreco,produtosController.save,);

/* DELETE roda da cliente listing. */
router.delete('/:id', produtosController.remove);

module.exports = router;