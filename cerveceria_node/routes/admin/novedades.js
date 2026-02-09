var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

/* GET home page. */
/*pata listar*/
router.get('/', async function (req, res, next) {

  var novedades = await novedadesModel.getNovedades();

  res.render('admin/novedades', {
    layout: 'admin/layout',
    usuario: req.session.nombre,
    novedades

});
});

/*para borrar*/
router.get('/eliminar/:id', async (req, res, next) => {
  const id = req.params.id;
  await novedadesModel.deleteNovedadesById(id);
  res.redirect('/admin/novedades')
})

/*Muestre el formulario de agregar, no lo procesa, muestra el diseño*/
router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', { //agregar.hbs
    layout: 'admin/layout'
  }) //cierra render
})//cierra Get

/*Captura los datos del formulario > agregar y los coloca en la tabla de novedades insert*/
router.post('/agregar', async (req, res, next) => {
  try {
    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
      await novedadesModel.insertNovedades(req.body);
      res.redirect('/admin/novedades')
    } else {
      res.render('admin/agregar', {
        layout: '/admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: '/admin/layout',
      error: true,
      message: 'No se cargo la novedad'
    })
  }
})

/*formulario de modificar + datos cargados de la novedad  elegida por el ID*/
router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;

  var novedad = await novedadesModel.getNovedadById(id);

  res.render('admin/modificar', { //modificar.hbs
    layout: 'admin/layout',
    novedad
  });
}); //cierro get -- modificar 

router.post('/modificar', async (req, res, next) => {
  try {
    var obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo
    }

    /*AGREGAMOS ESTE IF: Si alguno está vacío, mostramos el error*/
    if (obj.titulo == "" || obj.subtitulo == "" || obj.cuerpo == "") {
      return res.render('admin/modificar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos para modificar',
        novedad: { ...obj, id: req.body.id } // Esto mantiene los datos en los cuadritos
      });
    }

    console.log(obj) //para ver si trae los datos
    await novedadesModel.modificarNovedadById(obj, req.body.id);
    res.redirect('/admin/novedades');
  } catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifica la novedad'
    });
  }
});

module.exports = router;