var express = require('express');
var router  = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/nombre/:nombre', function(req, res) {
  res.render( 'usuario', { title: 'Usuario', nombre: req.params.nombre } ); 
  res.send('USUARIO: nombre ' + req.params.nombre );
  // Llama a la vista views/usuario.jade
  // Le pasa un objeto a la vista          
});

module.exports = router;
