var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var flash = require('connect-flash');
var db = require('./db');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var movies = require('./routes/movies');
var payment = require('./routes/payment');
var totalSales = require('./routes/totalSales');
var stock = require('./routes/stock');

var app = express();
app.use(require('connect-history-api-fallback')())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('secret code'));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret:'secret code',
  cookie: {
    httpOnly: true,
    secure: false,
  },
}));
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));

db.connect(function(err) {
    if (err) {
        console.log('unable to connect to MySQL.');
        process.exit(1);
    }
});

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/movies', movies);
app.use('/api/pay', payment);
app.use('/api/total', totalSales);
app.use('/api/stock', stock);

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
