/**
 * Created by retana on 03/09/2016.
 */
var ruta=require('express').Router();
module.exports=(function(modelo){
    var usuario=require('../controller/ControladorUsuario.js')(modelo);
     ruta.get('/',function(peticion,respuesta){
        respuesta.send("Servicio iniciado");
    });
    /*
        Rutas para Usuario
     */
    ruta.post('/usuario/registro',usuario.registro);
    ruta.post('/usuario/login',usuario.login);

    ruta.get('/token',usuario.tokenGenerator);

    ruta.use(usuario.tokenMiddleware);
    ruta.get('/prueba',usuario.prueba)
    return ruta;
});