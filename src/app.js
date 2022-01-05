var createError = require('http-errors');
var express = require('express');
const cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var typeorm = require("typeorm");    // подтянули из подраздела Using with JavaScript. из сайта typeorm для js

var indexRouter = require('./controller/index');  // изменили пути
var usersRouter = require('./controller/users');  // изменили пути

var app = express();
app.use(cors());
app.options('*', cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/test', usersRouter);  //  было изначально users

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

typeorm.createConnection({   // вставили из сайта typeorm для js из подраздела Using with JavaScript. Только данные свои подставили
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "pg_db",
    synchronize: true,
    entities: [            // подключение моих entity к конфигурации. Здесь лежат пути к моим файлам, которые лежат в папке entity
      require("./entity/User"),
      require("./entity/Post"), // Post заменяю на свой созданный файл 
      require("./entity/Category")  //   ТУТ ПОДКЛЮЧАЮ  мои таблицы
  ],
  cli: {
    migrationsDir: 'src/migration'
  },
}).then(function (connection) {
  console.log("Connection Success");

}).catch(function(error) {  //  catch переловит все ошибки
  console.log("Error: ", error);
});

app.listen('3000','0.0.0.0',()=>{    // сбросил app.listen. Это запускаем мой сервер/backend. Чтобы он был на 3000 порту
  console.log("server is listening on 3000 port");
})