var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {   // название фун. которую хочу вызвать на фронте router.get('/users',
  res.send({user: 'User 1'});    // отправить ответ. как в фун. return
});

router.post('/1', function(req, res, next) {
  res.send('respond with a resource 1');
});

router.get('/2', function(req, res, next) {
  res.send('respond with a resource 2');
});

router.get('/3', function(req, res, next) {
  res.send('respond with a resource 3');
});

router.get('/4', function(req, res, next) {
  res.send('respond with a resource 3');
});
module.exports = router;

