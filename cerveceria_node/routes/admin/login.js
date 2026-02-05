var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');

/* GET home page. */
router.get('/', function (req, res, next) {

  res.render('admin/login', {
    layout: 'admin/layout'

  });
});

//Para destruir variable de la sessión
router.get('/logout', function (req, res, next) {
  req.session.destroy(); //destruir
  res.render('admin/login', {
    layout: 'admin/layout'
  });
});

router.post('/', async (req, res, next) => {
  try {

    var usuario = req.body.usuario; //flavia
    var password = req.body.password; //1234 > md5

    console.log(req.body);

    var data = await usuariosModel.getUserAndPassword(usuario, password);

    console.log(data);


    if (data != undefined) {

      req.session.id_usuario = data.id; //1
      req.session.nombre = data.usuario; //flavia

      res.redirect('/admin/novedades');
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      })
    } //cierre else
  } catch (error) {
    console.log(error)
  }
})

module.exports = router;