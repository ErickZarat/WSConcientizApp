/**
 * Created by retana on 03/09/2016.
 */
var ruta=require('express').Router();
    module.exports=(function(modelo){
        var usuario=require('../controller/ControladorUsuario.js')(modelo);
        var zona=require('../controller/ControladorZona.js')(modelo);
        var direccion=require('../controller/ControladorDireccion.js')(modelo);
        var evento=require('../controller/ControladorEvento.js')(modelo);
            ruta.get('/',function(peticion,respuesta){
            respuesta.send("Servicio iniciado");
        });

        /*
            Rutas para Usuario
         */
        ruta.post('/usuario/registro',usuario.registro);
        ruta.post('/usuario/login',usuario.login);

        ruta.get('/token',usuario.tokenGenerator);

        ruta.post('/prueba',direccion.add);

        //Token Validation
        ruta.use(usuario.tokenMiddleware);

        ruta.get('/zona',zona.getAll);

        ruta.get('/direccion/:id',direccion.get);
        ruta.post('/direccion',direccion.add);
        ruta.put('/direccion/:id',direccion.get);

        ruta.put('/evento/:id',evento.edit);
        ruta.post('/evento',evento.add);
        ruta.get('/evento/:id',evento.get);

        

        return ruta;
});