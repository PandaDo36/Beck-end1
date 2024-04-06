var express = require('express');
var router = express.Router();

/* GET roda da cliente listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource GET');
});

/* PUT roda da cliente listing. */
router.put('/', function (req, res, next) {
  res.send('respond with a resource PUT');
});

/* POST roda da cliente listing. */
router.post('/', function (req, res, next) {
  res.send('respond with a resource POST');
});

/* DELETE roda da cliente listing. */
router.delete('/', function (req, res, next) {
  res.send('respond with a resource DELETE');
});

module.exports = router;