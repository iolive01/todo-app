/*

    app.js
    Express backbone, organizes routes and mongodb connection.

 */

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

// TODO: make the link more private somehow
var mongoURL = "mongodb://heroku_dl6q3j4d:heroku_dl6q3j4d@ds157574.mlab.com:57574/heroku_dl6q3j4d";
mongoose.connect(mongoURL, { useNewUrlParser: true }, function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log(mongoose.connection.readyState);
        console.log('connected! should be 1');
    }
});

// Common model, will be exported to all mongoose objects
var Todo = mongoose.model('Todo', {text: String, done: false});

// Different routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var showListRouter = require('./routes/showList');
var addItemRouter = require('./routes/addItem');
var deleteItemRouter = require('./routes/deleteItem');
var markAllDoneRouter = require('./routes/markAllDone');
var clearAllRouter = require('./routes/clearAll');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/showList', showListRouter);
app.use('/addItem', addItemRouter);
app.use('/deleteItem', deleteItemRouter);
app.use('/markAllDone', markAllDoneRouter);
app.use('/clearAll', clearAllRouter);

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
