/**
 * Created by Zarathos on 03/09/2016.
 */
module.exports=function(modelo){
  return{
      add:function (req, res) {
          modelo.solucion.create(req.body).then(function () {
              res.json({"mensaje": "Solucion agregada"});
          }).error(function (err) {
              res.json({"mensaje": "La solucion no se pudo agregar, si esto continua comuniquese con el administrador."});
              throw err;
          });
      },
      list:function (req, res) {
          modelo.solucion.findAll({
              where: {
                  id_solucion:req.params.id
              }
          }).then(function (data) {
              res.json(data);
          }).error(function () {
              res.json({"mensaje": "Error al listar soluciones", "status": 500});
          });
      },
      edit:function (req, res) {
          modelo.solucion.find({
              where:{
                  id_solucion:req.params.id
              }
          }).then(function (solucion) {
              if(solucion){
                  solucion.updateAttributes(req.body).then(function (solucion) {
                      res.json({"mensaje":"La solucion se ha modificado"})
                  });
              }
          }).error(function (err) {
              res.json({"mensaje":"Error al modificar la solucion"});
          });
      }
  }
};
