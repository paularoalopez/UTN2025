var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");
var novedadesModel = require('../models/novedadesModel');


/* GET home page. */
/*muestra todo el diseño*/
router.get('/', async function(req, res, next) {

  var novedades = await novedadesModel.getNovedades();

  res.render('index', {
    novedades
  });
});


/*procesador de formulario*/
router.post('/', async (req, res, next) => {

  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var telefono = req.body.tel;
  var mensaje = req.body.mensaje;

  console.log(req.body)

  var obj = {
    to: 'paula.roa.digital@gmail.com',
    subject: 'CONTACTO WEB',
    html: nombre + " " + apellido + " se contato a través de la web y quiere más información a este correo : " + email + ".<br> Además, hizo este comentario : " + mensaje + ".<br> Su tel es: " + telefono
  }

  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  var info = await transporter.sendMail(obj);

  res.render('index', {
    message: 'Mensaje enviado correctamente'
  });

});

module.exports = router;
