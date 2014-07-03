var config       = require('./oauth.js')
var express      = require('express');
var path         = require('path');
var favicon      = require('static-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');

var session      = require('cookie-session');
//var tokens       = require('csrf-tokens')(options);

var passport         = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

var routes       = require('./routes/index');
var users        = require('./routes/users');

var app          = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(session({
  keys: ['key1', 'key2'],
  secureProxy: false, // if you do SSL outside of node
  httpOnly: true, // not available to client via JavaScript
}));

/*
//
// EJEMPLO: Uso de sesiones
//
app.use(function (req, res, next) {
  var n = req.session.views || 0
  req.session.views = ++n
  res.end(n + ' views')
})
*/

app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

//
//
//


// config
passport.use(new FacebookStrategy({
    clientID:     config.facebook.clientID,
    clientSecret: config.facebook.clientSecret,
    callbackURL:  config.facebook.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      return done(null, profile);
    });
  }
));



app.use('/', routes);
app.use('/users', users);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('UHH!');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
// app.set('env', 'production');
// console.log( app.get('env') );
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
