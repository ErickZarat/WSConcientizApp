/**
 * Created by retana on 03/09/2016.
 */
module.exports=function (modelo) {
    return{
        add:function (req,res) {
            modelo.evento.create(req.body).then(function () {
                res.json({"mensaje":"Evento Agregado"});
            }).error(function () {
                res.json({"mensaje":"Error al agregar evento"});
            });
        },
        edit:function (req,res) {
            modelo.evento.find({
                where:{
                    id_evento:req.params.id
                }
            }).then(function (evento) {
                if(evento){
                    evento.updateAttributes(req.body).then(function () {
                        res.json({"mensaje":"Evento editado correctamente"});
                    }).error(function (err) {
                        res.json({"mensaje":"Error al editar evento"})
                    });
                }
            });
        },
        get:function (req,res) {
            modelo.evento.find({
                where:{
                    id_evento:req.params.id
                }
            }).then(function (data) {
                res.json(data);
            })
        }
    }
}