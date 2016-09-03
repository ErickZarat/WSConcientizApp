/**
 * Created by retana on 03/09/2016.
 */
module.exports=function (modelo) {
    return{
        add:function (req,res) {
            modelo.direccion.create(req.body)
            .then(function () {
                res.json({"mensaje":"Dirección Agregada Correctamente"})
            }).error(function () {
                res.json({"mensaje":"La dirección no se pudo agregar, si esto continua comuniquese con el administrador."})
            });
        },
        get:function (req,res) {
            modelo.direccion.findAll({
               where:{
                   id_usuario:req.params.id
               }
            }).then(function (direccion) {
                res.json(direccion);
            });
        },
        edit:function (req,res) {
            modelo.direccion.find({
                where:{
                    id_direccion:req.params.id
                }
            }).then(function (direccion) {
                if(direccion){
                    direccion.updateAttributes(req.body).then(function (direccion) {
                        res.json({"mensaje":"La dirección se ha modificado"})
                    });
                }
            }).error(function (err) {
                res.json({"mensaje":"Error al modificar la dirección"});
            });
        }
    }
}