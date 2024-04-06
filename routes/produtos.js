var express = require('express');
var router = express.Router();

/* GET roda da produto listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource GET');
});

/* PUT roda da prudutos listing. */
router.put('/', function (req, res, next) {
    res.send('respond with a resource PUT');
  });
  
  /* POST roda da produtos listing. */
  router.post('/', function (req, res, next) {
    res.send('respond with a resource POST');
  });
  
  /* DELETE roda da produtos listing. */
  router.delete('/', function (req, res, next) {
    res.send('respond with a resource DELETE');
  });

module.exports = router;