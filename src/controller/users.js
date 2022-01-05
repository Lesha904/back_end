var express = require('express');
var router = express.Router();
var User = require('../entity/User');   // Добавили с К.
var typeorm = require("typeorm");
//var userRepository = typeorm.getConnection().getRepository(User);
/* GET users listing. */
router.get('/users', async function(req, res, next) {   // название фун. которую хочу вызвать на фронте router.get('/users',
  // query to DB with Typeorm
  var userRepository = typeorm.getConnection().getRepository(User);
  const firstUser = await userRepository
    .createQueryBuilder("user")
    .getMany();
    console.log('firstUser==>', firstUser);

  res.send(
    firstUser
  );    // отправить ответ. как в фун. return
});

router.post("/save", async function(req, res, next) {
  var userRepository = typeorm.getConnection().getRepository(User);
  console.log("userRepository==>", userRepository)
  const user = await userRepository.create(req.body);
  const results = await userRepository.save(user);
  return res.send(results);
});

router.get('/1', function(req, res, next) {  // изменить  название пути
  res.send('respond with a resource 1');
});

router.get('/2', function(req, res, next) {
  res.send('respond with a resource 2');
});

router.get('/3', function(req, res, next) {
  res.send('respond with a resource 3');
});

router.get('/4', function(req, res, next) {
  res.send('respond with a resource 4');
});

module.exports = router;

