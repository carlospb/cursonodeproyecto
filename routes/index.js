var express  = require('express');
var router   = express.Router();
var passport = require('passport');

//
//  Este callback o middleware permite controlar si el usuario tiene una
//  cookie predeterminada para acceder al sitio.
//  Si no la tiene sera redirigido a la ruta '/site-not-available'
//
/*
var cookieAuthorizer = function(req, res, next) {
    if(typeof req.cookies.authorizeme == "undefined"){
        res.redirect('/site-not-available');         
    } else {
        next();
    }
}
*/

// GET request to the root URL
router.get('/', function(req, res) {
  res.send('/ GET OK');
});

// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
router.get('/auth/facebook', passport.authenticate('facebook'));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
router.get('/auth/facebook/callback', 
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }));


module.exports = router;
