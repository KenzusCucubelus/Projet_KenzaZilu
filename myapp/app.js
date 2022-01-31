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

//account:
var accountRouterS=require('./routes/myinfos_stu')
var accountUpdateRouterS=require('./routes/update_user_stu')
var pwdUpdateRouterS=require('./routes/update_pwd_stu')
var accountRouterT=require('./routes/myinfos_prof')
var accountUpdateRouterT=require('./routes/update_user_prof')
var pwdUpdateRouterT=require('./routes/update_pwd_prof')

//post:
var postRouterS = require('./routes/post_list_stu')
var postRouterT = require('./routes/post_list_prof')
var contenuRouterS = require('./routes/contenu_post_etu')
var postUpdateRouterS =require('./routes/update_post_etu_process')
var postAddRouterS = require('./routes/add_post_etu')
var contenuRouterT = require('./routes/contenu_post_toValid')
var postUpdateRouterT = require('./routes/update_post_prof_process')
var postDeleteRouter = require('./routes/delete_post')



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

//Account:
app.use('/myinfos_stu',accountRouterS)
app.use('/update_user_stu',accountUpdateRouterS)
app.use('/update_pwd_stu',pwdUpdateRouterS)
app.use('/myinfos_prof',accountRouterT)
app.use('/update_user_prof',accountUpdateRouterT)
app.use('/update_pwd_prof',pwdUpdateRouterT)

//post:
app.use('/post_list_stu',postRouterS)
app.use('/post_list_prof',postRouterT)
app.use('/contenu_post_etu',contenuRouterS)
app.use('/update_post_etu_process',postUpdateRouterS)
app.use('/add_post_etu',postAddRouterS)
app.use('/contenu_post_toValid',contenuRouterT)
app.use('/update_post_prof_process',postUpdateRouterT)
app.use('/delete_post',postDeleteRouter)


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
