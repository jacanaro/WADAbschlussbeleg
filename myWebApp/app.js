const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const contactsRouter = require('./routes/contacts');
const advizRouter = require('./routes/adviz');

const app = express();


// view engine setup - DAS BRAUCHEN WIR NICHT
/*
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

 */
/*
app.set('view engine', 'ejs');

 */

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/adviz', advizRouter);
app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/adviz/contacts', contactsRouter);

/*
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

 */
/*
var ErrorHandler = require('express-error-handler');
// define below all other routes
var errorHandler = ErrorHandler({
  static: {
    '404': 'error.html', // put this file in your Public folder
    '500': 'error.html' // ditto
  }
  });

// any unresolved requests will 404
app.use(function(req,res,next) {
  var err = new Error('Not Found');
  err.status(404);
  next(err);
});


app.use(errorHandler);


 */

module.exports = app;
