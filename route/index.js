/**
 * Created by retana on 03/09/2016.
 */
var ruta=require('express').Router();
    module.exports=(function(modelo){
        var usuario=require('../controller/ControladorUsuario.js')(modelo);
        var zona=require('../controller/ControladorZona.js')(modelo);
        var direccion=require('../controller/ControladorDireccion.js')(modelo);
        var evento=require('../controller/ControladorEvento.js')(modelo);

        var apoyo=require('../controller/ControladorApoyo.js')(modelo);
        var categoria=require('../controller/ControladorCategoria.js')(modelo);
        var problema=require('../controller/ControladorProblema.js')(modelo);
        var prueba=require('../controller/ControladorPrueba.js')(modelo);
        var solucion=require('../controller/ControladorSolucion.js')(modelo);
            ruta.get('/',function(peticion,respuesta){
            respuesta.send("Servicio iniciado");
        });

        /*
            Rutas para Usuario
         */
        ruta.post('/usuario/registro',usuario.registro);
        ruta.post('/usuario/login',usuario.login);

        ruta.get('/token',usuario.tokenGenerator);

        //Token Validation
        ruta.use(usuario.tokenMiddleware);

        ruta.get('/zona',zona.getAll);

        ruta.get('/direccion/:id',direccion.get);
        ruta.post('/direccion',direccion.add);
        ruta.put('/direccion/:id',direccion.get);

        ruta.put('/evento/:id',evento.edit);
        ruta.post('/evento',evento.add);
        ruta.get('/evento/:id',evento.get);

        ruta.get('/apoyo/:id', apoyo.list);
        ruta.get('/categoria/:id', categoria.list);

        ruta.get('/problema/:id', problema.list);
        ruta.post('/problema',problema.add);

        ruta.get('/prueba/:id', prueba.list);
        ruta.post('/prueba', prueba.add);

        ruta.get('/solucion/:id', solucion.list);
        ruta.put('/solucion/:id',solucion.edit );
        ruta.post('/solucion', solucion.add);

        return ruta;
});