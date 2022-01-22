var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//login and register:
var loginRouter = require('./routes/login')
var registerRouter = require('./routes/register')
var loginProcessRouter = require('./routes/login_process')
var RegisterProcessRouter = require('./routes/register_process')
//post:
var postRouterS = require('./routes/post_list_stu')
//account:
var accountRouter=require('./routes/myinfos')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//session:
app.use(cookieParser('sessiontest'));
app.use(session({
 secret: 'sessiontest',//与cookieParser中的一致
 resave: true,
 saveUninitialized:true
}));

//login and register:
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/login_process',loginProcessRouter)
app.use('/register_process',RegisterProcessRouter)

//post:
app.use('/post_list_stu',postRouterS)

//Account:
app.use('/myinfos',accountRouter)



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

module.exports = app;
