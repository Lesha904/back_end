var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', newValue: 'newValue' });  // выводит на экран оба значения
});

module.exports = router;
