var express = require('express');
var router  = express.Router();

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

// POST request to the root URL
router.post('/', function(req, res) {
  res.send('/ POST OK');
});

// PUT request to the root URL
router.put('/', function(req, res) {
  res.send('/ PUT OK');
});

// PATCH request to the root URL
router.patch('/', function(req, res) {
  res.send('/ PATCH OK');
});

// DELETE request to the root URL
router.delete('/', function(req, res) {
  res.send('/ DELETE OK');
});

// OPTIONS request to the root URL
router.options('/', function(req, res) {
  res.send('/ OPTIONS OK');
});

// M-SEARCH request to the root URL
router['m-search']('/', function(req, res) {
  res.send('/ M-SEARCH OK');
});

// NOTIFY request to the root URL
router.notify('/', function(req, res) {
  res.send('/ NOTIFY OK');
});

// SUBSCRIBE request to the root URL
router.subscribe('/', function(req, res) {
  res.send('/ SUBSCRIBE OK');
});

// UNSUBSCRIBE request to the root URL
router.unsubscribe('/', function(req, res) {
  res.send('/ UNSUBSCRIBE OK');
});




module.exports = router;
