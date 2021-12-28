var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var typeorm = require("typeorm");

var indexRouter = require('./controller/index');
var usersRouter = require('./controller/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/test', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

console.log('sdghgsfhasdasddgfsd')

module.exports = app;

typeorm.createConnection({
  type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "pg_db",
    synchronize: true,
    entities: [            // подключение моих entity к конфигурации. Здесь лежат пути к моим файлам, которые лежат в папке entity
      require("./entity/Post"), // Post заменяю на свой созданный файл 
      require("./entity/Category")  // это мои таблицы
  ]
}).then(function (connection) {
  console.log("Success");
}).catch(function(error) {
  console.log("Error: ", error);
});

app.listen('3000','0.0.0.0',()=>{
  console.log("server is listening on 3000 port");
})