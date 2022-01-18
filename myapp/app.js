var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//login and register:
var loginRouter = require('./routes/index')
var registerRouter = require('./routes/register')
var loginProcessRouter = require('./routes/login_process')
var RegisterProcessRouter = require('./routes/register_process')
//post:
var postRouter = require('./routes/posts')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', indexRouter);
app.use('/users', usersRouter);
//login and register:
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/login_process',loginProcessRouter)
app.use('/register_process',RegisterProcessRouter)

//post:
app.use('/posts',postRouter)

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

//app.listen(3010,function(){console.log("start")})

module.exports = app;
