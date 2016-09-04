/**
 * Created by Zarathos on 03/09/2016.
 */
module.exports=function(modelo){
  return{
      list:function (req, res) {
          modelo.categoria.findAll({
              where: {
                  id_categoria:req.params.id
              }
          }).then(function (data) {
              res.json(data);
          }).error(function () {
              res.json({"mensaje": "Error al listar categorias", "status": 500});
          });
      }
  }
};
