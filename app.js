'use strict';

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var routes = require('./server/routes');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, './public')));
// app.use('/', routes);
app.get('/', (req, res) => res.render('home'));
app.get('/2-3-info', (req, res) => res.render('2-3-info'));
app.get('/4-info', (req, res) => res.render('4-info'));
app.get('/5-8-info', (req, res) => res.render('5-8-info'));
app.get('/k-1-info', (req, res) => res.render('k-1-info'));
app.get('/dhs-coaches', (req, res) => res.render('dhs-coaches'));
app.get('/email-list', (req, res) => res.render('email-list'));
app.get('/practice-schedule', (req, res) => res.render('practice-schedule'));
app.get('/register', (req, res) => res.render('register'));
app.get('/summer-camp', (req, res) => res.render('summer-camp'));
app.get('/team-placement-faq', (req, res) => res.render('team-placement-faq'));
app.get('/team-placement', (req, res) => res.render('team-placement'));
app.get('/team-rosters', (req, res) => res.render('team-rosters'));

// error handlers

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development prints a stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });

// production, no stacktrace
} else {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });
}

// Start the server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

